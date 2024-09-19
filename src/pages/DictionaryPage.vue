<script setup>
defineOptions({
  name: 'DictionaryPage'
});

</script>



<template>
  <q-page class="bg-blue flex flex-center">
    <div class="background-image">
      <div class="content">
<q-card class="my-card q-pa-md">
      <q-card-section class="bg-orange-10 text-white q-pa-lg">
        <h1 class="text-center text-h4 q-pb-md">The Dictionary App</h1>

          <q-input @keyup.enter="getMeanings" rounded outlined v-model="getInput" autofocus label-color="white" label="Enter the word and press enter" bg-color="green-10" class="text-h5 text-orange-5 q-pa-lg text-center text-bold">
            <template v-slot:append>
              <q-icon name="search" color="white"/>
            </template>
          </q-input>        
        <h2 class="text-h5 text-left q-pt-md text-capitalize text-bold">
          Word : {{theWordIs}}

        <q-badge color="purple" align="top">
          {{thePartOfSpeechIs}}
        </q-badge>

        </h2>
            
        <h2 class="text-h6 text-left text-capitalize">
            Meaning : {{theMeaningIs}}
        </h2>

        <h2 class="text-h6 text-left text-capitalize">
            Meaning2 : {{theMeaning2Is}}
        </h2>


        <h2 class="text-h6 text-left text-capitalize">
            example : {{theExampleIs}}
        </h2>


      </q-card-section>

    </q-card>

      </div>
    </div>
  </q-page>
</template>




<script>
import axios from 'axios';


export default {

      data()
      {
          return{
                  getInput : "",
                  theWordIs: null,
                  thePartOfSpeechIs: null,
                  theMeaningIs: null,
                  theMeaning2Is: null,
                  theExampleIs: null
          }
      },
      methods:
      {
        async getMeanings()
        {
          try 
          {
            let result = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${this.getInput}`);
            console.log(result.data);          

            this.theWordIs = result.data[0]?.word;
            this.thePartOfSpeechIs = result.data[0]?.meanings[0]?.partOfSpeech;
            this.theMeaningIs = result.data[0]?.meanings[0]?.definitions[0]?.definition;
            this.theMeaning2Is = result.data[0]?.meanings[0]?.definitions[1]?.definition;
            this.theExampleIs = result.data[0]?.meanings[0]?.definitions[0]?.example;
            

          } catch (error) {
            console.log(error);
            alert("This word meaning is not available or confirm whether input textbox is not empty!!!")            
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