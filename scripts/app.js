/* globals initRequire */
Application.onUnhandledError = Application_OnError;

include("i18n/i18n.js"); //generates global lang object
include("libs/Smartface/require.js");
initRequire("main.js");


function Application_OnError(e) {
    switch (e.type) {
        case "Server Error":
        case "Size Overflow":
            alert(lang.networkError);
            break;
        default:
            //change the following code for desired generic error messsage
            alert({
                title: lang.applicationError,
                message: e.message + "\n\n*" + e.sourceURL + "\n*" + e.line + "\n*" + e.stack
            });
            break;
    }
}
