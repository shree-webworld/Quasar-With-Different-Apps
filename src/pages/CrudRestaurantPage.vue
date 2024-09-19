<script setup>
defineOptions({
  name: 'CrudRestaurantPage'
});

</script>


<template>
  <div>
        <h1 class="text-center text-h4 q-pb-md">CRUD Restaurant App</h1>

    <table class="table-responsive">
      <caption style="caption-side:right ">
        <RouterLink to="/crud_restaurant/add_restaurant" className="">
          <q-btn color="primary" icon="add_circle" label="Add Restaurant" class="q-mb-lg"/>
        </RouterLink>
      </caption>
      <thead>
      <tr>
        <th>Id</th>
        <th>Restaurant Name</th>
        <th>Restaurant Address</th>
        <th>Update Restaurant</th>
        <th>Delete Restaurant</th>
      </tr>
      </thead>

    <tbody>
      <tr v-for="item in restaurants" :key="item.id" className="">
        <th>{{item.id}}</th>
        <td>{{item.restaurantName}}</td>
        <td>{{item.restaurantAddress}}</td>
        <td>
          <RouterLink to="/crud_restaurant/add_restaurant" className="">
          <q-btn color="green" icon="update" round />          
          </RouterLink>
        </td>
        <td>
          <q-btn @:click="deleteById(item.id)" color="red" icon="delete_forever" round />
          <!-- <button @:click="deleteById(item.id)" className="">
            Delete
          </button> -->
        </td>
      </tr>
    </tbody>

    </table>
  </div>
</template>


<!--<template>
  <div>

<div className="">
  <q-table className="">
    <thead>
      <tr>
        <th>Id</th>
        <th>Restaurant Name</th>
        <th>Restaurant Address</th>
        <th>Update Restaurant</th>
        <th>Delete Restaurant</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in restaurants" :key="item.id" className="">
        <th>{{item.id}}</th>
        <td>{{item.restaurantName}}</td>
        <td>{{item.restaurantAddress}}</td>
        <td>
          <RouterLink to="/" className="">
          Update
          </RouterLink>
        </td>
        <td>
          <button @:click="deleteById(item.id)" className="">
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </q-table>
</div>

  </div>
</template>-->


<script>
import axios from 'axios';


export default {
        data()
        {
            return{                
                restaurants:[]
            }
        },
        methods:
        {
            async deleteById(id)
            {
              let result = await axios.delete("http://localhost:3000/delete_restaurant/"+id);
              if (result.status == 200) 
              {
                alert(`id : ${id} deleted successfully`);
                location.reload();
              }
            }
        },
        async mounted()
        {
            let restaurant_result = await axios.get("http://localhost:3000/get_restaurant");
            console.log(restaurant_result);
            
            this.restaurants = restaurant_result.data;
        }
}
</script>


<style scoped>
body {
    font-family: Arial, sans-serif;
    margin: 20px;
}

.table-responsive {
    overflow-x: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
}

th, td {
    padding: 12px;
    border: 1px solid #ddd;
    text-align: left;
}

th {
    background-color: #f2f2f2;
}

@media (max-width: 600px) {
    table, thead, tbody, th, td, tr {
        display: block;
    }

    th, td {
        box-sizing: border-box;
        width: 100%;
    }

    tr {
        margin-bottom: 15px;
    }
}

</style>