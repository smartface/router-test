const HeaderBarItem = require("sf-core/ui/headerbaritem");
const Application = require("sf-core/application");
const extend = require("js-base/core/extend");
const Color = require("sf-core/ui/color");
const System = require("sf-core/device/system");
const Flatted = require('flatted');

// Get generated UI code
const Page2Design = require('ui/ui_page2');

const Page2 = extend(Page2Design)(
    // Constructor
    function(_super, routeData, router) {
        // Initalizes super class for this page scope
        _super(this);
        this._router = router;
        this._routeData = routeData;
        // Overrides super.onShow method
        this.onShow = onShow.bind(this, this.onShow.bind(this));
        // Overrides super.onLoad method
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
        if (System.OS === "Android") {
            //this.onBackButtonPressed.bind(this);
        }
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

    page.headerBar.itemColor = Color.BLACK;
    if (!page._routeData)
        return;
    console.log(page._routeData.message);
    if (System.OS === "Android") {
        setTimeout(() => page.btn.enabled = true, 400);
    }
}

function onTimedOut(arg) {
    console.log(`arg was => ${arg}`);
}

/**
 * @event onLoadsen
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */

function onLoad(superOnLoad) {
    const page = this;
    console.log("merhaba");
    superOnLoad();
    // page.headerBar.leftItemEnabled = true;
    var leftItem = new HeaderBarItem({
        onPress: function() {
            console.log("back");
            page._router.goBack()
        }
    });
    page.headerBar.setLeftItem(leftItem);
    page.btn.onPress = btn_onPress.bind(page);
    page.btnGo.onPress = btnGo_onPress.bind(page);

    page.headerBar + "\n"
    console.log(page);
    console.log(Flatted.stringify(page.headerBar))
    console.log(page.android.headerBar);
    try {
        console.log("backender 2");
        Application.android.onBackButtonPressed = function() {
            console.log("backender");
            page._router.goBack();

        };
    }
    catch (err) {

        console.log(JSON.stringify(err));
        console.log("ERROR in backender 2 " + err);
    }

}

function btn_onPress() {
    this._router.goBack();
}

function btnGo_onPress() {
    //TODO : to add comment
    this._router.push('/pushes/drawPage', true);
}

function btnBackIt() {
    console.log("merhaba");
    this.page.btn.enabled && this._router.goBack();
}

module.exports = Page2;
