/* globals lang */
Application.onStart = Application_OnStart;

/**
 * Triggered when application is started.
 * @param {EventArguments} e Returns some attributes about the specified functions
 * @this Application
 */
function Application_OnStart(e) {
    var page1 = require("pages/index");
    page1.show();
}


