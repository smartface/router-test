/* globals lang */
require("i18n/i18n.js"); // Generates global lang object

const Application = require("sf-core/application");

// Set uncaught exception handler, all exceptions that are not caught will
// trigger onUnhandledError callback.
Application.onUnhandledError = function(e) {
    alert({
        title: lang.applicationError,
        message: e.stack || (e.message + "\n\n*" + e.sourceURL + "\n*" + e.line)
    });
};

require("sf-extension-utils");
require("./theme");
const Router = require("sf-core/ui/router");
const Network = require("sf-core/device/network");
var notifier = new Network.createNotifier();

notifier.subscribe((connectionType) => {
    if (connectionType === Network.ConnectionType.NONE) {
        alert("No Network Connection");
    }
});

// Define routes and go to initial page of application
Router.add("page1", "pages/page1");
Router.add("page2", "pages/page2");
Router.go("page1");
