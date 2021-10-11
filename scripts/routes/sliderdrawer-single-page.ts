import {
    NativeRouter as Router,
    Router as RouterBase,
    NativeStackRouter as StackRouter,
    BottomTabBarRouter,
    Route
} from "@smartface/router"
import sliderDrawerWrapper from "./sliderdrawer-comp";

export default StackRouter.of({
    path: "/example/sdw-single",
    to: "/example/sdw-single/page1",
    routes: [
        Route.of({
            path: "/example/sdw-single/page1",
            routeDidEnter: (router, route) => {
                sliderDrawerWrapper.enabled = true;
            },
            routeDidExit: (router, route) => {
                sliderDrawerWrapper.enabled = false;
            },
            build: (router, route) => {
                let Page = require("pages/page1").default;
                const view = new Page({ label: 2 }, router, () => router.push('page2'));

                return view;
            }
        }),
        Route.of({
            path: "/example/sdw-single/page2",
            build: (router, route) => {
                let Page = require("pages/page2").default;
                const view = new Page({ label: 2 }, router, () => router.goBack());
                return view;
            }
        })
    ]
});
