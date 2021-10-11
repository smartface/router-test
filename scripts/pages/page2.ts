import Page2Design from 'generated/pages/page2';
import System from '@smartface/native/device/system';
import Color from '@smartface/native/ui/color';
import componentContextPatch from '@smartface/contx/lib/smartface/componentContextPatch';
import PageTitleLayout from 'components/PageTitleLayout';
import HeaderBarItem from '@smartface/native/ui/headerbaritem';
import Image from '@smartface/native/ui/image';


export default class Page2 extends Page2Design {
    action: any;
    router: any;
    // Constructor
    constructor(data, router, action?) {
        // Initalizes super class for this page scope
        super();
        this.action = action;
        this.router = router;
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

    page.headerBar.itemColor = Color.BLACK;
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

    let headerBar;
    this.headerBar.titleLayout = new PageTitleLayout();
    componentContextPatch(this.headerBar.titleLayout, 'titleLayout');
    if (System.OS === 'Android') {
        headerBar = this.headerBar;
        headerBar.setLeftItem(
            new HeaderBarItem({
                onPress: () => {
                    this.router.goBack();
                },
                image: Image.createFromFile('images://arrow_back.png'),
            }),
        );
    } else {
        headerBar = this.parentController.headerBar;
    }
    page.btn.onPress = btn_onPress.bind(page);
}

function btn_onPress() {
    console.log("btn click");
    this.action();
    //  this.router.dismiss();
}