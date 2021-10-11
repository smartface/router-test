import { NativeRouter as Router } from "@smartface/router";
import modalExample from "./modal";
import backtoExample from "./backto";
import bottomtabbarExample from "./bottomtabbar";
import bottomtabbarWithHomeRoute from "./bottomtabbar-homeroute";
import bottomtabbarWithChangeHandler from "./bottomtabbar-tabchange";
import replaceExample from "./replace";
import sliderDrawerSinglePageExample from "./sliderdrawer-single-page";
import btbModalExample from "./btb-with-modal";
import nestedModal from "./nested-modal";
import pushExample from "./push-pages";
import noAnimationModal from "./no-animation-modal";

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
 * url : /example/modal - Modal pages examples###
 * url : /example/backto - Back to page examples
 * url : /example/btbmodal - BottomTabBar with Modal StackRouter
 * url : /example/btbhome - BottomTabBar with homeroute
 * url : /example/btb-tabchange - BottomTabBar with change handler
 * url : /example/nestedmodal - Nested Modal StackRouters
 * url : /example/pushExample - Push pages example
 * url : /example/sdw-single - Sliderdrawer only for single page example
 * url : /example/noanimation - Modal pages can open or close without animation
 * 
 * Select a url and push
 */
router.push("/example/sdw-single");

export default router;