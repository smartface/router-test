const Router = require("@smartface/router/src/native/NativeRouter");
const StackRouter = require("@smartface/router/src/native/NativeStackRouter");
const BottomTabBarRouter = require("@smartface/router/src/native/BottomTabBarRouter");
const Route = require("@smartface/router/src/router/Route");
const Color = require('sf-core/ui/color');
const Page1 = require("pages/page1");
const Page2 = require("pages/page2");
const Application = require("sf-core/application");
const createPageContext = require("@smartface/contx/lib/smartface/pageContext");

class StylingComponent {
  subscribeContext({
    type, // context type
    style, // style with native objects
    rawStyle // style with json objects
  }) {
    // You can assign styles below using style object
    // 
    // bottomTabBarRouter
  }
}

StylingComponent.$$styleContext = {
  classNames: "",
  userProps: {
    width: null,
    height: null,
    paddingLeft: 10,
    paddingRight: 10
  }
};

const pageContext = createPageContext(new StylingComponent(), "btbModal");

// Theme styling BottomTabBarRouter using Application.theme
Application.theme(
  pageContext,
  'btbModal'
);

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
  items: () => [{ title: "Tab 1" }, { title: "Tab 2" }, { title: "Tab 3" }],
  // tab1
  routes: [
    StackRouter.of({
      path: "/example/btbmodal/btb/tab1",
      to: "/example/btbmodal/btb/tab1/page1",
      headerBarParams: () => { ios: { translucent: false } },
      routes: [
        Route.of({
          path: "/example/btbmodal/btb/tab1/page1",
          build: (router, route) => new Page1(route.getState().routeData, router, () => router.push("/example/btbmodal/modal/page1"))
        }),
        Route.of({
          path: "/example/btbmodal/btb/tab1/page2",
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
      path: "/example/btbmodal/btb/tab2",
      to: "/example/btbmodal/btb/tab2/page1",
      headerBarParams: () => { ios: { translucent: false } },
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
  headerBarParams: () => { ios: { translucent: false } },
  routes: [
    bottomTabBarRouter,
    StackRouter.of({
      path: "/example/btbmodal/modal",
      modal:true,
      routes: [
        Router.of({
          path: "/example/btbmodal/modal/page1",
          build: (router, route) => {
            return new Page2(route.getState().routeData, router, () => router.dismiss());
          }
        })
      ]
    })
  ]
});

module.exports = router;
