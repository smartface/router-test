const extend = require("js-base/core/extend");
const Router = require("nf-core/ui/router");

// Get generetad UI code
var Page2Design = require("../ui/page2");

const Page2 = extend(Page2Design)(
    function(_super) {
        _super(this);

        this.mapChildren(function(component, componentName) {
            this[componentName] = component;
        });

        this.btn.onPress = btn_onPress.bind(this);
    });

function btn_onPress() {
    Router.goBack();
}

module && (module.exports = Page2);
