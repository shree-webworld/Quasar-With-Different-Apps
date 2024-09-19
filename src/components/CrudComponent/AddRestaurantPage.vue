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
      <q-card-section class="bg-orange-10 text-white q-pa-lg">
        <h1 class="text-center text-h4 q-pb-md">Add Restaurant</h1>
        <div class="q-mx-xl">
          <q-input outlined v-model="text" label="Restaurant Name" bg-color="white" class="q-pb-lg"/>
          <q-input outlined v-model="text" label="Restaurant Address" bg-color="white"/>
          <q-btn color="primary" label="Add" class="q-my-xl q-px-xl"/>
        </div>

      </q-card-section>

    </q-card>

      </div>
    </div>
  </q-page>
</template>


<style scoped>

@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

/* Full-screen background image styling */
.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('https://unsplash.imgix.net/photo-1422405153578-4bd676b19036?fit=crop&fm=jpg&h=700&q=75&w=1050'); /* Path to your image */
  background-size: cover; /* Cover the entire screen */
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Prevent repeating the image */
  display: flex;
  align-items: center;
  justify-content: center;
}

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