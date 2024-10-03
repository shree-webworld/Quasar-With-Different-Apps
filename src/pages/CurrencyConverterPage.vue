
<script setup>
import { ref, onMounted } from 'vue';
import axios from "axios";

defineOptions({
  name: 'CurrencyConverterPage'
});
  

const getAmount = ref(1);
const getCurrency1 = ref("USD");
const getCurrency2 = ref("EUR");
const currencyOptions = ref([]);
const convertedAmount = ref("");
const showText = ref(false);
const convertedAmountDate = ref();

const fetchCurrenciesOption = async () =>{
                                            try{
                                                  const response = await axios.get("https://api.frankfurter.app/currencies");
                                                  console.log(response.data);

                                                  currencyOptions.value = Object.keys(response.data).map(currency => (
                                                                                                                        currency
                                                                                                                                                 )
                                                                                                        );
                                              }catch(error)
                                                {
                                                  console.error('Error in fetching currencies:', error);
                                                }
                                        }

const convertedCurrencyAmount = async () => {
                                                try {
                                                      const response = await axios.get(`https://api.frankfurter.app/latest?amount=${getAmount.value}&from=${getCurrency1.value}&to=${getCurrency2.value}`);
                                                      convertedAmount.value = response.data.rates[getCurrency2.value];

                                                      convertedAmountDate.value = response.data.date;
                                                      showText.value = true;                                                                                                                                                                                                                    

                                                      
                                                } catch (error) 
                                                  {
                                                    console.error('Error converting currency:', error);
                                                  } 
                                            }

onMounted(()=>{
                fetchCurrenciesOption();
              }
        );


</script>




<template>
  <q-page class="flex flex-center">
    <div class="background">  
      
      <h2 class="text-center">💲Currency Converter💶</h2>

      <h4 v-if="showText" class="text-center">
        
          <span class="text-purple-8">{{getAmount}}</span> {{getCurrency1}} = <span class="text-purple-8">{{convertedAmount}}</span> {{getCurrency2}} by {{convertedAmountDate}}
        
      </h4>
      <div class="q-gutter-lg q-mx-xl">
        <div class="row">
          <div class="col q-mr-md">
            <q-input class="text-h4 text-bold" rounded outlined type="number" v-model.number="getAmount" label="Currency" />
          </div>
          <div class="col">
            <q-select
              rounded outlined
              class="text-h4 text-bold"
              v-model="getCurrency1"
              :options="currencyOptions"
              label="From"
            />
            
          </div>
        </div>
        <div class="row">
          <div class="col q-mr-md">
            <q-input class="text-h4 text-bold text-grey-1" rounded outlined type="number" v-model.number="convertedAmount" label="Conversion"  disable bg-color="purple-5" label-color="grey-1"/>
          </div>
          <div class="col">
            <q-select
              rounded outlined
              class="text-h4 text-bold"
              v-model="getCurrency2"
              :options="currencyOptions"
              label="To"
            />
          </div>
        </div>
      </div>

      <div class="q-mt-xl text-center">
        <q-btn label="Convert" color="purple-5" rounded icon="currency_exchange" class="q-pa-md text-h5 text-bold glossy" @click="convertedCurrencyAmount" />
      </div>
    </div>
  </q-page>
</template>



<style scoped>

@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css");
@import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');

.background{
  position: absolute;
  top: 0;
  left: 0; 
  width: 100%;
  height: 100%;
}

</style>

