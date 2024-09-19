<script setup>
defineOptions({
  name: 'QuotesPage'
});

</script>



<template>
  <q-page class="bg-blue flex flex-center">
    <div class="background-image">
      <div class="content">

<q-card class="my-card q-pa-sm">
      <q-card-section class="bg-primary text-white q-pa-lg">
        <h1 class="text-h4 text-bold">
        <i class="bi bi-quote"/> 
          {{getQuotes}}
        <i class="bi bi-quote"/>         
        </h1>
        <h2 class="text-h6 text-right q-pt-md">-- {{getAuthor}}</h2>
      </q-card-section>

      <q-separator />

      <q-card-actions align="center" class="bg-dark">
        <q-btn @click="getRandomQuotes" outline style="color: goldenrod;" rounded padding="sm lg" label="Next" size="1.5rem"/>        
      </q-card-actions>
    </q-card>

      </div>
    </div>
  </q-page>
</template>





<script>
import axios from 'axios';

export default
{
    data()
    {
        return{
                getQuotes:'Life isn’t about getting and having, it’s about giving and being.',
                getAuthor:'Kevin Kruse'
        }
    },

      methods:
      {
        async getRandomQuotes()
        {
          try 
          {
            let result = await axios.get("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json");
            console.log(result.data.quotes);          

            let dataQuotes = result.data.quotes;
            let randomNum = Math.floor(Math.random() * dataQuotes.length);
            let randomQuote = dataQuotes[randomNum];

            this.getQuotes = randomQuote.quote;
            this.getAuthor = randomQuote.author;

          } catch (error) {
            console.log(error);
            
          }
        }
      }
}
</script>


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
  background-image: url('https://66.media.tumblr.com/bfb0fc23b1e7dacf2154a3430db1d119/tumblr_oaeviyDRt81vx7c7mo1_1280.jpg'); /* Path to your image */
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