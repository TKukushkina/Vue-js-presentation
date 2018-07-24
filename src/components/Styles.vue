<template>
  <div>
    <div class="title">Class and Style bindings</div>
    <div v-bind:class="{red: isRed}">Is the color red?</div>
    <img class="mt-3" src="../assets/conditional-class.png" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRed: true,
    }
  }
}
</script>

<style lang="scss" scoped>
  .red {
    color: red;
  }
</style>
