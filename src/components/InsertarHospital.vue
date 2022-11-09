<template>
  <div>
    <h1>INSERTAR</h1>
    <h1 style="color:coral">{{mensaje}}</h1>
    <!-- Si no ponemos el prevent nos da error al hacer el post -->
    <form method="POST" v-on:submit.prevent="insertarHospital()">
        <label>Introduce un numero:</label>
        <input type="number"  v-model="hospital.idhospital" class="form-control"/>
        <label>Introduce un nombre:</label>
        <input type="text" v-model="hospital.nombre" class="form-control"/>
        <label>Introduce una direccion:</label>
        <input type="text"  v-model="hospital.direccion" class="form-control"/>
        <label>Introduce un telefono:</label>
        <input type="text"  v-model="hospital.telefono" class="form-control"/>
        <label>Introduce numero camas:</label>
        <input type="number"  v-model="hospital.camas" class="form-control"/>
        <button class="btn btn-primary">Crear Hospital</button>
    </form>
  </div>
</template>

<script>
import ServiceDepartamentos from '@/services/ServicesHospitales';
const service = new ServiceDepartamentos;

export default {
    name:"InsertarHospital",

    methods:{
        insertarHospital(){
            service.insertHospital(this.hospital).then(res=>{
                this.$router.push("/hospitales");
                console.log(res)
            })
        }
    },

    data(){
        return{
            mensaje:"",
            hospital: {
                idhospital:0,
                nombre:"",
                direccion:""
               
            }
        }
    }
}
</script>

<style>

</style>