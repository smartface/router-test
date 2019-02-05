const StackRouter = require("@smartface/router/src/native/NativeStackRouter");
const Route = require("@smartface/router/src/router/Route");

module.exports = StackRouter.of({
    path: "/example/pushExample",
    to: "/example/pushExample/page1",
    routes: [
        Route.of({
            path: "/example/pushExample/page1",
            build: (router, route) => {
                let Page = require("pages/page1");
                // not animated push
                return new Page({ label: "Page 1" }, router, () => router.push("page2", {}, false));
            }
        }),
        Route.of({
            path: "/example/pushExample/page2",
            build: (router, route) => {
                let Page = require("pages/page1");
                // animated push
                return new Page({ label: "Page 2" }, router, () => router.push("page3"));
            }
        }),
        Route.of({
            path: "/example/pushExample/page3",
            build: (router, route) => {
                let Page = require("pages/page1");
                // not animated push
                return new Page({ label: "Page 3" }, router, () => router.push("page4", {}, false));
            }
        }),
        Route.of({
            path: "/example/pushExample/page4",
            build: (router, route) => {
                let Page = require("pages/page1");
                return new Page({ label: "Page 4" }, router, () => router.goBackHome());
            }
        })
    ]
});
