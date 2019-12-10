const Router = require("@smartface/router/src/native/NativeRouter");
const StackRouter = require("@smartface/router/src/native/NativeStackRouter");
const BottomTabBarRouter = require("@smartface/router/src/native/BottomTabBarRouter");
const Route = require("@smartface/router/src/router/Route");
const Color = require('sf-core/ui/color');
const Page1 = require("pages/page1");
const Page2 = require("pages/page2");

const bottomTabBarRouter = BottomTabBarRouter.of({
  path: "/example/btb-tabchange",
  to: "/example/btb-tabchange/tab1/page1",
  tabbarParams: () => ({
     itemColor: {
      normal: Color.YELLOW,
      selected: Color.RED
    },
  }),
  onTabChangedByUser: (router, /* @type ChangeEvent*/ event) => {
    console.log("Tab is changed", event.prevTabIndex, event.tabIndex);
    console.log(Router.getActiveRouter());
  },
  items: () => [{ title: "page1" }, { title: "page2" }, { title: "page3" }],
  // tab1
  routes: [
    StackRouter.of({
      path: "/example/btb-tabchange/tab1",
      to: "/example/btb-tabchange/tab1/page1",
      headerBarParams: () => { ios: { translucent: false } },
      routes: [
        Route.of({
          path: "/example/btb-tabchange/tab1/page1",
          build: (router, route) => {
            return new Page1(route.getState().routeData, router, () => router.push("/example/btb-tabchange/tab2/page2"));
          }
        }),
        Route.of({
          path: "/example/btb-tabchange/tab1/page2",
          build: (router, route) => {
            const { routeData, view, match } = route.getState();
            view = view || new Page2(routeData, router, () => router.goBack());

            return view;
          }
        })
       ]
    }),
    // tab2
    StackRouter.of({
      path: "/example/btb-tabchange/tab2",
      to: "/example/btb-tabchange/tab2/page1",
      homeRoute: 0,
      headerBarParams: () => { ios: { translucent: false } },
      routes: [
        Route.of({
          path: "/example/btb-tabchange/tab2/page1",
          build: (router, route) => new Page1(route.getState().routeData, router, () => router.push("/example/btb-tabchange/tab2/page2"))
        }),
        Route.of({
          path: "/example/btb-tabchange/tab2/page2",
          build: (router, route) => {
            return new Page2(route.getState().routeData, router, () => router.goBack());
          }
        })
      ]
    }),
    // tab3
    Route.of({
      path: "/example/btb-tabchange/tab3",
      build: (router, route) => {
        return new Page1(route.getState().routeData, router, () => router.push("/example/btb-tabchange/tab2/page1"));
      }
    })
  ]
});

module.exports = bottomTabBarRouter;
