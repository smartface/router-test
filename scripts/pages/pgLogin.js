/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const PgLoginDesign = require('ui/ui_pgLogin');

const PgLogin = extend(PgLoginDesign)(
  // Constructor
  function(_super, router) {
    // Initalizes super class for this page scope
    _super(this);
    // Overrides super.onShow method
    this.onShow = onShow.bind(this, this.onShow.bind(this));
    // Overrides super.onLoad method
    this.onLoad = onLoad.bind(this, this.onLoad.bind(this));
    this.children.button1.onPress = () => router.push("page1");
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
  superOnLoad();
}

module.exports = PgLogin;