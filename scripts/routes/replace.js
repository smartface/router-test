const Router = require("@smartface/router/src/native/NativeRouter");
const StackRouter = require("@smartface/router/src/native/NativeStackRouter");
const BottomTabBarRouter = require("@smartface/router/src/native/BottomTabBarRouter");
const Route = require("@smartface/router/src/router/Route");

module.exports = StackRouter.of({
    path: "/example/replace",
    to: "/example/replace/pages/page1",
    routes: [
        Route.of({
            path: "/example/replace/pages/page1",
            build: (router, route) => {
                console.log(`Replace example ${router} ${route}`);
                let Page = require("pages/page1");
                if(route.getState().routeData.change){
                    Page = require("pages/page2");
                }
                
                const change = !!route.getState().routeData.change;
                
                return new Page({ label: 2 }, router, () => router.replace("/example/replace/pages/page1", {change: !change}));
            }
        })
    ]
});
