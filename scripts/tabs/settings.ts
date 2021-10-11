import Page from '@smartface/native/ui/page';
import FlexLayout from '@smartface/native/ui/flexlayout';
import Color from '@smartface/native/ui/color';
import Button from '@smartface/native/ui/button';

export default class pgPage1 extends Page {
    constructor(params) {
        super(params);
        // Overrides super.onLoad method
        this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
    }
};

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
    superOnLoad();
    var page = this;

    this.headerBar.title = "Settings";
    let myButton = new Button({
        flexGrow: 1,
        backgroundColor: Color.create("#00A1F1"),
        text: "Exit TabBar",
        onPress: function () {
            page.parentController.parentController.push({
                controller: (new (require("pages/tabbar/exit"))),
                animated: true
            });
        }
    });

    this.headerBar.leftItemEnabled = false;
    this.layout.flexDirection = FlexLayout.FlexDirection.ROW;
    this.layout.justifyContent = FlexLayout.JustifyContent.CENTER;
    this.layout.alignItems = FlexLayout.AlignItems.CENTER;

    this.layout.addChild(myButton);
}

