const Router = require("@smartface/router/src/native/NativeRouter");
const StackRouter = require("@smartface/router/src/native/NativeStackRouter");
const BottomTabBarRouter = require("@smartface/router/src/native/BottomTabBarRouter");
const Route = require("@smartface/router/src/router/Route");

module.exports = StackRouter.of({
    path: "/example/modal",
    to: "/example/modal/modalpages/page1",
    homeRoute: 0,
    routes: [
        Route.of({
            path: "/example/modal/page1",
            build: (router, route) => {
                let Page = require("pages/page1");
                return new Page({ label: 1 }, router, () => router.push('/example/modal/modalpages/page1'));
            }
        }),
        StackRouter.of({
            path: '/example/modal/modalpages',
            modal: true,
            routes: [
                Route.of({
                    path: "/example/modal/modalpages/page1",
                    build: (router, route) => {
                        let Page = require("pages/page1");
                        return new Page({ label: 1 }, router, () => router.dismiss());
                    }
                }),
                Route.of({
                    path: "2",
                    build: (router, route) => {
                        let Page = require("pages/page2");
                        return new Page({ label: 2 }, router);
                    }
                })
            ]
        })
    ]
});
