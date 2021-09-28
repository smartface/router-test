import {
    NativeRouter as Router,
    NativeStackRouter as StackRouter,
    Route,
    BottomTabBarRouter
} from '@smartface/router';
import { tabItems } from './bottomtabbar';
import createPageContext from '@smartface/contx/lib/smartface/pageContext';
import Application from '@smartface/native/application';
import Color from '@smartface/native/ui/color';
import Page1 from 'pages/page1';
import Page2 from 'pages/page2';


// class StylingComponent {
//     subscribeContext({
//         type, // context type
//         style, // style with native objects
//         rawStyle // style with json objects
//     }) {
//         console.log('styling context');
//         console.log(JSON.stringify(rawStyle));
//         // You can assign styles below using style object
//         // 
//         // bottomTabBarRouter
//     }
// }

// StylingComponent.$$styleContext = {
//     classNames: "",
//     userProps: {
//         width: null,
//         height: null,
//         paddingLeft: 10,
//         paddingRight: 10
//     }
// };

// const pageContext = createPageContext(new StylingComponent(), "btbModal", () => { });

// Theme styling BottomTabBarRouter using Application.theme
// Application.theme(
//     pageContext,
//     'btbModal'
// );

const bottomTabBarRouter = BottomTabBarRouter.of({
    path: "/example/btbmodal/btb",
    to: "/example/btbmodal/btb/tab1",
    tabbarParams: () => ({
        ios: { translucent: false },
        itemColor: {
            normal: Color.YELLOW,
            selected: Color.RED
        },
        backgroundColor: Color.BLUE
    }),
    items: tabItems,
    // tab1
    routes: [
        StackRouter.of({
            path: "/example/btbmodal/btb/tab1",
            to: "/example/btbmodal/btb/tab1/page1",
            routes: [
                Route.of({
                    path: "/example/btbmodal/btb/tab1/page1",
                    build: (router, route) => new Page1(route.getState().routeData, router, () => router.push("/example/btbmodal/modal/page1"))
                }),
                Route.of({
                    path: "/example/btbmodal/btb/tab1/page2",
                    build: (router, route) => {
                        let { routeData, view, match } = route.getState();
                        view = view || new Page2(routeData, router, () => router.goBack());

                        return view;
                    }
                })
            ]
        }),
        // tab2
        StackRouter.of({
            path: "/example/btbmodal/btb/tab2",
            to: "/example/btbmodal/btb/tab2/page1",
            routes: [
                Route.of({
                    path: "/example/btbmodal/btb/tab2/page1",
                    build: (router, route) => new Page1(route.getState().routeData, router, () => router.push("/example/btbmodal/btb/tab2/page2"))
                }),
                Route.of({
                    path: "/example/btbmodal/btb/tab2/page2",
                    build: (router, route) => {
                        return new Page2(route.getState().routeData, router, () => router.goBack());
                    }
                })
            ]
        }),
        // tab3
        Route.of({
            path: "/example/btbmodal/btb/tab3",
            build: (router, route) => {
                return new Page1(route.getState().routeData, router, () => router.push("/example/btbmodal/btb/tab2"));
            }
        })
    ]
});

const router = StackRouter.of({
    path: "/example/btbmodal",
    to: "/example/btbmodal/btb",
    routes: [
        bottomTabBarRouter,
        StackRouter.of({
            path: "/example/btbmodal/modal",
            modal: true,
            routes: [
                Route.of({
                    path: "/example/btbmodal/modal/page1",
                    build: (router, route) => {
                        //@ts-ignore
                        return new Page2(route.getState().routeData, router, () => router.dismiss());
                    }
                })
            ]
        })
    ]
});

export default router;
