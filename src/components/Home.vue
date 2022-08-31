<template>
  <h1>Accueil</h1>

  <div class="grid">
    <div v-for="piz of pizzas" :key="piz.id" class="card">
      <div class="c_image">
        <img :src="piz.image" :alt="piz.name">
      </div>
      <div class="c_body">
        <h3>{{piz.name}}</h3>
        <p>{{piz.price}}€</p>
        <p class="tab">
          <span v-for="i of piz.ingredients" :key="piz.id + i">{{i}}</span>
        </p>
        <p>
          <button>ACHETER !!!!!!!</button>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomeComponent',
    data: function () {
      return {
        pizzas : [
          {id: 0, name: 'Regina', image: require('../assets/pizzas/royale.jpg'), ingredients: ['sauce tomate', 'jambon', 'mozzarella' ], price: 12},
          {id: 1, name: 'Hawaï',image: require('../assets/pizzas/-hawai.jpeg.webp'), ingredients: ['sauce tomate', 'ananas', 'poulet', 'mozzarella' ], price: 12},
          {id: 2, name: 'Chevre',image: require('../assets/pizzas/chevre.jpg'), ingredients: ['creme', 'chevre', 'miel' ], price: 12},
          {id: 3, name: 'Fromagère',image: require('../assets/pizzas/fromages.jpg'), ingredients: ['creme', 'chevre', 'raclette', 'maroille' ], price: 12},
          {id: 4, name: 'Margarita',image: 'https://lilleaddict.fr/wordpress/wp-content/uploads/2020/09/pizzeria-da-Michele-Napoli-Forcella-ricetta-margherita-840x400.jpg', ingredients: ['creme', 'chevre', 'raclette', 'maroille' ], price: 12},
        ]
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