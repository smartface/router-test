const Color = require("sf-core/ui/color");
const extend = require("js-base/core/extend");
const Button = require("sf-core/ui/button");
const FlexLayout = require("sf-core/ui/flexlayout");
const Page = require("sf-core/ui/page");

var pgPage1 = extend(Page)(
    function(_super, params) {
        _super(this, params);
        this.onLoad = function() {
            var page = this;
            
            this.headerBar.title = "MessageDetail";
            var myButton = new Button({
                width: 250,
                height: 80,
                backgroundColor: Color.create("#00A1F1"),
                text: "Go back",
                onPress: function() {
                    page.parentController.pop();
                }
            });

            this.headerBar.leftItemEnabled = true;
            this.layout.flexDirection = FlexLayout.FlexDirection.ROW;
            this.layout.justifyContent = FlexLayout.JustifyContent.CENTER;
            this.layout.alignItems = FlexLayout.AlignItems.CENTER;

            this.layout.addChild(myButton);
        }.bind(this);
    }
);

module.exports = pgPage1;
