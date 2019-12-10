const Router = require("@smartface/router/src/native/NativeRouter");
const StackRouter = require("@smartface/router/src/native/NativeStackRouter");
const BottomTabBarRouter = require("@smartface/router/src/native/BottomTabBarRouter");
const Route = require("@smartface/router/src/router/Route");

module.exports = StackRouter.of({
    path: "/example/noanimation",
    to: "/example/noanimation/page1",
    homeRoute: 0,
    routes: [
        Route.of({
            path: "/example/noanimation/page1",
            build: (router, route) => {
                let Page = require("pages/page1");
                return new Page({ label: "Root page" }, router, () => router.push('modalpages/page1'));
            }
        }),
        StackRouter.of({
            path: '/example/noanimation/modalpages',
            modal: true,
            routes: [
                Route.of({
                    path: "/example/noanimation/modalpages/page1",
                    build: (router, route) => {
                        let Page = require("pages/page1");
                        let opened = false;
                        
                        return new Page({ label: 'animated modal 1, dismiss is not animated' }, router, () => {
                            if (opened) {
                                router.dismiss({}, false);
                            }
                            else {
                                opened = true;
                                router.push('nested/page2', {}, false);
                            }
                        });
                    },
                    routeDidExit(router, route){
                        console.log('exit :', route.getState().action)
                    }
                }),
                StackRouter.of({
                    path: '/example/noanimation/modalpages/nested',
                    modal: true,
                    routes: [
                        Route.of({
                            path: "/example/noanimation/modalpages/nested/page2",
                            build: (router, route) => {
                                let Page = require("pages/page1");
                                return new Page({ label: 'not animmated modal 2' }, router, () => router.dismiss({}, false));
                            },
                            routeDidExit(router, route){
                                console.log('exit :', route.getState().action)
                            }
                        })
                    ]
                })
            ]
        })
    ]
});
