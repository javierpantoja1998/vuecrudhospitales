<template>
  <div>
    <h1 style="color:firebrick">HOSPITAL ELIMINADO</h1>
  </div>
</template>

<script>
import ServiceDepartamentos from '@/services/ServicesHospitales';
const service = new ServiceDepartamentos;

export default {
    name:"EliminarHospital",

    mounted(){
      //Definimos el id y lo recogemos por su parametro definido en la ruta
      var id = this.$route.params.id;
      service.eliminarHospital(id).then(res=>{
        console.log(res);
        //Lo redirijimos a la pagina principal
        this.$router.push("/hospitales");
      });
    }
}
</script>

<style>

</style>