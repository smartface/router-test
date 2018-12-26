const FlexLayout = require('sf-core/ui/flexlayout'),
  SliderDrawer = require('sf-core/ui/sliderdrawer'),
  SliderDrawerComp = require("../components/SliderDrawerComp");
const Application = require("sf-core/application");
const componentContextPatch = require("@smartface/contx/lib/smartface/componentContextPatch");

class SliderDrawerWrapper {
  constructor(props) {
    this.sliderDrawer = new SliderDrawer({
      width: 250
    });
    this.sliderDrawer.onLoad = this.onLoad.bind(this);
    this.sliderDrawer.onShow = this.onShow.bind(this);
    this.sliderDrawer.onHide = this.onHide.bind(this);
    componentContextPatch(this.sliderDrawer, "sliderDrawer");
  }
  
  set position(pos) {
    this.sliderDrawer.drawerPosition = pos;
  }
  
  set enabled(val) {
    this.sliderDrawer.enabled = val;
    if(val) 
      Application.sliderDrawer = this.sliderDrawer;
  }
  
  get enabled() {
    return this.sliderDrawer.enabled;
  }
  
  setView(view) {
    view.sliderDrawer = this.sliderDrawer;
  }
  
  toggle(){
    
  }

  onLoad() {
    this.sliderDrawer.layout.addChild(new SliderDrawerComp());
    this.sliderDrawer.dispatch({
      type: "pushClassNames",
      classNames: ".sliderDrawer.layout"
    });
  }

  onShow() {
    if (this.sliderDrawer.currentPage) {
      this.sliderDrawer.currentPage.layout.touchEnabled = false;
    }
  }

  onHide() {
    if (this.sliderDrawer.currentPage) {
      this.sliderDrawer.currentPage.layout.touchEnabled = true;
    }
  }
}

const drawer = new SliderDrawerWrapper();
drawer.position = SliderDrawer.Position.LEFT;
drawer.enabled = false;
module.exports = drawer;
