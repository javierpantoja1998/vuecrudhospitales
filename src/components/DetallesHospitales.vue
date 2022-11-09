<template>
  <div>
    <h1>DETALLES HOSPITALES</h1>
    <h2 style="color:lightcoral">
    ID: {{hospital.idHospital}}
    </h2>
    <h2 style="color:lightcoral">
    NOMBRE: {{hospital.nombre}}
    </h2>
    <h2 style="color:lightcoral">
    DIRECCION: {{hospital.direccion}}
    </h2>
    <router-link to="/hospitales">VOLVER</router-link>
  </div>
</template>

<script>
import ServiceDepartamentos from '@/services/ServicesHospitales';
const service = new ServiceDepartamentos;
export default {
    name:"DetallesHospitales",
    methods:{

        loadHospital(){
            service.getHospital(this.$route.params.id).then(res => {
                this.hospital = res;
            });
        }

    },

    data(){
        return{
            hospital:{},
        }
        
    },

    mounted(){
        this.loadHospital();
    }
}
</script>

<style>

</style>