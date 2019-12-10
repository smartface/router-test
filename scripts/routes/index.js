const Router = require("@smartface/router/src/native/NativeRouter");

const modalExample = require("./modal");
const backtoExample = require("./backto");
const bottomtabbarExample = require("./bottomtabbar");
const bottomtabbarWithHomeRoute = require("./bottomtabbar-homeroute");
const bottomtabbarWithChangeHandler = require("./bottomtabbar-tabchange");
const replaceExample = require("./replace");
const sliderDrawerSinglePageExample = require("./sliderdrawer-single-page");
const btbModalExample = require("./btb-with-modal");
const nestedModal = require("./nested-modal");
const pushExample = require("./push-pages");
const noAnimationModal = require("./no-animation-modal");

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
    btbModalExample,
    nestedModal,
    pushExample,
    noAnimationModal,
    bottomtabbarWithHomeRoute,
    bottomtabbarWithChangeHandler
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
 * url : /example/btbhome - BottomTabBar with homeoute
 * url : /example/btb-tabchange - BottomTabBar with change handler
 * url : /example/nestedmodal - Nested Modal StackRouters
 * url : /example/pushExample - Push pages example
 * url : /example/sdw-single - Sliderdrawer only for single page example
 * url : /example/noanimation - Modal pages can open or close without animation
 * 
 * Select a url and push
 */
router.push("/example/btb-tabchange");

module.exports = router;
