/* globals lang */
require("i18n/i18n.js"); // Generates global lang object

const Application = require("sf-core/application");

// Set uncaught exception handler, all exceptions that are not caught will
// trigger onUnhandledError callback.
Application.onUnhandledError = function(e) {
    alert({
        title: e.type || "Error",
        message: (e.message + "\n\n*" + e.stack)
    });
};

require("sf-extension-utils");
require("./theme");
// const Router = require("sf-core/ui/router");
const Network = require("sf-core/device/network");
const Router = require("@smartface/router/src/native/NativeRouter");
const StackRouter = require("@smartface/router/src/native/NativeStackRouter");
const Route = require("@smartface/router/src/router/Route");
var notifier = new Network.createNotifier();

notifier.subscribe((connectionType) => {
    if (connectionType === Network.ConnectionType.NONE) {
        alert("No Network Connection");
    }
});
var Page1 = require("pages/page1");
var Page2 = require("pages/page2");

// Define routes and go to initial page of application
Application.router = Router.of({
    path: "/",
    routes: [
        Route.of({
            path: "/page1",
            build: (params, state) => {
                let Page1 = require("pages/page1");
                return new Page1();
            }
        }),
        Route.of({
            path: "/page2",
            build: (params, state) => {
                let Page2 = require("pages/page2");
                return new Page2();
            }
        }),
        StackRouter.of({
            path: "/stack",
            routes: [
                Route.of({
                    path: "/stack/path1",
                    build: (params, state) => new Page1(state.data)
                }),
                Route.of({
                    path: "/stack/path2",
                    build: (params, state) => {
                        console.log("state : "+JSON.stringify(state));
                        return new Page2(state.data)
                    }
                })
            ]
        })
    ]
});
// Router.add("page1", "pages/page1");
// Router.add("page2", "pages/page2");
Application.router.go("/stack/path1");
