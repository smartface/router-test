const extend = require("js-base/core/extend");
const Color = require("sf-core/ui/color");
const System = require("sf-core/device/system");
const Application = require("sf-core/application");

// Get generated UI code
const Page2Design = require('ui/ui_page2');

const Page2 = extend(Page2Design)(
    // Constructor
    function Page2(_super, data, router, action) {
        // Initalizes super class for this page scope
        _super(this);
        this.action = action;
        this.router = router;
        // Overrides super.onShow method
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        // Overrides super.onLoad method
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
    });

/**
 * @event onShow
 * This event is called when a page appears on the screen (everytime).
 * @param {function} superOnShow super onShow function
 * @param {Object} parameters passed from Router.go function
 */
function onShow(superOnShow, data) {
    const page = this;
    superOnShow();

    page.headerBar.itemColor = Color.BLACK;
    if (!data)
        return;

    if (System.OS === "Android") {
        setTimeout(() => page.btn.enabled = true, 400);
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

    page.btn.onPress = btn_onPress.bind(page);
    Application.onBackButtonPressed = () => {
        this.router.goBack();
    };
}

function btn_onPress() {
    console.log("btn click");
    this.action();
    // this.router.dismiss();
}

module.exports = Page2;
