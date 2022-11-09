<template>
  <div>
    <h1>MODIFICAR HOSPITALES</h1>
    <div v-if="hospital">
        <form method="POST" v-on:submit.prevent="updateHospital()">
            <label>ID:</label>
            <input type="number" v-model="hospital.idHospital" class="form-control" /><br/>
            <label>NOMBRE:</label>
            <input type="text" v-model="hospital.nombre" class="form-control"/>
            <label>DIRECCION:</label>
            <input type="text" v-model="hospital.direccion" class="form-control"/>
            <!-- <label>TELEFONO:</label>
            <input type="text" v-model="hospital.telefono" class="form-control"/>
            <label>CAMAS:</label>
            <input type="number" v-model="hospital.camas" class="form-control"/> -->
            <button class="btn btn-info">Modificar</button>
        </form>
    </div>
  </div>
</template>

<script>
import ServiceDepartamentos from '@/services/ServicesHospitales';
const service = new ServiceDepartamentos;

export default {
    name:"UpdateHospitales",
    methods:{
        updateHospital(){
            service.updateHospital(this.hospital).then(res=>{
                console.log(this.hospital)
                console.log(res)
                this.$router.push('/hospitales');
            });
        },
        findHospital(){
            
            service.findHospital(this.$route.params.id).then(res=>{
                
            this.hospital = res;
        });
        }
    },
    data(){
        return{
            hospital: {},
            idHospital:0
            
        }
    },
    mounted(){
        this.findHospital();
    }

    
}
</script>

<style>

</style>