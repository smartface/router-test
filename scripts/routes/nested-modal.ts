import {
    NativeRouter as Router,
    Router as RouterBase,
    NativeStackRouter as StackRouter,
    BottomTabBarRouter,
    Route
} from "@smartface/router"

export default StackRouter.of({
    path: "/example/nestedmodal",
    to: "/example/nestedmodal/page1",
    homeRoute: 0,
    routes: [
        Route.of({
            path: "/example/nestedmodal/page1",
            build: (router, route) => {
                let Page = require("pages/page1").default;
                return new Page({ label: 1 }, router, () => router.push('/example/nestedmodal/modalpages/page1'));
            }
        }),
        StackRouter.of({
            path: '/example/nestedmodal/modalpages',
            modal: true,
            routes: [
                Route.of({
                    path: "/example/nestedmodal/modalpages/page1",
                    build: (router, route) => {
                        let Page = require("pages/page1").default;
                        let opened = false;

                        return new Page({ label: 'modal 1' }, router, () => {
                            console.log('router : ' + router);
                            if (opened) {
                                //@ts-ignore
                                router.dismiss();
                            }
                            else {
                                opened = true;
                                router.push('nested/page2');
                            }
                        });
                    }
                }),
                StackRouter.of({
                    path: '/example/nestedmodal/modalpages/nested',
                    modal: true,
                    routes: [
                        Route.of({
                            path: "/example/nestedmodal/modalpages/nested/page2",
                            build: (router, route) => {
                                let Page = require("pages/page2").default;
                                //@ts-ignore
                                return new Page({ label: 'modal 2' }, router, () => router.dismiss());
                            }
                        })
                    ]
                })
            ]
        })
    ]
});
