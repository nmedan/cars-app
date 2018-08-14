<template>
  <div class="list-group">
       <div v-for="(car, key) in cars" :key="key">
            {{ car.brand }}
       </div>
  </div>
</template>

<script>
export default {
  props: ['cars']
}
</script>
