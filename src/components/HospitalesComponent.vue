<template>
  <div>
    <h1>DEPARTAMENTOS</h1>
    <div v-if="status == false">
      <img src="./../assets/images/load.gif" />
    </div>
    <table class="table table-bordered table-success" v-else>
      <thead>
        <tr>
          <th>ID:</th>
          <th>NOMBRE:</th>
          <th>DIRECCION:</th>
          <th>DETALLES</th>
          <th>MODIFICAR</th>
          <th>ELIMINAR</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="hospital in hospitales" :key="hospital.idhospital">
          <td>{{hospital.idHospital}}</td>
          <td>{{hospital.nombre}}</td>
          <td>{{hospital.direccion}}</td>
          <td>
            <router-link :to="'/detalles/' + hospital.idHospital" class="btn btn-warning" >DETALLES</router-link>
          </td>
          <td>
            <router-link :to="'/modificar/' + hospital.idHospital  "  class="btn btn-info">MODIFICAR</router-link>
          </td>
          <td>
            <router-link :to="'/eliminar/' + hospital.idHospital  "  class="btn btn-danger">ELIMINAR</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import ServiceHospitales from './../services/ServicesHospitales';
const service = new ServiceHospitales;

export default {
  name:"HospitalesComponent",
  methods:{
    loadHospitales(){
      service.getHospitales().then(res => {
        this.hospitales = res
        this.status = true
      })
    }
  },
  data(){
   return{
    hospitales:[],
    status:false
   }
  },
  mounted(){
    this.loadHospitales();
  }
}
</script>

<style>

</style>