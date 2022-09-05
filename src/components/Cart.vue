<template>
  <h2>Panier</h2>
  <table>
    <thead>
      <tr>
        <th>Nom</th>
        <th>Quantité</th>
        <th>Prix</th>
        <th>Supprimer</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item of cart" :key="item.name">
        <td>{{item.name}}</td>
        <td>{{item.quantity}}</td>
        <td>{{item.price}}</td>
        <td>
          <button @click="deleteItem(item)">Supprimer</button>
        </td>
      </tr>
    </tbody>
  </table>

</template>

<script>
export default {
  name: "CartComponent",
  emits: ['remove'],
  props: {
    cart: Array
  },
  methods: {
    deleteItem(item) {
      this.$emit('remove', item)
    }
  }
}
</script>

<style scoped>

</style>