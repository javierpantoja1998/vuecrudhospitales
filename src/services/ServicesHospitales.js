import axios from "axios";
import Global from "@/Global";

export default class ServiceDepartamentos {

    getHospitales() {
        return new Promise(function(resolve){
            var request = "api/hospitales";
            var url = Global.urlHospitales + request;
            var hospitales = []
            axios.get(url).then(res => {
            hospitales = res.data
            resolve(hospitales)
        });
        }) 

    }

    getHospital(id){
        return new Promise(function(resolve){
            var request = "api/hospitales/" + id;
            var url = Global.urlHospitales + request;
            axios.get(url).then(res=>{
                resolve(res.data)
            });
        })
    }

    insertHospital(hospital){
        return new Promise(function(resolve){
            var request = "/api/hospitales";
            var url = Global.urlHospitales + request;
            axios.post(url, hospital).then(res=>{
                resolve(res);
            })
        });
    }

    findHospital(id){
        return new Promise(function(resolve){
            var request = "api/hospitales/" + id;
            var url = Global.urlHospitales + request;
            axios.get(url).then(res=>{
                resolve(res)
            });
        })
    }

    updateHospital(hospital){
        return new Promise(function(resolve){
            var request = "api/hospitales";
            var url = Global.urlHospitales + request;
            axios.put(url, hospital).then(res=>{
                resolve(res);
            });
        });
    }

    eliminarHospital(id){
        return new Promise(function(resolve){
            var request = "/api/hospitales/" +id;
            var url = Global.urlHospitales + request;
            axios.delete(url).then(res=>{
                resolve(res);
            });
        });
    }
}
