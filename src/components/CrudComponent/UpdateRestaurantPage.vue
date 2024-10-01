<script setup>
defineOptions({
  name: 'UpdateRestaurantPage'
});

</script>



<template>

  <q-page class="bg-red-2 flex flex-center">

    <div class="">

      <div class="">

<q-card class="my-card q-pa-md">

      <q-card-section class="bg-deep-orange-10 text-white q-pa-lg">

        <h1 class="text-center text-h4">Update Restaurant</h1>

        <div class="q-mx-xl q-mt-xl">

          <q-input outlined v-model="restaurant.name" label="Restaurant Name" bg-color="white" class="q-pb-lg"/>

          <q-input outlined v-model="restaurant.address" label="Restaurant Address" bg-color="white"/>

          <q-btn @:click="onUpdateRestaurant" color="secondary" icon="update" label="Update Restaurant" class="q-my-xl q-py-md"/>




        </div>




      </q-card-section>




    </q-card>




      </div>

    </div>

  </q-page>

</template>




















  <script>

  import axios from "axios";

  

  

  export default {

          data()

          {

              return{

                  restaurant:{

                      name:'',

                      address:''

                  }

              }

          },

          async mounted()

          {  

              try {

                  let result = await axios.get("http://localhost:3000/get_restaurant_by_id/"+this.$route.params.id);

                  console.log(result);

                  

                  this.restaurant.name = result.data.restaurantName;

                  this.restaurant.address = result.data.restaurantAddress;

                

              } catch (error) {

                  console.log(error);

                                

              }                

          },

          methods:

          {

            async onUpdateRestaurant()

            {

                // console.log(this.restaurant);

  

                  let updatedResult = await axios.put("http://localhost:3000/update_restaurant/"+this.$route.params.id,{

                                                  restaurantName:this.restaurant.name,

                                                  restaurantAddress:this.restaurant.address,

  

                  });

                  console.log(updatedResult.data);

                  if (updatedResult.status == 200)

                  {

                      this.$router.push('/crud_restaurant');

                      alert("Restaurant updated successfully");

                  }

                  

            }

          },

  }

  </script>
