const Router = require("nf-core/ui/router");

/**
 * Triggered when application is started.
 * @param {EventArguments} e Returns some attributes about the specified functions
 * @this Application
 */
Application.onStart = function(e) {
    Router.add("page1", require("./pages/page1"));
    Router.add("page2", require("./pages/page2"));
    Router.go("page1");
};
