/* globals lang */

require("i18n/i18n.js"); // Generates global lang object

const Application = require("sf-core/application");

// Set uncaught exception handler, all exceptions that are not caught will
// trigger onUnhandledError callback.
Application.onUnhandledError = function(e) {
    console.log(e.stack);
    alert({
        title: e.type || "Error",
        message: (e.message + "\n\n*" + e.stack)
    });
};

require("sf-extension-utils");
require("./theme");

const Network = require("sf-core/device/network");

var notifier = new Network.createNotifier();

notifier.subscribe((connectionType) => {
    if (connectionType === Network.ConnectionType.NONE) {
        alert("No Network Connection");
    }
});

require("./routes");
