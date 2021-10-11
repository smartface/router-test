import Color = require('@smartface/native/ui/color');
import {
    NativeRouter as Router,
    NativeStackRouter as StackRouter,
    Route,
    BottomTabBarRouter
} from '@smartface/router';
import Page1 from "pages/page1";
import Page2 from "pages/page2";
import TabBarItem = require('@smartface/native/ui/tabbaritem');
import Image = require('@smartface/native/ui/image');
import { tabItems } from './bottomtabbar';

const bottomTabBarRouter = BottomTabBarRouter.of({
    path: "/example/btbhome",
    to: "/example/btbhome/tab1/page1",
    tabbarParams: () => ({
        itemColor: {
            normal: Color.YELLOW,
            selected: Color.RED
        },
    }),
    items: tabItems,
    // tab1
    routes: [
        StackRouter.of({
            path: "/example/btbhome/tab1",
            to: "/example/btbhome/tab1/page1",
            routes: [
                Route.of({
                    path: "/example/btbhome/tab1/page1",
                    build: (router, route) => {
                        return new Page1(route.getState().routeData, router, () => router.push("/example/btbhome/tab2/page2"));
                    }
                }),
                Route.of({
                    path: "/example/btbhome/tab1/page2",
                    build: (router, route) => {
                        let { routeData, view, match } = route.getState();
                        view = view || new Page2(routeData, router, () => router.goBack());
                        return view;
                    }
                })
            ]
        }),
        // tab2
        StackRouter.of({
            path: "/example/btbhome/tab2",
            to: "/example/btbhome/tab2/page1",
            homeRoute: 0,
            routes: [
                Route.of({
                    path: "/example/btbhome/tab2/page1",
                    build: (router, route) => new Page1(route.getState().routeData, router, () => router.push("/example/btbhome/tab2/page2"))
                }),
                Route.of({
                    path: "/example/btbhome/tab2/page2",
                    build: (router, route) => {
                        return new Page2(route.getState().routeData, router, () => router.goBack());
                    }
                })
            ]
        }),
        // tab3
        Route.of({
            path: "/example/btbhome/tab3",
            build: (router, route) => {
                return new Page1(route.getState().routeData, router, () => router.push("/example/btbhome/tab2/page1"));
            }
        })
    ]
});

export default bottomTabBarRouter;
