<template>
    <div>
      <h1>¿ESTÁ SEGURO DE QUE DESEA BORRAR EL HOSPITAL?</h1>
      <img src="./../assets/images/rk.gif"/>
    </div>
    <button @click="probarAlert()">ELIMINAR</button>
  </template>
  <script>
  // ES6 Modules or TypeScript
  import ServiceDepartamentos from '@/services/ServicesHospitales';
  const service = new ServiceDepartamentos;
  import Swal from 'sweetalert2';
  export default {
    name: "ELIMINAR HOSPITAL",
    methods: {
      probarAlert() {
        Swal.fire({
          title: "Estas seguro?",
          text: "No podrás volver atrás!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Confirmar",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              "BORRADO!", 
            "El hospital fue eliminado correctamente.",
             "Exito");
             this.probSaray();
          }
        });
      },
      probSaray(){
        //Definimos el id y lo recogemos por su parametro definido en la ruta
        var id = this.$route.params.id;
        service.eliminarHospital(id).then(res=>{
            console.log(res)
            //Lo redirijimos a la pagina principal
            this.$router.push("/hospitales");
        })
      }
    },
  };
  </script>
  <style></style>