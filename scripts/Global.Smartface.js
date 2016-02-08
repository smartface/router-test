/**
 * Triggered when application is started.
 * @param {EventArguments} e Returns some attributes about the specified functions
 * @this Application
 */
function Global_Events_OnStart(e) {
	changeLang(Device.language, true);
	include("Page1.js");
	Pages.page1.show();
}

function Global_Events_OnError(e) {
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

Application.onStart = Global_Events_OnStart;
Application.onUnhandledError = Global_Events_OnError;
