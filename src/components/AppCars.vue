<template>
  <div class="list-group">
       <div v-for="(car, key) in cars" :key="key">
            <p><h4>{{ car.brand }}</h4></p>
            <p>Model: {{car.model}}</p>
            <p>Year: {{car.year}}</p>
            <p>Number of doors: {{car.numberOfDoors}}</p>
            <p>Max speed: {{car.maxSpeed}}</p>        
            <p>Engine: {{car.engine}}</p>
            <p>Automatic: {{car.isAutomatic}}</p>
            <router-link :to="{ name: 'edit-car', params: { id: car.id } }">
                 <button class="btn btn-primary">Edit</button>
            </router-link>  
            <hr/>
       </div>
  </div>
</template>

<script>
export default {
  props: ['cars']
}
</script>
