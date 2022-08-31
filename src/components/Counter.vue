<template>
  <h1>Counter</h1>

  <div class="card">
    <div class="body" :class="{ odd: (count % 2 === 0)  }">
      {{ count }}
    </div>
    <div class="actions">
      <button @click="count--">-</button>
      <button @click="increment()">+</button>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'CounterComponent',
    data: function () {
      return {
        count: 0
      }
    },
    methods: {
      increment() {
      //  this.count = this.count + 1 ;
        this.count++;
      },
      decrement() {
        this.count--;
      }
    }
  }
</script>

<style scoped>

.card {
  margin: 50px auto;
  border: solid gray 1px;
  box-shadow: darkgray 2px 2px;
  width: fit-content;
  border-radius: 5px;
  overflow: hidden;
}

.body {
  padding: 50px;
  color: #db995a ;
}

.body.odd {
  color: #1bc980;
}

.actions button {
  display: inline-block;
  width: 50%;
  padding: 10px 0;
  font-size: 1.2em;
  transition: .3s;
  border-radius: 0;
  background: white;
  border: none;
}

.actions button:hover {
  color: white;
  background: black;
}

</style>