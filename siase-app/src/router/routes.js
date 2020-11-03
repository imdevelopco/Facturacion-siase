import Home from '../views/Home'
import Login from '../views/Login'
import Clientes from '../views/Clientes'
import Facturacion from '../views/Facturacion.vue'
import Usuarios from '../views/Usuarios.vue'
import Configuracion from '../views/Configuracion.vue'
import Reportes from '../views/Reportes.vue'
import Navbar from '../components/AppLayout.vue'
import Cotizaciones from "../views/Cotizaciones";

const routes = [{
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
   // userLoged : true //userLoged debe ser true para poder acceder a caulquiera de sus hijos

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

export default routes;