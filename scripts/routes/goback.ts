import {
    NativeRouter as Router,
    NativeStackRouter as StackRouter,
    Route
} from "@smartface/router"
import Page1 from 'pages/page1';
import Page2 from 'pages/page2';


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
                        console.log("view: " + view);
                        if (view)
                            action = () => router.goBack();
                        return new Page1({ label: 'view : ' + view }, router, action);
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
