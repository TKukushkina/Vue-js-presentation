<template>
  <div>
    <div class="title">Events</div>
    <button class="btn" v-on:click = "sum">Click me</button>
    <p class="mt-3"> Add Number 100 + 200 = {{total}}</p>
    <img class="mt-3" src="../assets/click.png" alt="">
    <h3 class="mt-6">Event Modifiers</h3>
    <ul>
      <li v-for="item in modificators" v-bind:key="item">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num1: 100,
      num2: 200,
      total: "",
      modificators: [
        ".stop",
        ".prevent",
        ".capture",
        ".self",
        ".once",
        ".passive"
      ]
    };
  },
  methods: {
    sum: function(event) {
      console.log(event);
      return (this.total = this.num1 + this.num2);
    }
  }
};
</script>

<style lang="scss" scoped>

li {
  padding-left: 20px;
  &:before {
    left: -20px;
  }
}
</style>

