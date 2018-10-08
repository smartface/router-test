const Router = require("@smartface/router/src/native/NativeRouter");
const RouterBase = require("@smartface/router/src/router/Router");
const StackRouter = require("@smartface/router/src/native/NativeStackRouter");
const BottomTabBarRouter = require("@smartface/router/src/native/BottomTabBarRouter");
const Route = require("@smartface/router/src/router/Route");
const Color = require('sf-core/ui/color');
const Image = require("sf-core/ui/image");

const appData = require("./appData");

const router = Router.of({
    path: "/",
    isRoot: true,
    routes: [
        BottomTabBarRouter.of({
            path: "/t",
            tabbarParams: () => ({
                ios: { translucent: false },
                itemColor: Color.RED,
                unselectedItemColor: Color.YELLOW,
                backgroundColor: Color.BLUE,
                height: 100
            }),
            items: () => [{ title: "Dashboard" },
                { title: "Dealers" }
            ],
            routes: [
                StackRouter.of({
                    path: "/t/dashboard",
                    to: "/t/dashboard/dealers",
                    routes: [
                        Route.of({
                            path: "/t/dashboard/dashboard",
                            build: (match, state, router, view) => {
                                let page = extendPage("pgDashboard", state, view);
                                return page;
                            }
                        }), Route.of({
                            path: "/t/dashboard/dealers",
                            build: (match, state, router, view) => {
                                let page = extendPage("pgDealers", state, view);
                                return page;
                            }
                        }), Route.of({
                            path: "/t/dashboard/appointment",
                            build: (match, state, router, view) => {
                                let page = extendPage("pgDashboard", state);
                                return page;
                            }
                        })
                    ]
                }),
                StackRouter.of({
                    path: "/t/dealers",
                    to: "/t/dealers/index",
                    routes: [
                        Route.of({
                            path: "/t/dealers/index",
                            build: (match, state, router, view) => {
                                let page = extendPage("pgDealers", state, view);
                                return page;
                            }
                        }), Route.of({
                            path: "/t/dealers/:dealerId",
                            build: (match, state, router, view) => {
                                let page = extendPage("pgDealerDetails", state);
                                return page;
                            }
                        })
                    ]
                })
            ]
        }),
        StackRouter.of({
            path: "/user",
            routes: [
                Route.of({
                    path: '/user/phone',
                    build: (match, state, router, view) => {
                        let page = extendPage("pgPhoneEntry", state);
                        return page;
                    }
                }),
                Route.of({
                    path: '/user/sms',
                    build: (match, state, router, view) => {
                        let page = extendPage("pgSMS", state);
                        return page;
                    }
                })
            ]
        }),
        StackRouter.of({
            path: "/vehicle",
            routes: [
                Route.of({
                    path: '/vehicle/add',
                    build: (match, state, router, view) => {
                        let page = extendPage("pgAddVehicle", state);
                        page = loginRequirement.builderExtension(() => {
                            return appData.loggedIn;
                        }, match, state, router, page);
                        return page;
                    }
                })
            ]
        })
    ]
});


module.exports = exports = router;


const extendPage = (pageSourceName, state, singletonView) => {
    let pageInstnace;
    if (singletonView) {
        pageInstnace = singletonView;
    }
    else {
        let PageClass = require(`pages/${pageSourceName}.js`);
        pageInstnace = new PageClass();
    }
    pageInstnace.routeData = state.data;
    return pageInstnace;
};


const PathRequirement = require("./PathRequirement");
const loginRequirement = new PathRequirement(/^\/t\/dashboard\/(dealers|appointment)/, "/user/phone", router);
const vehicleRequirement = new PathRequirement("/vehicle/add", "/user/phone", router);

router.push("/t/dealers/dashboard");

// if (appData.loggedIn) {
//     router.push("/t/dashboard/dashboard");
// }
// else {
//     router.push("/user/phone", { appStart: true });
// }
