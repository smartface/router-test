const {
    NativeRouter: Router,
    Router: RouterBase,
    NativeStackRouter: StackRouter,
    BottomTabBarRouter,
    Route
} = require("@smartface/router"),
    Page1 = require("../pages/page1"),
    Page2 = require("../pages/page2");

const router = Router.of({
    path: "/",
    isRoot: true,
    routes: [
        StackRouter.of({
            path: "/pages2",
            routes: [
                Route.of({
                    path: "/pages2/pagePush",
                    build: (router, route) => {
                        const { routeData, view } = route.getState();
                        let action = () => router.push("/pages/page1");
                        console.log("view: "+view);
                        if (view)
                            action = () => router.goBack();
                        return new Page1({ label: 'view : '+view }, router, action);
                    }
                })
            ]
        }),
        StackRouter.of({
            path: "/pages",
            routes: [
                Route.of({
                    path: "/pages/page1",
                    build: (router, route) => {
                        const { routeData, view } = route.getState();
                        return new Page1({ label: 'page1' }, router, () => router.push("/pages/page2"));
                    }
                }),
                Route.of({
                    path: "/pages/page2",
                    build: (router, route) => {
                        const { routeData, view } = route.getState();
                        return new Page2({ label: 'page2' }, router, () => router.push("/pages2/pagePush"));
                    }
                })
            ]
        })
    ]
});

const unlisten = router.listen((location, action) => {
    console.log(` ---- new route location: ${action} ${location.url}`);
});

router.push("/pages2/pagePush");
