/* globals lang */
require("i18n/i18n.js"); // Generates global lang object

const Application = require("sf-core/application");
const OS = require('sf-core/device/system').OS;


// Set uncaught exception handler, all exceptions that are not caught will
// trigger onUnhandledError callback.
Application.onUnhandledError = function(e) {
    console.log(JSON.stringify(e));
    alert({
        title: e.type || lang.applicationError,
        message: OS === "Android" ? e.stack : (e.message + "\n\n*" + e.stack)
    });
};

require("sf-extension-utils");
require("./theme");

const Network = require("sf-core/device/network");
var notifier = new Network.createNotifier();
const bottomtabbarExample = require("./routes/bottomTabBar");


notifier.subscribe((connectionType) => {
    if (connectionType === Network.ConnectionType.NONE) {
        alert("No Network Connection");
    }
});

const {
    NativeRouter: Router,
    Router: RouterBase,
    NativeStackRouter: StackRouter,
    BottomTabBarRouter,
    Route
} = require("@smartface/router");


const router = Router.of({
    path: "/",
    to: "/pages/page1",
    isRoot: true,
    routes: [
        bottomtabbarExample,
        Route.of({
            path: "/newss/pagePush",
            build: (router, route) => {
                const { routeData, view } = route.getState();
                let PagePush = require("pages/pagePush");
                return new PagePush(routeData, router);
            }
        }),
        Route.of({
            path: "/pushes/drawPage",
            build: (router, route) => {
                const { routeData, view } = route.getState();
                let DrawPage = require("pushes/drawPage");
                return new DrawPage(router, routeData);
            }
        }),
        StackRouter.of({
            path: "/pages",
            routes: [
                Route.of({
                    path: "/pages/page1",
                    build: (router, route) => {
                        const { routeData, view } = route.getState();
                        let Page1 = require("pages/page1");
                        return new Page1(routeData, router);
                    }
                }),
                Route.of({
                    path: "/pages/page2",
                    build: (router, route) => {
                        const { routeData, view } = route.getState();
                        let Page2 = require("pages/page2");
                        console.log(route.getState);
                        return new Page2(routeData, router);
                    }
                })
            ]
        })
    ]
});

router.push("/example/btb/tab1/");
//router.push("/pages/page1");
