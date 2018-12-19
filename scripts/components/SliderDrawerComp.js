const extend = require('js-base/core/extend');
const SliderDrawerCompDesign = require('library/SliderDrawerComp');

const SliderDrawerComp = extend(SliderDrawerCompDesign)(
  // Constructor
  function(_super, props = {}, pageName) {
    // Initalizes super class for this scope
    _super(this, props);
    this.pageName = pageName;
  }
);

module.exports = SliderDrawerComp;