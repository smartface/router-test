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
require("./routes.js");

const Network = require("sf-core/device/network");

var notifier = new Network.createNotifier();


notifier.subscribe((connectionType) => {
    if (connectionType === Network.ConnectionType.NONE) {
        alert("No Network Connection");
    }
});



// var page1 = new Page1();
// navigationController.childViewControllers= []
// var navigationController = new NavigationController();
// navigationController.childControllers = [page1];
// {_rootController: new TabBarController()};

/*
const TabBarItem = require('sf-core/ui/tabbaritem');
const Renderer = require("@smartface/router/src/native/IOSRenderer");
const TabBarController = require("sf-core/ui/bottomtabbarcontroller");
console.log("3");

new Renderer(TabBarController);
var renderer = new Renderer(TabBarController);
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
renderer._rootController.tabBar.itemColor = Color.RED;``
renderer._rootController.tabBar.unselectedItemColor = Color.YELLOW;
renderer.activate();
Renderer.setasRoot(new Page1());
renderer.activate();
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

// renderer.setRootController(renderer._rootController);
console.log("7");

// renderer.pushChild(page1);

*/