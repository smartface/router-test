const Router = require("@smartface/router/src/native/NativeRouter");
const StackRouter = require("@smartface/router/src/native/NativeStackRouter");
const BottomTabBarRouter = require("@smartface/router/src/native/BottomTabBarRouter");
const Route = require("@smartface/router/src/router/Route");

module.exports = StackRouter.of({
    path: "/example/modal",
    routes: [
        Route.of({
            path: "/example/modal/page1",
            build: (router, route) => {
                let Page = require("pages/page1");
                return new Page({ label: 1 }, router, "/pages2/page2/page1");
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
                        return new Page({ label: 1 }, router, "/example/modal/modalpages/page2");
                    }
                }), 
                Route.of({
                    path: "/example/modal/modalpages/page2",
                    build: (router, route) => {
                        let Page = require("pages/page2");
                        return new Page({ label: 2 }, router);
                    }
                })
            ]
        })
    ]
});
