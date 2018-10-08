'use strict';

const AlertView = require("sf-core/ui/alertview");
const Page = require('sf-core/ui/page');

var Page2 = require("pages/page2");

// var bottomPage1 = new Page1({});
// var bottomPage2 = new Page2({});

const Router = require("@smartface/router/src/native/NativeRouter");
const RouterBase = require("@smartface/router/src/router/Router");
const StackRouter = require("@smartface/router/src/native/NativeStackRouter");
const BottomTabBarRouter = require("@smartface/router/src/native/BottomTabBarRouter");
const Route = require("@smartface/router/src/router/Route");
const Color = require('sf-core/ui/color');
const Image = require("sf-core/ui/image");

var tabbar1 = Image.createFromFile("images://tabbar1.png");

const router = Router.of({
    path: "/",
    to: "/pages/user",
    isRoot: true,
    routes: [
        Route.of({
            path: "/page1",
            build: (match, state, router) => {
                let Page1 = require("pages/page1");
                return new Page1(router, "/page2");
            }
        }),
        Route.of({
            path: '/page2',
            build: (match, state, router, view) => {
                let Page2 = require("pages/page2");
                return new Page2({}, router);
            }
        }),
        BottomTabBarRouter.of({
            path: "/pages",
            to: '/pages/user',
            tabbarParams: () => ({
                ios: { translucent: false },
                itemColor: Color.RED,
                unselectedItemColor: Color.YELLOW,
                backgroundColor: Color.BLUE,
                height: 100
            }),
            items: () => [{ title: "Page1" }, { title: "Page2" }],
            routes: [
                StackRouter.of({
                    path: "/pages/user",
                    to: '/pages/user/login',
                    routes: [
                        Route.of({
                            path: '/pages/user/login',
                            build: (match, state, router, view) => {
                                let Page2 = require("pages/pgLogin");
                                return new Page2(router);
                            }
                        }),
                        Route.of({
                            path: '/pages/user/page1',
                            build: (match, state, router, view) => {
                                let Page1 = require("pages/page1");
                                return new Page1({}, router);
                            }
                        })
                    ]
                }),
                StackRouter.of({
                    path: "/pages/page",
                    to: '/pages/page/page2',
                    routes: [
                        Route.of({
                            path: '/pages/page/page2',
                            build: (match, state, router, view) => {
                                let Page2 = require("pages/page2");
                                return new Page2({}, router);
                            }
                        })
                    ]
                })
            ]
        }),
        StackRouter.of({
            path: "/user",
            routes: [
                Route.of({
                    path: '/user/login',
                    build: (match, state, router, view) => {
                        let Page2 = require("pages/page2");
                        return new Page2({}, router);
                    }
                })
            ]
        })
    ]
});

/*
router.addRouteBlocker((location, action, callback) => {
    alert({
        message: "Would you like to answer?",
        title: "Question", //optional
        buttons: [{
                text: "Yes",
                type: AlertView.Android.ButtonType.POSITIVE,
                onClick: function() {
                    callback(true)
                },
            },
            {
                text: "No",
                type: AlertView.Android.ButtonType.NEGATIVE,
                onClick: function() {
                    callback(false);
                },
            }
        ]
    });
});
*/
const unlisten = router.getHistory().listen((location, action) => {
    // location.state.userState
    console.log(" ---- new route action : " + action + " > " + location.pathname+ " : "+JSON.stringify(Router.getHistory().entries.map(item => item.pathname)));
});


router.push('/pages/user');

module.exports = router;
