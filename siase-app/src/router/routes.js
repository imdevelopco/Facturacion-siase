import Home from '../views/Home'
import Login from '../views/Login'
import Clientes from '../views/Clientes'
import Facturacion from '../views/Facturacion.vue'
import Usuarios from '../views/Usuarios.vue'
import Configuracion from '../views/Configuracion.vue'
import Reportes from '../views/Reportes.vue'
import Navbar from '../components/AppLayout.vue'
import Ordenes from "../views/Ordenes.vue";

const title = 'SIASE - ';
const routes = [{
  path: '/',
  name: 'Login',
  component: Login,
  meta: {
    title: title + 'Login'
  }
},
{
  path: '/home',
  name: 'Home',
  component: Home,
  // userLoged : true //userLoged debe ser true para poder acceder a caulquiera de sus hijos
  meta: {
    title: title + 'Inicio'
  }
},
{
  path: '/app',
  name: 'App',
  component: Navbar,
  children: [
    {
      path: 'facturacion',
      name: 'Facturacion',
      component: Facturacion,
      meta: {
        title: title + 'Facturación'
      }
    },
    {
      path: 'clientes',
      name: 'Clientes',
      component: Clientes,
      meta: {
        title: title + 'Clientes'
      }
    },
    {
      path: 'usuarios',
      name: 'Usuarios',
      component: Usuarios,
      meta: {
        title: title + 'Usuarios'
      }
    },
    {
      path: 'reportes',
      name: 'Reportes',
      component: Reportes,
      meta: {
        title: title + 'Reportes'
      }
    },
    {
      path: 'configuracion',
      name: 'Configuracion',
      component: Configuracion,
      meta: {
        title: title + 'Configuración'
      }
    },
    {
      path: 'ordenes',
      name: 'cotizaciones',
      component: Ordenes,
      meta: {
        title: title + 'Ordenes de Servicio'
      }
    }
  ]
}

]

export default routes;