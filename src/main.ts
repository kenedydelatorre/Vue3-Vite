import { createApp } from 'vue'
import App from './App.vue'
import { router }  from './router/index.js' 

import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/js/bootstrap.js'
// import 'bootstrap/dist/js/bootstrap.js.map'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css'




createApp(App)
.use(router)
.mount('#app')
