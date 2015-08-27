(function () {
	Pages.page1 = new SMF.UI.Page({
			name : "Page1",
			onKeyPress : page1_onKeyPress,
			onShow : page1_onShow
		});

	var btn = new SMF.UI.TextButton({
			name : "btn",
			text : "Press me",
			onPressed : page1_btn_onPressed,
			width : "70%",
			left : "15%",
			height : "10%",
			top : "60%"
		});
	Pages.page1.add(btn);

	var lbl = new SMF.UI.Label({
			name : "lbl",
			text : "",
			width : "70%",
			left : "15%",
			height : "10%",
			top : "30%"
		});
	Pages.page1.add(lbl);

	/**
	 * Creates action(s) that are run when the user press the key of the devices.
	 * @param {KeyCodeEventArguments} e Uses to for key code argument. It returns e.keyCode parameter.
	 * @this Pages.Page1
	 */
	function page1_onKeyPress(e) {
		if (e.keyCode === 4) {
			Application.exit();
		}
	}

	/**
	 * Creates action(s) that are run when the page is appeared
	 * @param {EventArguments} e Returns some attributes about the specified functions
	 * @this Pages.Page1
	 */
	function page1_onShow() {}

	/**
	 * Creates action(s) that are run when the object is pressed from device's screen.
	 * @param {EventArguments} e Returns some attributes about the specified functions
	 * @this Page1.TextButton1
	 */
	function page1_btn_onPressed(e) {
		lbl.text = "Hello World";
	}

})();
