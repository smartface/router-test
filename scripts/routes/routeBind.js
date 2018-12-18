
function routeBinder(params) {
  return params;
   return Object.assign({},
     params, {
       routeDidEnter: (router, route) => {
         const { view } = route.getState();
         view.onRouteEnter && view.onRouteEnter(router, route);
         params.routeDidEnter && params.routeDidEnter(router, route);
       },
       routeDidExit: (router, route) => {
         const { view } = route.getState();
         view.onRouteExit && view.onRouteExit(router, route);
         params.routeDidExit && params.routeDidExit(router, route);
       }
     });
}
