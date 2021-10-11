import {
    NativeRouter as Router,
    NativeStackRouter as StackRouter,
    Route,
    BottomTabBarRouter
} from '@smartface/router';

export default StackRouter.of({
    path: "/example/noanimation",
    to: "/example/noanimation/page1",
    homeRoute: 0,
    routes: [
        Route.of({
            path: "/example/noanimation/page1",
            build: (router, route) => {
                let Page = require("pages/page1").default;
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
                        let Page = require("pages/page1").default;
                        let opened = false;

                        return new Page({ label: 'animated modal 1, dismiss is not animated' }, router, () => {
                            if (opened) {
                                //@ts-ignore
                                router.dismiss({}, false);
                            }
                            else {
                                opened = true;
                                router.push('nested/page2', {}, false);
                            }
                        });
                    },
                    routeDidExit(router, route) {
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
                                let Page = require("pages/page1").default;
                                //@ts-ignore
                                return new Page({ label: 'not animmated modal 2' }, router, () => router.dismiss({}, false));
                            },
                            routeDidExit(router, route) {
                                console.log('exit :', route.getState().action)
                            }
                        })
                    ]
                })
            ]
        })
    ]
});
