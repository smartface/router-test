import Page1Design from 'generated/pages/page1';
import System from '@smartface/native/device/system';
import Application from '@smartface/native/application';
import AlertView from '@smartface/native/ui/alertview';


export default class Page1 extends Page1Design {
    router: any;
    action: any;
    data: any;
    // Constructor
    constructor(data, router, action) {
        // Initalizes super class for this page scope
        super();
        this.router = router;
        this.action = action;
        this.data = data;
        // Overrides super.onShow method
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        // Overrides super.onLoad method
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));

    }
};

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(superOnShow) {
    superOnShow();
    const page = this;
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
    superOnLoad();
    const page = this;

    page.headerBar.leftItemEnabled = true;
    page.flexlayout.children.btn.onPress = btn_onPress.bind(page);
    page.btnNext.onPress = btnNext_onPress.bind(page);

    this.lbl.text = this.data.label && this.data.label.toString() || '';
}

function btnNext_onPress() {
    const page = this;
    typeof this.action === "function" && this.action();
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