<template>
  <div>
   <form @submit.prevent="onSubmit()">
     <ul>
         <li class="list-group-item-danger" v-for="(error, key) in errors" :key = "key">
             {{error}}
         </li>
     </ul>
      <div class="form-group row">
        <label for="brand" class="col-4 col-form-label">Brand</label>
        <div class="col-8">
          <div class="input-group">
            <input id="brand" name="brand" type="text" class="form-control here" v-model="car.brand">
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="model" class="col-4 col-form-label">Model</label>
        <div class="col-8">
          <div class="input-group">
            <input id="model" name="model" type="text" class="form-control here" v-model="car.model">
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="year" class="col-4 col-form-label">Year</label>
        <div class="col-8">
          <select id="year" name="year" type="number" class="form-control here" v-model="car.year">
              <option selected value="">
                   Select year
              </option>
              <option   v-for="(year, key) in getYears()" :key="key" :value="year">
                  {{year}}
              </option>
          </select>
        </div>
      </div>
      <div class="form-group row">
        <label for="maxSpeed" class="col-4 col-form-label">Maximum speed</label>
        <div class="col-8">
          <div class="input-group">
            <input id="maxSpeed" name="maxSpeed" type="number" class="form-control here" v-model="car.maxSpeed">
          </div>
        </div>
      </div>
      <div class="form-group row">
        <label for="numberOfDoors" class="col-4 col-form-label">Number of doors</label>
        <div class="col-8">
          <div class="input-group">
            <input id="numberOfDoors" name="numberOfDoors" type="number" class="form-control here" v-model="car.numberOfDoors">
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
        <div>
          <button name="submit" type="submit" class="btn btn-success">Submit</button>
        </div>
        <div>
          <button name="reset" type="reset" class="btn btn-danger">Reset</button>
        </div>
        <div>
          <button name="button" type="button" @click="getPreview()" class="btn btn-primary">Preview</button>
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
         },
         errors:[],
      }
    },
    created() {
        if (this.$route.params.id) {
          cars.get(this.$route.params.id).then(response=>
          (this.car=response.data)).catch(err => console.log(err))
        }
    },
    methods: {        
        validated() {
           let result = true;
           if (!this.car.brand) {
               this.errors.push('Brand field is required');
               result = false;
           }
           else if (this.car.brand.length<2) {
               this.errors.push('Brand must have at least 2 characters');   
               result = false;
           }
               
           if (!this.car.model) {
               this.errors.push('Model field is required');
               result = false;     
           }
           else if (this.car.model.length<2) {
               this.errors.push('Model mush have at least 2 characters');
               result = false;  
           }
               
           if(!this.car.year) {
               this.errors.push('You must select year');
               result = false;      
           }
               
           if(!this.car.numberOfDoors) {
               this.errors.push('Number of doors field is required');
               result = false;     
           }
               
           if(!this.car.engine) {
               this.errors.push('You must select engine');
               result = false;
           }
           return result;
        },
        
        onSubmit()  {
            this.errors = [];
            if (this.validated())  {
               this.$route.params.id ? this.editCar() : this.addCar();
            }
         
        },

        addCar() {
            cars.add(this.car).then(response=>{this.$router.push
            ('/cars')}).catch(err=>console.log(err))
        },
        
         editCar () {
            cars.edit(this.car)
            .then(() => {
            this.$router.push('/cars').catch(err=>console.log(err))
        })
    },

        getYears() {
            let years = [];
            for (let i = 1990; i<=2018; i++) {
              years.push(i);
            }
            return years;
        },

        getPreview() {
            let brand = this.car.brand;
            let model = this.car.model;
            let year = this.car.year;
            let maxSpeed = this.car.maxSpeed;
            let numberOfDoors = this.car.numberOfDoors;
            let engine = this.car.engine;
            let isAutomatic = this.car.isAutomatic;
            alert("Brand:" + brand + '\n' + "Model:" + model+ '\n'+ "Year:" + year+'\n'+ "naxSpeed:" + maxSpeed + '\n'
            + "Number of doors:" + numberOfDoors +'\n' + "Engine:" + engine +'\n' + "Automatic:" + isAutomatic +'\n');

        }
        
    }
}
</script>