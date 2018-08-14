<template>
  <div>
   <form @submit.prevent="onSubmit">
      <div class="form-group row">
        <label for="brand" class="col-4 col-form-label">Brand</label>
        <div class="col-8">
          <div class="input-group">
            <input id="brand" name="brand" type="text" required="required" class="form-control here" v-model="car.brand">
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="model" class="col-4 col-form-label">Model</label>
        <div class="col-8">
          <div class="input-group">
            <input id="model" name="model" type="text" required="required" class="form-control here" v-model="car.model">
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="year" class="col-4 col-form-label">Year</label>
        <div class="col-8">
          <select id="year" name="year" type="number" required="required" class="form-control here" v-model="car.year">
              <option  v-for="(year, key) in getYears()" :key="key" :value="year">
                  {{year}}
              </option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="maxSpeed" class="col-4 col-form-label">Maximum speed</label>
        <div class="col-8">
          <div class="input-group">
            <input id="maxSpeed" name="maxSpeed" type="number" required="required" class="form-control here" v-model="car.maxSpeed">
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="numberOfDoors" class="col-4 col-form-label">Number of doors</label>
        <div class="col-8">
          <div class="input-group">
            <input id="numberOfDoors" name="numberOfDoors" type="number" required="required" class="form-control here" v-model="car.numberOfDoors">
          </div>
        </div>
      </div>
      <div class="form-group row">
          <label for="engine" class="col-4 col-form-label" >Engine</label>
            <input id="engine" name="engine" value="electric" type="radio" v-model="car.engine">

          <label for="engine"> Electric</label>


            <input id="engine" name="engine" value="petrol" type="radio" v-model="car.engine">

          <label for="engine"Petrol>Petrol</label>


            <input id="engine" name="engine" value="hybrid" type="radio" v-model="car.engine">

          <label for="engine" Hybrid>Hybrid</label>

            <input id="engine" name="engine" value="diesel" type="radio"   v-model="car.engine">

          <label for="engine"Diesel>Diesel</label>

        
      </div>
      <div class="col-8">
          <div class="input-group">
             <label for="isAutomatic">Automatic</label>
            <input id="isAutomatic" name="isAutomatic" type="checkbox"   v-model="car.isAutomatic">
         
          </div>
        </div>
      <div class="form-group row">
        <div class="offset-4 col-8">
          <button name="submit" type="submit" class="btn btn-primary">Submit</button>
        </div>
      </div>
    </form>
    </div>
</template>

<script>
import {cars} from '../services/Cars'
export default {
    data() {
      return {
         car:{
         brand:'',
         model:'',
         year:'',
         maxSpeed:'',
         numberOfDoors:'',
         isAutomatic:false,
         engine:''
         } 
      }
    },
    created() {
        if (this.$route.params.id) {
          cars.get(this.$route.params.id).then(response=>
          (this.car=response.data)).catch(err => console.log(err))
        }
    },
    methods: {
        onSubmit()  {
            this.addCar();
        },

        addCar() {
            cars.add(this.car).then(response=>{this.$router.push
            ('/cars')}).catch(err=>console.log(err))
        },

        getYears() {
            let years = [];
            for (let i = 1990; i<=2018; i++) {
              years.push(i);
            }
            return years;
        }
        
    }
}
</script>