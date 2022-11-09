import { createRouter, createWebHistory } from "vue-router";
import HospitalesComponent from './components/HospitalesComponent.vue';
import HomeComponent from './components/HomeComponent.vue';
import DetallesHospitales from './components/DetallesHospitales.vue';
import InsertarHospital from './components/InsertarHospital.vue';
import UpdateHospitales from './components/UpdateHospitales.vue';
import SweetAlert from './components/SweetAlert.vue';


const routes = [
    {
        path: "/", component:HomeComponent
    },
    {
        path: "/hospitales", component:HospitalesComponent
    },
    {
        path: "/detalles/:id", component:DetallesHospitales
    },
    {
        path: "/insertar", component:InsertarHospital
    },
    {
        path: "/modificar/:id", component:UpdateHospitales
    },
    {
        path: "/eliminar/:id", component:SweetAlert
    }
    
    
]

const router = createRouter({
    history:createWebHistory(),
    routes:routes
});

export default router;