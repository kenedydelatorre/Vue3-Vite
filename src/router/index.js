import { createWebHistory, createRouter } from "vue-router";

import routes from './routes.js'

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 500)
    })
  },

});

// Before each route evaluates...
router.beforeEach((routeTo, routeFrom, next) => {
  // if (import.meta.env.VITE_VUE_APP_DEFAULT_AUTH === "session") {

  //   let newRouteLogin
  //   if (routeTo.name === 'singIn'){
  //     newRouteLogin = routeTo.path
  //   }


  //   // Page routes registers 
  //   const publicPages = [newRouteLogin, '/registro', '/busqueda-producto', '/busqueda-tipo-producto', '/ofertas-de-productores']
  //   // Validation route un list 
  //   const authpage = publicPages.includes(routeTo.path);
  //   // Get sesion storage for validate state session
  //   const isActiveSesion = sessionStorage.getItem('isActiveSesion');
    
  //   if (!authpage && isActiveSesion === null) { // Validate route diferent a routes public and activeSesion null
  //     return next('/inicio-sesion');
  //   }else if(!authpage && isActiveSesion === 'false') { // Validate route diferent a routes public and activeSesion false
  //     return next('/inicio-sesion');
  //   }else if(authpage && isActiveSesion === 'true'){// Validate route diferent a routes public and activeSesion false
  //     return next('/')
  //   }
  // }
  next();
})

router.beforeResolve(async (routeTo, routeFrom, next) => {
  // Create a `beforeResolve` hook, which fires whenever
  // `beforeRouteEnter` and `beforeRouteUpdate` would. This
  // allows us to ensure data is fetched even when params change,
  // but the resolved route does not. We put it in `meta` to
  // indicate that it's a hook we created, rather than part of
  // Vue Router (yet?).
  try {
    // For each matched route...
    for (const route of routeTo.matched) {
      await new Promise((resolve, reject) => {
        // If a `beforeResolve` hook is defined, call it with
        // the same arguments as the `beforeEnter` hook.
        if (route.meta && route.meta.beforeResolve) {
          route.meta.beforeResolve(routeTo, routeFrom, (...args) => {
            // If the user chose to redirect...
            if (args.length) {
              // If redirecting to the same route we're coming from...
              // Complete the redirect.
              next(...args)
              reject(new Error('Redirected'))
            } else {
              resolve()
            }
          })
        } else {
          // Otherwise, continue resolving the route.
          resolve()
        }
      })
    }
    // If a `beforeResolve` hook chose to redirect, just return.
  } catch (error) {
    return
  }

  // If we reach this point, continue resolving the route.
  next()
})

export { router };