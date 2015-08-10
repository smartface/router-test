/**
 * Creates action(s) that are run when the user press the key of the devices.
 * @param {KeyCodeEventArguments} e Uses to for key code argument. It returns e.keyCode parameter.
 * @this Pages.Page1
 */
function Page1_Self_OnKeyPress(e) {
	if (e.keyCode === 4) {
		Application.exit();
	}
}
/**
 * Creates action(s) that are run when the page is appeared
 * @param {EventArguments} e Returns some attributes about the specified functions
 * @this Pages.Page1
 */
function Page1_Self_OnShow() {
	//Comment following block for removing navigationbar/actionbar sample
	//Copy this code block to every page onShow
	header.init(this);
	header.setTitle("Page1");
	header.setRightItem("RItem");
	header.setLeftItem();
	this.statusBar.transparent = true;
	/**/
}