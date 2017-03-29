/* globals lang */
require("i18n/i18n.js"); //generates global lang object
const Application = require("nf-core/application");
const Router = require("nf-core/ui/router");

// Set uncaught exception handler, all exceptions that are not caught will
// trigger onUnhandledError callback.
Application.onUnhandledError = function (e) {
    alert({
        title: lang.applicationError,
        message: e.message + "\n\n*" + e.sourceURL + "\n*" + e.line + "\n*" + e.stack
    });
};

// Define routes and go to initial page of application
Router.add("page1", require("./pages/page1"));
Router.add("page2", require("./pages/page2"));
Router.go("page1");