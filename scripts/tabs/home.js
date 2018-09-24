const extend = require("js-base/core/extend");
const Label = require("sf-core/ui/label");
const FlexLayout = require("sf-core/ui/flexlayout");
const Page = require("sf-core/ui/page");

var pgPage1 = extend(Page)(
    function(_super, params) {
        _super(this, params);
        this.onLoad = function() {
            this.headerBar.title = "Home";
            var label = new Label({
                width: 250,
                height: 80,
                text: "Home Page"
            });

            this.headerBar.leftItemEnabled = false;
            this.layout.flexDirection = FlexLayout.FlexDirection.ROW;
            this.layout.justifyContent = FlexLayout.JustifyContent.CENTER;
            this.layout.alignItems = FlexLayout.AlignItems.CENTER;

            this.layout.addChild(label);
        }.bind(this);
    }
);

module.exports = pgPage1;
