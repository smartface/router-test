var Page1 = require("pages/page1");
var Page2 = require("pages/page2");

var bottomPage1 = new Page1({});
var bottomPage2 = new Page2({});

const Router = require("@smartface/router/src/native/NativeRouter");
const StackRouter = require("@smartface/router/src/native/NativeStackRouter");
const BottomTabBarRouter = require("@smartface/router/src/native/BottomTabBarRouter");
const Route = require("@smartface/router/src/router/Route");
const Color = require('sf-core/ui/color');

const modalExample = require("./modal");
const backtoExample = require("./backto");
const bottomtabbarExample = require("./bottomtabbar");
const replaceExample = require("./replace");
const sliderDrawerSinglePageExample = require("./sliderdrawer-single-page");
const btbModalExample = require("./btb-with-modal");

const router = Router.of({
  path: "/",
  to: "/pages/page2",
  isRoot: true,
  routes: [
    backtoExample,
    modalExample,
    bottomtabbarExample,
    replaceExample,
    sliderDrawerSinglePageExample,
    btbModalExample
  ]
});

const unlisten = router.listen((location, action) => {
  console.log(` ---- new route location: ${location.url}`);
});

/**
 * Usage of the examples
 * 
 * url : /example/replace - Replace action examples
 * url : /example/btb - BottomTabBarRouter examples
 * url : /example/modal - Modal pages examples
 * url : /example/backto - Back to page examples
 * url : /example/btbmodal - BottomTabBar with Modal StackRouter
 * 
 * Select a url and push
 */
router.push("/example/sdw-single");

module.exports = router;
