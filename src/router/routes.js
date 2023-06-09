// import userSesionStore from '@/stores/sesion'

export default [
  {
    path: "/inicio-sesion/:id",
    name: "singIn",
    meta: { requiresAuth: true },
    component: ()=> import("../components/singIn/singIn.vue"),
  },
  {
    path: "/busqueda-producto",
    name: "search-product",
    meta: { requiresAuth: true },
    component: ()=> import("../components/searchProduct/searchProduct.vue"),
  },
  {
    path: "/busqueda-tipo-producto",
    name: "search-type-product",
    meta: { requiresAuth: true },
    component: ()=> import("../components/searchProduct/searchTypeProduct.vue"),
  },  
  {
    path: "/ofertas-de-productores",
    name: "offerts-productors",
    meta: { requiresAuth: true },
    component: ()=> import("../components/offers/offers.vue"),
  },  
  {
<<<<<<< HEAD
    path: "/detalle-de-producto",
    name: "product-detail",
    meta: { requiresAuth: true },
    component: ()=> import("../components/product/product_detail.vue"),
  },    
=======
    path: "/registro",
    name: "register-2",
    meta: { requiresAuth: true },
    component: ()=> import("../components/register/register.vue"),
  }, 
  {
    path: "/registro/:id",
    name: "register",
    meta: { requiresAuth: true },
    component: ()=> import("../components/register/register.vue"),
  },  

>>>>>>> 4117a24c1caaef67b709c6bcb03a2de1ed64889e
//   {
//     path: "/inicio-sesion",
//     name: "login",
//     component: ()=> import("../components/singIn/singIn.vue"),
//     meta: {
//       beforeResolve(routeTo, routeFrom, next) {
//         const sesionStore = userSesionStore()
//         if (sesionStore.isActiveSesion === "false"){
//           next()
//         }else{
//           next({ name: 'Home' })
//         }
//       },
//     },   
//   },
//   {
//     path: "/registro/",
//     name: "register",
//     component: ()=> import("../components/singUp/singUp.vue"),
//   },  
//   {
//     path: "/intranet",
//     name: "intranet",
//     component: ()=> import("../components/intranet/intranet.vue"),
//   },  
//   {
//     path: "/busqueda-por-indicador",
//     name: "view1",
//     component: ()=> import("../components/intranet/view1/view1.vue"),
//   },  
//   {
//     path: "/busqueda-por-región",
//     name: "view2",
//     component: ()=> import("../components/intranet/view2/view2.vue"),
//   },
//   {
//     path: "/busqueda-por-periodo",
//     name: "view3",
//     component: ()=> import("../components/intranet/view3/view3.vue"),
//   },  
//   {
//     path: '/:catchAll(.*)',
//     redirect: '404',
//   },
//   {
//     path: '/404',
//     name: '404',
//     component: ()=> import("../components/HelloWorld.vue"),
//   }
];