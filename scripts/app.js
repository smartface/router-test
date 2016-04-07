include('i18n/i18n.js');
Application.onStart = Application_OnStart;
Application.onUnhandledError = Application_OnError;

/**
 * Triggered when application is started.
 * @param {EventArguments} e Returns some attributes about the specified functions
 * @this Application
 */
function Application_OnStart(e) {
	include("pages/index.js");
	Pages.page1.show();
}

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
