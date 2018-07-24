<template>
  <div>
    <div class="title">Forms</div>
    <h3 class="mt-6">Input bindings</h3>
    <input class="input" v-model="text" placeholder="text">
    <p class="mt-6">Text: {{ text }}</p>
    <img class="mt-3" src="../assets/input.png" alt="">
    <h3 class="mt-6">Modificators</h3>
    <ul>
      <li v-for="item in modificators" v-bind:key="item">{{item}}</li>
    </ul>
    <h3 class="mt-6">Filters</h3>
    <input class="input" v-model="filter" placeholder="filter">
    <p class="mt-6">Text: {{ filter | uppercase | onlyWord }}</p>
    <img class="mt-3" src="../assets/filters.png" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      filter: '',
      modificators: ['.lazy', '.number', '.trim']
    }
  },
  filters: {
    uppercase(value) {
      return value.toUpperCase()
    },
    onlyWord(value) {
      return value.replace(/\W/g, '')
    }
  }
}
</script>

<style lang="scss" scoped>
  li {
    padding-left: 20px;
    &:before {
      left: -20px;
    }
  }
</style>

