const Page = require('sf-core/ui/page');

var Page1 = require("pages/page1");
var Page2 = require("pages/page2");

const Router = require("@smartface/router/src/native/NativeRouter");
const StackRouter = require("@smartface/router/src/native/NativeStackRouter");
const Route = require("@smartface/router/src/router/Route");

const router = Router.of({
    path: "/pages",
    to: "/page/page1",
    isRoot: true,
    build: () => {
        return new Page({ orientation: Page.Orientation.AUTO });
    },
    routes: [
        Route.of({
            path: "/pages/page1",
            build: (match, state, router) => new Page1(state.data, router)
        }),
        Route.of({
            path: "/pages/page2",
            build: (match, state, router, view) => {
                return new Page2(state.data, router);
            }
        }),
        StackRouter.of({
            path: "/pages",
            to: "/pages/page1",
            routes: [
                Route.of({
                    path: "/pages/page1",
                    build: (match, state, router) => new Page1(state.data, router)
                }),
                Route.of({
                    path: "/pages/page2",
                    build: (match, state, router, view) => {
                        return new Page2(state.data, router);
                    }
                })
            ]
        }),
    ]
});

router.push("/pages/page1");

module.exports = router;
