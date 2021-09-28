import TabBarItem = require('@smartface/native/ui/tabbaritem');
import Image = require('@smartface/native/ui/image');

import {
    NativeRouter as Router,
    NativeStackRouter as StackRouter,
    Route,
    BottomTabBarRouter
} from '@smartface/router';
import Color from '@smartface/native/ui/color';
import Page1 from 'pages/page1';
import Page2 from 'pages/page2';
import Application from '@smartface/native/application';
import createPageContext from '@smartface/contx/lib/smartface/pageContext';


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

// const pageContext = createPageContext(new StylingComponent(), "btbExample");

// Theme styling BottomTabBarRouter using Application.theme
// Application.theme(
//   pageContext,
//   'btbExample'
// );

const page1TabItem = new TabBarItem({
    title: "Tab1",
    icon: Image.createFromFile("images://icon.png")
});

const page2TabItem = new TabBarItem({
    title: "Tab2",
    icon: Image.createFromFile("images://icon.png")
});

const page3TabItem = new TabBarItem({
    title: "Tab3",
    icon: Image.createFromFile("images://icon.png")
});

export const tabItems = [page1TabItem, page2TabItem, page3TabItem];

const bottomTabBarRouter = BottomTabBarRouter.of({
    path: "/example/btb",
    to: "/example/btb/tab1/page1",
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
            path: "/example/btb/tab1",
            to: "/example/btb/tab1/page1",
            routes: [
                Route.of({
                    path: "/example/btb/tab1/page1",
                    build: (router, route) => {
                        console.log("example/btb/tab1/page1");
                        return new Page1(route.getState().routeData, router, "/example/btb/tab1/page2")
                    }
                }),
                Route.of({
                    path: "/example/btb/tab1/page2",
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
            path: "/example/btb/tab2",
            to: "/example/btb/tab2/page1",
            routes: [
                Route.of({
                    path: "/example/btb/tab2/page1",
                    build: (router, route) => new Page1(route.getState().routeData, router, "/example/btb/tab2/page2")
                }),
                Route.of({
                    path: "/example/btb/tab2/page2",
                    build: (router, route) => {
                        return new Page2(route.getState().routeData, router, () => router.goBack());
                    }
                })
            ]
        }),
        // tab3
        Route.of({
            path: "/example/btb/tab3",
            build: (router, route) => {
                return new Page1(route.getState().routeData, router, "/example/btb/tab2/page1");
            }
        })
    ]
});

export default bottomTabBarRouter;