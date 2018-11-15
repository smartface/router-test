const Page = require('sf-core/ui/page');

var Page1 = require("pages/page1");
var Page2 = require("pages/page2");

var bottomPage1 = new Page1({});
var bottomPage2 = new Page2({});

const Router = require("@smartface/router/src/native/NativeRouter");
const ModalRouter = require("@smartface/router/src/native/NativeModalRouter");
const withModalRouter = require("@smartface/router/src/native/withModal");
const StackRouter = require("@smartface/router/src/native/NativeStackRouter");
const BottomTabBarRouter = require("@smartface/router/src/native/BottomTabBarRouter");
const Route = require("@smartface/router/src/router/Route");
const Color = require('sf-core/ui/color');

const router = Router.of({
  path: "/",
  to: "/bottom",
  isRoot: true,
  routes: [
    Route.of(routeBinder({
      path: "/pages/page2",
      build: (router, route) => {
        let Page2 = require("pages/page2");
        return new Page2({}, router);
      }
    })),
    Route.of(routeBinder({
      path: "/pages/:name([0-9]*)",
      build: (router, route) => {
        const { routeData, view } = route.getState();
        let Page1 = require("pages/page1");
        return new Page1(routeData, router);
      }
    })),
    StackRouter.of({
      path: "/stack",
      to: "/stack/path2",
      headerBarParams: () => { ios: { translucent: true } },
      routes: [
        Route.of(routeBinder({
          path: "/stack/path1",
          build: (router, route) => {

            return new Page1(route.getState().routeData, router);
          }
        })),
        Route.of(routeBinder({
          path: "/stack/path2",
          routeShouldMatch: (route, nextState) => {
            /*if (!nextState.routeData.applied) {
                // blocks route changing
                return false;
            }*/
            route.setState({
              x: 10
            });
            return false;
          },
          build: (router, route) => {
            const { routeData, view } = route.getState();
            return new Page2(routeData, router);
          }
        }))
      ]
    }),
    BottomTabBarRouter.of({
      path: "/bottom",
      to: "/bottom/stack",
      tabbarParams: () => ({
        ios: { translucent: false },
        itemColor: {
          selected: Color.RED,
          normal: Color.YELLOW
        },
        backgroundColor: Color.BLUE
      }),
      items: () => [{ title: "page1" }, { title: "page2" }, { title: "page3" }],
      routes: [
        StackRouter.of({
          path: "/bottom/stack",
          to: "/bottom/stack/path1",
          headerBarParams: () => { ios: { translucent: false } },
          routes: [
            Route.of(routeBinder({
              path: "/bottom/stack/path1",
              build: (router, route) => {
                return new Page1(route.getState().routeData, router, "/bottom/stack2/path1");
              }
            })),
            Route.of(routeBinder({
              path: "/bottom/stack/path2",
              build: (router, route) => {
                const { routeData, view, match } = route.getState();
                return new Page2(routeData, router, "/bottom/stack2");
              }
            }))
          ]
        }),
        StackRouter.of({
          path: "/bottom/stack2",
          to: "/bottom/stack2/path1",
          headerBarParams: () => { ios: { translucent: false } },
          routes: [
            Route.of(routeBinder({
              path: "/bottom/stack2/path1",
              build: (router, route) => new Page1(route.getState().routeData, router, "/bottom/stack/path2")
            })),
            Route.of(routeBinder({
              path: "/bottom/stack2/path2",
              build: (router, route) => {
                // if (!state.data.applied) {
                // blocks route changing
                // return null;
                // }

                return new Page2(route.getState().routeData, router);
              }
            }))
          ]
        }),
        Route.of(routeBinder({
          path: "/bottom/page1",
          build: (router, route) => {
            return new Page1(route.getState().routeData, router, "/bottom/stack/path1");
          }
        }))
      ]
    }),
    withModalRouter(Router.of(routeBinder({
      path: "/path3",
      // to: "/path3/modal1",
      initial: ['/path3'],
      build: (router) => {
        return new Page1({}, router, "/path3/modal2/path1", "/pages/page2");
      },
      routes: [
        Route.of({
          path: "/path3/modal1",
          build: (router) => {
            return new Page1({}, router, "/path3/modal2", "/pages/page2");
          },
        }),
        Route.of({
          path: "/path3/modal3",
          modal: true,
          build: (router, route) => {
            return new Page2({}, router, "/bottom/stack/path1");
          }
        }),
        StackRouter.of({
          path: "/path3/modal2",
          modal: true,
          build: (router, route) => {
            return new Page2({}, router, "/bottom/stack/path1");
          },
          headerBarParams: () => { ios: { translucent: false } },
          routes: [
            Route.of(routeBinder({
              path: "/path3/modal2/path1",
              build: (router, route) => new Page1(route.getState().routeData, router, "/path3/modal2/path2", () => router.goBack())
            })),
            Route.of(routeBinder({
              path: "/path3/modal2/path2",
              build: (router, route) => {
                // if (!state.data.applied) {
                // blocks route changing
                // return null;
                // }
                return new Page2(route.getState().routeData, router);
              }
            }))
          ]
        })
      ]
    }))),
    Route.of(routeBinder({
      path: "/(.*)",
      build: (router, route) => {
        return new Page1(route.getState().routeData, router, "/bottom/stack/path1");
      }
    }))
  ]
});

function routeBinder(params) {
  return Object.assign({},
    params, {
      routeDidEnter: (router, route) => {
        const { view } = route.getState();
        view.onRouteEnter && view.onRouteEnter(router, route);
        params.routeDidEnter && params.routeDidEnter(router, route);
      },
      routeDidExit: (router, route) => {
        const { view } = route.getState();
        view.onRouteExit && view.onRouteExit(router, route);
        params.routeDidExit && params.routeDidExit(router, route);
      }
    });
}

const unlisten = router.listen((location, action) => {
  // location.state.userState
  console.log(` ---- new route location: ${location.pathname} ${action}`);
});

router.push("/path3");

module.exports = router;
