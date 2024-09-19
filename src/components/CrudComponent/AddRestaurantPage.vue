<script setup>
defineOptions({
  name: 'AddRestaurantPage'
});

</script>



<template>
  <q-page class="bg-red-2 flex flex-center">
    <div class="">
      <div class="content">
<q-card class="my-card q-pa-md">
      <q-card-section class="bg-deep-orange-10 text-white q-pa-lg">
        <h1 class="text-center text-h4">Add Restaurant</h1>
        <div class="q-mx-xl q-mt-xl">
          <q-input outlined v-model="restaurant.name" label="Restaurant Name" bg-color="white" class="q-pb-lg"/>
          <q-input outlined v-model="restaurant.address" label="Restaurant Address" bg-color="white"/>
          <q-btn @:click="onAddRestaurant" color="primary" icon="add_circle" label="Add Restaurant" class="q-my-xl q-py-md"/>

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
        methods:
        {
            async onAddRestaurant()
            {
                let result = await axios.post("http://localhost:3000/add_restaurant",{
                                                restaurantName:this.restaurant.name,
                                                restaurantAddress:this.restaurant.address,

                });
                console.log(result);
                if (result.status == 200)
                {
                    alert("Restaurant added successfully");
                    this.$router.push('/crud_restaurant');
                }
                
            }
        }
}
</script>



<style scoped>

@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');


/* Centering text inside the background image */
.content {
  text-align: center;
  color: #fff; /* Text color for contrast */
}

h1 {
      font-family: "Raleway", sans-serif;
      margin: 0;
}

h2 {
    font-family: "Raleway", sans-serif;

}
</style>