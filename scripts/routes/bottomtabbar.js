const Router = require("@smartface/router/src/native/NativeRouter");
const StackRouter = require("@smartface/router/src/native/NativeStackRouter");
const BottomTabBarRouter = require("@smartface/router/src/native/BottomTabBarRouter");
const Route = require("@smartface/router/src/router/Route");
const Color = require('sf-core/ui/color');
const Page1 = require("pages/page1");
const Page2 = require("pages/page2");
const Application = require("sf-core/application");

class StylingComponent {
    constructor(){
        
    }
}

StylingContext.@@St;

// Theme styling BottomTabBarRouter using Application.theme
Application.theme(
    new StylingContext(),
    'btbExample'
  );
  


module.exports = BottomTabBarRouter.of({
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
    items: () => [{ title: "page1" }, { title: "page2" }, { title: "page3" }],
    // tab1
    routes: [
        StackRouter.of({
            path: "/example/btb/tab1",
            to: "/example/btb/tab1/page1",
            headerBarParams: () => { ios: { translucent: false } },
            routes: [
                Route.of({
                    path: "/example/btb/tab1/page1",
                    build: (router, route) => new Page1(route.getState().routeData, router, "/example/btb/tab1/page2")
                }),
                Route.of({
                    path: "/example/btb/tab1/page2",
                    build: (router, route) => {
                        const { routeData, view, match } = route.getState();

                        return new Page2(routeData, router, () => router.goBack());
                    }
                })
            ]
        }),
        // tab2
        StackRouter.of({
            path: "/example/btb/tab2",
            to: "/example/btb/tab2/page1",
            headerBarParams: () => { ios: { translucent: false } },
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
