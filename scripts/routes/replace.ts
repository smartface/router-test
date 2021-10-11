import {
    NativeRouter as Router,
    NativeStackRouter as StackRouter,
    Route,
    BottomTabBarRouter
} from '@smartface/router';

export default StackRouter.of({
    path: "/example/replace",
    to: "/example/replace/pages/page1",
    routes: [
        Route.of({
            path: "/example/replace/pages/page1",
            build: (router, route) => {
                console.log(`Replace example ${router} ${route}`);
                let Page = require("pages/page1").default;
                if (route.getState().routeData.change) {
                    Page = require("pages/page2").default;
                }

                const change = !!route.getState().routeData.change;
                return new Page({ label: 2 }, router, () => router.replace("/example/replace/pages/page1", { change: !change }));
            }
        })
    ]
});
