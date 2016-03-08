/* globals */

(function () {
	var btnClickCount = 0;
	
	Pages.page1 = new SMF.UI.Page({
			name : "Page1",
			fillColor : "#EEEEEE",
			onKeyPress : page1_onKeyPress,
			onShow : page1_onShow
		});

	var btn = new SMF.UI.TextButton({
			name : "btn",
			text : "Click Me!",
			fontColor :"white",
			onPressed : page1_btn_onPressed,
			width : "70%",
			left : "15%",
			height : "10%",
			top : "70%"
		});
	Pages.page1.add(btn);

	var lbl = new SMF.UI.Label({
			name : "lbl",
			text : "",
			width : "70%",
			left : "15%",
			height : "10%",
			top : "45%",
			multipleLine : true,
			textAlignment :"center"
		});
		
	Pages.page1.add(lbl);
	
	var img = new SMF.UI.Image({
		name :"img",
		image : "smartface.png",
		top : "10%",
		width : "70%",
		left : "15%"
		});
	
	Pages.page1.add(img);
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
		var myLabelText = "";
		var myButtonText = "";
		
		btnClickCount += 1;
		
		switch (true) {
			case btnClickCount == 1:
				myLabelText = "Well Done! \nYou've clicked the button!";
				myButtonText = "Click Me Again!";
				break;
			case btnClickCount > 1 && btnClickCount < 10:
				myLabelText = "Whoa!\nThat click was " + numberSuffix(btnClickCount) +" time!";
				myButtonText = "Click Again?";
				break;
			case btnClickCount >= 10 && btnClickCount < 15 :
				myLabelText = "Feel tired?\nYou can rest your finger now :)";
				myButtonText = "I'm not Tired!";
				break;
			default:
				myLabelText = "Isn't it good?\nEvery clicks count, you've clicked " + numberSuffix(btnClickCount) +" time!";
				myButtonText = "Click Again?";
				break;
		}
		
		lbl.text = myLabelText;
		btn.text = myButtonText;
	}

	/**
	 *Adds appropriate suffix to given number.
	 */
	function numberSuffix(number){
		
		var suffix = "th";
		
		//Lets deal with small numbers
		var smallNumber = number % 100; 
		
	    if(smallNumber < 11 || smallNumber > 13){
	         switch(smallNumber % 10){
	            case 1: suffix = 'st'; break;
	            case 2: suffix = 'nd'; break;
	            case 3: suffix = 'rd'; break;
	        }
	    }
    	return number + suffix;
	}

})();
