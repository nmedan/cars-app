<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link class="navbar-brand" to="/cars">Cars App</router-link>
    <div class="navbar-nav">
           <router-link class="nav-item nav-link" to="/cars">Cars</router-link>
           <router-link class="nav-item nav-link" to="/add">Add Car</router-link>
    </div>
  </nav>
</template>

<script>
export default {
    
}
</script>