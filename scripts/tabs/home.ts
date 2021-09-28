import Page from '@smartface/native/ui/page';
import Label from '@smartface/native/ui/label';
import FlexLayout from '@smartface/native/ui/flexlayout';


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
}

