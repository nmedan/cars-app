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
            <button class="btn btn-danger" @click="deleteCar(car.id)">Delete</button> 
            <hr/>
       </div>
  </div>
</template>

<script>
 import { cars } from '../services/Cars'
export default {
  props: ['cars'],
  methods: { 
       deleteCar (id) {
        if (confirm("Do you really want to delete this car?")) {        
            cars.delete(id)
            .then(() => {
            this.$emit('carDeleted', id)
            })
        }
      }

  }
}
</script>
