/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const PagePushDesign = require('ui/ui_pagePush');

const PagePush = extend(PagePushDesign)(
  // Constructor
  function(_super, routeData, router) {
    // Initalizes super class for this page scope
    _super(this);

    this._router = router;
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
function onShow(superOnShow) {
  superOnShow();
}

/**
 * @event onLoad
 * This event is called once when page is created.
 * @param {function} superOnLoad super onLoad function
 */
function onLoad(superOnLoad) {
  const page = this;
  superOnLoad();
  console.log("s");
  page.btnBackIt.onPress = onBackItClicked.bind(page);

}

function onBackItClicked() {
  console.log("pusher router:" + this._router)
  this._router.goBack();
}

module.exports = PagePush;
