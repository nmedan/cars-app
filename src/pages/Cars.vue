<template>
  <div class="container mt-4">
    <div class="row">
      <div class="col">
        <AppCars :cars="cars"/>
      </div>
    </div>
  </div>
</template>

<script>
import AppCars from '../components/AppCars.vue'
import { cars} from '../services/Cars'
export default {
    components: {
        AppCars
    },

    data() {
        return {
        cars: []
        }
    },

    beforeRouteEnter (to, from, next) {
        cars.getAll()
        .then((response) => {
            next((vm) => {
                vm.cars = response.data
            })
        })
    },

}
</script>