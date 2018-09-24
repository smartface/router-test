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

const Network = require("sf-core/device/network");
const Router = require("@smartface/router/src/native/NativeRouter");
const StackRouter = require("@smartface/router/src/native/NativeStackRouter");
const BottomTabBarRouter = require("@smartface/router/src/native/BottomTabBarRouter");
const Route = require("@smartface/router/src/router/Route");
const Color = require('sf-core/ui/color');

var notifier = new Network.createNotifier();

notifier.subscribe((connectionType) => {
    if (connectionType === Network.ConnectionType.NONE) {
        alert("No Network Connection");
    }
});

var Page1 = require("pages/page1");
var Page2 = require("pages/page2");

// Define routes and go to initial page of application
Application.router = StackRouter.of({
    path: "/pages",
    routes: [
        Route.of({
            path: "/pages/page1",
            build: (match, state, router) => {
                console.log("page1");
                let Page1 = require("pages/page1");
                return new Page1(state.data, router);
            }
        }),
        Route.of({
            path: "/pages/page2",
            build: (match, state) => {
                let Page2 = require("pages/page2");
                return new Page2();
            }
        }),
        StackRouter.of({
            path: "/stack",
            // build: (match, state, router) => new Page1(state.data, router),
            to: "/stack/path1",
            routes: [
                Route.of({
                    path: "/stack/path1",
                    build: (match, state, router) => new Page1(state.data, router)
                }),
                Route.of({
                    path: "/stack/path2",
                    build: (match, state, router) => {
                        if(!state.data.applied){
                            // blocks route changing
                            return null;
                        }
                        
                        return new Page2(state.data, router);
                    }
                })
            ]
        }),
        BottomTabBarRouter.of({
            path: "/bottom",
            tabbarParams: () => ({
                ios: { translucent: false},
                itemColor: Color.RED,
                unselectedItemColor: Color.YELLOW,
                backgroundColor: Color.BLUE,
                height: 100
            }),
            items: () => [{title : "page1"}, {title: "page2"}],
            routes: [
                Route.of({
                    path: "/bottom/page1",
                    build: (match, state, router, view) => new Page1(state && state.data || {}, router)
                }),
                Route.of({
                    path: "/bottom/page2",
                    build: (match, state, router, view) => {
                        return new Page2(state && state.data || {}, router);
                    }
                })
            ]
        })
    ]
});
// Router.add("page1", "pages/page1");
// Router.add("page2", "pages/page2");
// Application.router.go("/bottom/page1");
const TabBarItem = require('sf-core/ui/tabbaritem');

const Renderer = require("@smartface/router/src/native/IOSRenderer");
const TabBarController = require("sf-core/ui/bottomtabbarcontroller");
// console.log("3");

// var page1 = new Page1();
// // navigationController.childViewControllers= []
// var navigationController = new NavigationController();
// navigationController.childControllers = [page1];
var renderer = new Renderer(TabBarController);
// {_rootController: new TabBarController()};
// new Renderer(TabBarController);

renderer._rootController.tabBar.ios.translucent = false;

renderer._rootController.childControllers = [new Page1,new Page2];

// bottomtabbarcontroller.tabBar.items[0].title = "page1";
// bottomtabbarcontroller.tabBar.items[1].title = "page2";

renderer._rootController.tabBar.items = [
    new TabBarItem({
        title : "page1"
}), new TabBarItem({
        title : "page2"
})];


renderer._rootController.selectedIndex = 0;
renderer._rootController.show();

renderer._rootController.tabBar.ios.translucent = false;
renderer._rootController.tabBar.itemColor = Color.RED;
renderer._rootController.tabBar.unselectedItemColor = Color.YELLOW;
// bottomtabbarcontroller.tabBar.backgroundColor = Color.BLUE;
console.log("tabbarHeight : " + renderer._rootController.tabBar.height);

console.log("translucent : " + renderer._rootController.tabBar.ios.translucent);
console.log("bottomtabbar items : " + renderer._rootController.tabBar.items); // TODO :returns undefined, this will fix.

console.log("6");
renderer._rootController.shouldSelectByIndex = function(params){
    console.log("=========================================");
    console.log("bottomtabbarcontroller shouldSelectByIndex");
    console.log("index : " + params.index);
    console.log("=========================================");
    return true;
};
renderer._rootController.didSelectByIndex = function(params){
    console.log("=========================================");
    console.log("bottomtabbarcontroller didSelectByIndex");
    console.log("index : " + params.index);
    console.log("=========================================");
};
Application.setRootController(renderer._rootController);
console.log("7");

// renderer.pushChild(page1);
