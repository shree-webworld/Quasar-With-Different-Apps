

const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/quotes', component: () => import('pages/QuotesPage.vue') },
      { path: '/dictionary', component: () => import('pages/DictionaryPage.vue') },
      { path: '/crud_restaurant', component: () => import('pages/CrudRestaurantPage.vue') },
      { path: '/crud_restaurant/add_restaurant', component: () => import('components/CrudComponent/AddRestaurantPage.vue') },
      { path: '/crud_restaurant/update_restaurant/:id', component: () => import('components/CrudComponent/UpdateRestaurantPage.vue') },
      { path: '/currency_converter', component: () => import('pages/CurrencyConverterPage.vue') },


    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
