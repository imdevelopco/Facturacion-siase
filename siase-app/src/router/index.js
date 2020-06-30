import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import Login from '../views/Login'
import Clientes from '../views/Clientes'
import Facturacion from '../views/Facturacion.vue'
import Usuarios from '../views/Usuarios.vue'
import Configuracion from '../views/Configuracion.vue'
import Reportes from '../views/Reportes.vue'
import Navbar from '../components/AppLayout.vue'
import Cotizaciones from "../views/Cotizaciones";

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/app',
    name: 'App',
    component: Navbar,
    children: [
      {
        path: 'facturacion',
        name: 'Facturacion',
        component: Facturacion
      },
      {
        path: 'clientes',
        name: 'Clientes',
        component: Clientes
      },
      {
        path: 'usuarios',
        name: 'Usuarios',
        component: Usuarios
      },
      {
        path: 'reportes',
        name: 'Reportes',
        component: Reportes
      },
      {
        path: 'configuracion',
        name: 'Configuracion',
        component: Configuracion
      },
      {
        path: 'cotizaciones',
        name: 'cotizaciones',
        component: Cotizaciones
      }
    ]
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router