/**
 * Creates action(s) that are run when the page is appeared
 * @param {EventArguments} e Returns some attributes about the specified functions
 * @this SMF.UI.Page
 */
function SplashPage_Self_OnShow(e) {
	if (Device.deviceOS == "iOS") {
		var bg = "Default.png"; //Earlier than iPhone 5
		if (Device.brandModel.indexOf("iPhone 5") > -1) {
			//iPhone 5
			bg = Device.currentOrientation.indexOf("landscape") === -1 ? "Default-568h.png" : "Default–Landscape–568h.png";
		} else if (Device.brandModel.indexOf("Plus") > -1) {
			//iPhone 6 Plus
			bg = Device.currentOrientation.indexOf("landscape") === -1 ? "Default–736h.png" : "Default–Landscape–736h.png";
		} else if (Device.brandModel.indexOf("iPhone 6") > -1) {
			//iPhone 6
			bg = Device.currentOrientation.indexOf("landscape") === -1 ? "Default–667h.png" : "Default–Landscape–667h.png";
		} else if (Device.brandModel.indexOf("iPad") > -1) {
			bg = Device.currentOrientation.indexOf("landscape") === -1 ? "Default–Portrait.png " : "Default–Landscape.png ";
		}
		Pages.SplashPage.imageFillType = SMF.UI.ImageFillType.normal;
		Pages.SplashPage.backgroundImage = bg;
	}
}