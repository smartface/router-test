// get generetad UI code
var page1 = require('../ui/page1');
module.exports = page1;
// perform your event bindings
// modifications to the UI below

page1.onKeyPress = page1_onKeyPress;

// generated UI assigns a onShow event for the page
// If you want to perform some actions at onShow event
// You need to backup generated function and call it
// like in the example below:
var originalOnShow = page1.onShow; //backup
page1.onShow = page1_onShow;


// child components of page are exposed as a member of page
page1.btn.onPressed = btn_onPressed;
(Device.deviceOS === "Android") && (page1.btn.effects.ripple.enabled = true);


//in order to access the second page you need to require it first
var page2 = require("./page2");
page1.btnNext.onPressed = function(e) {
	page2.show();
	// Pages.page2 is equal to page2
};


function page1_onKeyPress(e) {
	if (e.keyCode === 4) {
		Application.exit();
	}
}

/**
 * Creates action(s) that are run when the page is appeared
 * @param {EventArguments} e Returns some attributes about the specified functions
 * @this Pages.page1
 */
function page1_onShow() {
	// call the backedup function;
	originalOnShow();

}

var btnClickCount = 0;

/**
 * Creates action(s) that are run when the object is pressed from device's screen.
 * @param {EventArguments} e Returns some attributes about the specified functions
 * @this page1.TextButton1
 */
function btn_onPressed(e) {
	var myLabelText = "";
	var myButtonText = "";

	btnClickCount += 1;

	switch (true) {
		case btnClickCount == 1:
			myLabelText = "Well Done! \nYou've clicked the button!";
			myButtonText = "Click me again!";
			break;
		case btnClickCount < 10:
			myLabelText = "Whoa!\nThat click was " + numberSuffix(btnClickCount) + " time!";
			myButtonText = "Click again?";
			break;
		case btnClickCount < 15:
			myLabelText = "Feel tired?\nYou can rest your finger now :)";
			myButtonText = "I'm not tired!";
			break;
		default:
			myLabelText = "Isn't it good?\nEvery clicks count, you've clicked " + numberSuffix(btnClickCount) + " time!";
			myButtonText = "Click again?";
			break;
	}

	page1.lbl.text = myLabelText;
	page1.btn.text = myButtonText;
}

/**
 *Adds appropriate suffix to given number.
 */
function numberSuffix(number) {

	var suffix = "th";

	//Lets deal with small numbers
	var smallNumber = number % 100;

	if (smallNumber < 11 || smallNumber > 13) {
		switch (smallNumber % 10) {
			case 1:
				suffix = 'st';
				break;
			case 2:
				suffix = 'nd';
				break;
			case 3:
				suffix = 'rd';
				break;
		}
	}
	return number + suffix;
}
