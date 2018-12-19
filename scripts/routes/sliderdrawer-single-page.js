const Router = require("@smartface/router/src/native/NativeRouter");
const StackRouter = require("@smartface/router/src/native/NativeStackRouter");
const BottomTabBarRouter = require("@smartface/router/src/native/BottomTabBarRouter");
const Route = require("@smartface/router/src/router/Route");
const sliderDrawerWrapper = require("./sliderdrawer-comp");

module.exports = StackRouter.of({
  path: "/example/sdw-single",
  to: "/example/sdw-single/page1",
  routes: [
    Route.of({
      path: "/example/sdw-single/page1",
      build: (router, route) => {
        let Page = require("pages/page1");
        const view = new Page({ label: 2 }, router, () => router.push('/'));
        sliderDrawerWrapper.setView(view);
        sliderDrawerWrapper.enabled = true;
        
        return view;
      }
    })
  ]
});
