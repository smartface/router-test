const Page = require('sf-core/ui/page');

var Page1 = require("pages/page1");
var Page2 = require("pages/page2");

var bottomPage1 = new Page1({});
var bottomPage2 = new Page2({});


const Router = require("@smartface/router/src/native/NativeRouter");
const StackRouter = require("@smartface/router/src/native/NativeStackRouter");
const BottomTabBarRouter = require("@smartface/router/src/native/BottomTabBarRouter");
const Route = require("@smartface/router/src/router/Route");
const Color = require('sf-core/ui/color');

// Define routes and go to initial page of application
// 1. Root router NativeRouter olmak zorunda
/**
* 
* router.push('path1');
* 
* router.push('pages/page1/12', {name: 'cenk'});
* state.data.name
* state.x = 10
* 
* state.x = 10;
* 
* pages/page1/:id
* 
* path        hash    {id:12}   search
* pages/page1 #top1 /  12       ?filter=name
* match: path, search, hash, params
* 
* state : 
*
*
* router.onBlockPath((callback) => {
*   calback(true|false);
* });
*
*/
const router = Router.of({
    path: "/pages",
    to: "/page/page1",
    isRoot: true,
    build: () => {
        return new Page({ orientation: Page.Orientation.AUTO });
    },
    routes: [
        Route.of({
            path: "/pages/page2",
            build: (match, state) => {
                let Page2 = require("pages/page2");
                return new Page2();
            }
        }),
        Route.of({
            path: "/pages/:name([0-9]*)",
            build: (match, state, router) => {
                console.log("page1");
                let Page1 = require("pages/page1");
                return new Page1(state.data, router);
            }
        }),
        StackRouter.of({
            path: "/stack",
            to: "/stack/path1",
            routes: [
                Route.of({
                    path: "/stack/path1",
                    build: (match, state, router) => new Page1(state.data, router)
                }),
                Route.of({
                    path: "/stack/path2",
                    build: (match, state, router, view) => {
                        if(!state.data.applied){
                            // blocks route changing
                            return null;
                        }
                        
                        return new Page1(state.data, router);
                    }
                })
            ]
        }),
        BottomTabBarRouter.of({
            path: "/bottom",
            to: "/bottom/page2",
            build: () => {
                const BottomTabBarController = require('sf-core/ui/bottomtabbarcontroller');
                return new BottomTabBarController();
            },
            tabbarParams: () => ({
                ios: { translucent: false},
                itemColor: Color.RED,
                unselectedItemColor: Color.YELLOW,
                backgroundColor: Color.BLUE,
                height: 100
            }),
            items: () => [{title : "page1"}, {title: "page2"}],
            routes: [
                Route.of({
                    path: "/bottom/page1",
                    build: (match, state, router, view) => {
                        bottomPage1._router = router;
                        return bottomPage1
                    }
                }),
                Route.of({
                    path: "/bottom/page2",
                    build: (match, state, router, view) => {
                        bottomPage2.router = router;
                        return bottomPage2;
                    }
                })
            ]
        })
    ]
});

router.push("/stack/path1");

module.exports = router;
