<template>
  <div  class="card">
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
        <button @click="cartEvent()">ACHETER !!!!!!!</button>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PizzaComponent",
  props: {
    piz: Object
  },
  methods: {
    cartEvent: function () {
      this.$emit('addCart', this.piz);
      console.log(`Evenement 'addCart' envoyé avec la valeur ${this.piz.name}`)
    }
  }
}
</script>

<style scoped>

</style>