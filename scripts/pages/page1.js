const extend = require("js-base/core/extend");
const System = require("sf-core/device/system");
const Application = require("sf-core/application");
const AlertView = require("sf-core/ui/alertview");

// Get generated UI code
const Page1Design = require("ui/ui_page1");

const Page1 = extend(Page1Design)(
    // Constructor
    function Page1(_super, data, router, action) {
        // Initalizes super class for this page scope
        _super(this);
        this.data = data;
        this.action = action;
        this._router = router;
        // Overrides super.onShow method
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        // Overrides super.onLoad method
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
        
        this.onRouteEnter = (router, route) => {
            console.log(`onRouteEnter ${route}`);
            // this.unblock = router.addRouteBlocker((path, routeData, action, ok) => {
                
            //     alert({
            //         message: "Would you like to answer?",
            //         title: "Question", //optional
            //         buttons: [{
            //                 text: "Yes",
            //                 type: AlertView.Android.ButtonType.POSITIVE,
            //                 onClick: function() {
            //                     ok(true)
            //                 }
            //             },
            //             {
            //                 text: "No",
            //                 type: AlertView.Android.ButtonType.NEGATIVE,
            //                 onClick: function() {
            //                     ok(false);
            //                 },
            //             }
            //         ]
            //     });
            // });
        };
        
        this.onRouteExit = (router, route) => {
            console.log(`onRouteExit ${route}`);
        //   this.unblock();  
        };
    });

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(superOnShow) {
    const page = this;
    superOnShow();
    // this._router.setHeaderbarProps({visible: false});
    
    if (System.OS === "Android") {
        setTimeout(() => page.btnNext.enabled = true, 300);
    }
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
    const page = this;
    superOnLoad();

    page.headerBar.leftItemEnabled = true;
    page.flexlayout.children.btn.onPress = btn_onPress.bind(page);
    page.btnNext.onPress = btnNext_onPress.bind(page);
    
    this.lbl.text = this.data.label && this.data.label.toString() || '';
}

function btnNext_onPress() {
    const page = this;
    this.action();
}

var btnClickCount = 0;

// Gets/sets press event callback for btn
function btn_onPress() {

    this._applied = true;

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
            myLabelText = "Isn't it good?\nEvery clicks count, you've clicked " +
                numberSuffix(btnClickCount) + " time!";
            myButtonText = "Click again?";
            break;
    }

    // Access lbl & btnNext of page1
    
    this.flexlayout.children.btn.text = myButtonText;
}

// Adds appropriate suffix to given number
function numberSuffix(number) {
    var suffix = "th";

    // Let's deal with small numbers
    var smallNumber = number % 100;

    if (smallNumber < 11 || smallNumber > 13) {
        switch (smallNumber % 10) {
            case 1:
                suffix = "st";
                break;
            case 2:
                suffix = "nd";
                break;
            case 3:
                suffix = "rd";
                break;
        }
    }
    return number + suffix;
}

module.exports = Page1;
