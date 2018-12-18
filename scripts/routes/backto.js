const Router = require("@smartface/router/src/native/NativeRouter");
const StackRouter = require("@smartface/router/src/native/NativeStackRouter");
const BottomTabBarRouter = require("@smartface/router/src/native/BottomTabBarRouter");
const Route = require("@smartface/router/src/router/Route");

module.exports = StackRouter.of({
    path: "/example/backto",
    to: "/example/backto/page1",
    routes: [
        Route.of({
            path: "/example/backto/page1",
            build: (router, route) => {
                let Page = require("pages/page1");
                return new Page({ label: 1 }, router, () => router.push("/example/backto/page2"));
            }
        }),
        Route.of({
            path: "/example/backto/page2",
            build: (router, route) => {
                let Page = require("pages/page1");
                return new Page({ label: 1 }, router, () => router.push("/example/backto/page3"));
            }
        }), 
        Route.of({
            path: "/example/backto/page3",
            build: (router, route) => {
                let Page = require("pages/page1");
                return new Page({ label: 3 }, router, () => router.push("/example/backto/page4"));
            }
        }),
        Route.of({
            path: "/example/backto/page4",
            build: (router, route) => {
                let Page = require("pages/page2");
                return new Page({}, router, () => router.goBacktoUrl("/example/backto/page2"));
            }
        })
    ]
});
