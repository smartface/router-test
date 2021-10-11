import {
    NativeRouter as Router,
    NativeStackRouter as StackRouter,
    Route,
    BottomTabBarRouter
} from '@smartface/router';

export default StackRouter.of({
    path: "/example/modal",
    to: "/example/modal/modalpages/page1",
    homeRoute: 0,
    routes: [
        Route.of({
            path: "/example/modal/page1",
            build: (router, route) => {
                let Page = require("pages/page1").default;
                return new Page({ label: 1 }, router, () => router.push('/example/modal/modalpages/page1'));
            }
        }),
        Route.of({
            path: "/example/modal/page2",
            build: (router, route) => {
                let Page = require("pages/page2").default;
                return new Page({ label: 2 }, router, () => router.push('/example/modal/modalpages/page2'));
            }
        }),
        StackRouter.of({
            path: '/example/modal/modalpages',
            modal: true,
            routes: [
                Route.of({
                    path: "/example/modal/modalpages/page1",
                    build: (router, route) => {
                        let Page = require("pages/page1").default;
                        //@ts-ignore
                        return new Page({ label: 1 }, router, () => router.dismiss());
                    }
                }),
                Route.of({
                    path: "/example/modal/modalpages/page2",
                    build: (router, route) => {
                        let Page = require("pages/page2").default;
                        return new Page({ label: 2 }, router);
                    }
                })
            ]
        })
    ]
});
