const extend = require("js-base/core/extend");
const Router = require("nf-core/ui/router");

// Get generetad UI code
var Page2Design = require("../ui/ui_page2");

const Page2 = extend(Page2Design)(
    function(_super) {
        _super(this);

        this.mapChildren(function(component, componentName) {
            this[componentName] = component;
        });

        this.onShow = onShow.bind(this);
        this.btn.onPress = btn_onPress.bind(this);
    });

function onShow(e) {
    if (!e) return;
    console.log(e.message);
}

function btn_onPress() {
    Router.goBack();
}

module && (module.exports = Page2);
