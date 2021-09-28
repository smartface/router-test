import {
    NativeRouter as Router,
    NativeStackRouter as StackRouter,
    Route
} from '@smartface/router';


export default StackRouter.of({
    path: "/example/backto",
    to: "/example/backto/page1",
    routes: [
        Route.of({
            path: "/example/backto/page1",
            build: (router, route) => {
                let Page = require("pages/page1").default;
                return new Page({ label: 1 }, router, () => router.push("/example/backto/page2"));
            }
        }),
        Route.of({
            path: "/example/backto/page2",
            build: (router, route) => {
                let Page = require("pages/page1").default;
                return new Page({ label: 1 }, router, () => router.push("/example/backto/page3"));
            }
        }),
        Route.of({
            path: "/example/backto/page3",
            build: (router, route) => {
                let Page = require("pages/page1").default;
                return new Page({ label: 3 }, router, () => router.push("/example/backto/page4"));
            }
        }),
        Route.of({
            path: "/example/backto/page4",
            build: (router, route) => {
                let Page = require("pages/page2").default;
                return new Page({}, router, () => router.push("/example/backto/page1"));
            }
        })
    ]
});
