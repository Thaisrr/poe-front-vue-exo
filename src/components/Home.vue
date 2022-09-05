<template>
  <h1>Accueil</h1>

  <CartComponent :cart="cart" @remove="removeFromCart"/>

  <div class="btn-container">
    <button @click="changeFilter('none')">Tous</button>
    <button  @click="changeFilter('tomato')">Base Tomate</button>
    <button  @click="changeFilter('cream')">Base Crème</button>
  </div>
  <div class="grid">
      <PizzaComponent v-for="pizza of filtered_pizzas" :key="pizza.id" :piz="pizza" @addCart="addToCart"/>
  </div>
</template>

<script>
  import PizzaComponent from "@/components/Pizza";
  import CartComponent from "@/components/Cart";
  export default {
    name: 'HomeComponent',
    components: {CartComponent, PizzaComponent},
    data: function () {
      return {
        pizzas : [
          {id: 0, base: 'tomato', name: 'Regina', image: require('../assets/pizzas/royale.jpg'), ingredients: ['sauce tomate', 'jambon', 'mozzarella' ], price: 12},
          {id: 1, base: 'tomato', name: 'Hawaï',image: require('../assets/pizzas/-hawai.jpeg.webp'), ingredients: ['sauce tomate', 'ananas', 'poulet', 'mozzarella' ], price: 12},
          {id: 2, base: 'cream', name: 'Chevre',image: require('../assets/pizzas/chevre.jpg'), ingredients: ['creme', 'chevre', 'miel' ], price: 12},
          {id: 3, base: 'cream', name: 'Fromagère',image: require('../assets/pizzas/fromages.jpg'), ingredients: ['creme', 'chevre', 'raclette', 'maroille' ], price: 12},
          {id: 4, base: 'tomato', name: 'Margarita',image: 'https://lilleaddict.fr/wordpress/wp-content/uploads/2020/09/pizzeria-da-Michele-Napoli-Forcella-ricetta-margherita-840x400.jpg', ingredients: ['creme', 'chevre', 'raclette', 'maroille' ], price: 12},
        ],
        cart: [],
        filter_value: 'none'
      }
    },
    methods: {
      addToCart(pizza) {
        const index = this.cart.findIndex(item => item.name === pizza.name);
        if(index === -1) {
          this.cart.push({name: pizza.name, price: pizza.price, quantity: 1})
        } else {
          const update_item = this.cart[index];
          update_item.quantity++;
          update_item.price = pizza.price * update_item.quantity;
        }
      },
      removeFromCart(item) {
        const index = this.cart.indexOf(item);
        if(index > -1) {
          this.cart.splice(index, 1)
        }
      },
      changeFilter(value) {
        this.filter_value = value;
      }
    },
    computed: {
      filtered_pizzas: function () {
        if(this.filter_value === 'none') {
          return this.pizzas;
        }
        return this.pizzas.filter((piz) => piz.base === this.filter_value)
      }
    },
    watch: {
      filter: function () {
        console.log('Filter a été modifié')
      }
    }
  }
</script>

<style>

.grid {
  width: 80%;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
}

.card {
  height: 450px;
  border: solid black 1px;
  border-radius: 8px;
  box-shadow: 2px 2px black;
  overflow: hidden;
}

.c_image {
  height: 50%;
  overflow: hidden;
}

img {
  width: 100%;
}

.tab span {
  border-radius: 50px;
  background: rgba(219, 153, 90, 0.25);
  margin: 2px ;
  padding: 3px 2px;
}

</style>