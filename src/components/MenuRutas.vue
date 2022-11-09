<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
          <router-link class="nav-link active" aria-current="page" to="/"
                >
                <img src="./../assets/images/hospital.png" style="width: 70px; height: 70px;"/>
                </router-link
              >
        </li>
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/hospitales"
                >HOSPITALES</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/insertar"
                >INSERTAR</router-link
              >
            </li>
            
            <li class="nav-item">
              <!-- <router-link class="nav-link active" aria-current="page" to="/insertar"
                >INSERTAR</router-link
              > -->
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: "MenuRutas",
  };
  </script>
  
  <style>
  
  </style>
  