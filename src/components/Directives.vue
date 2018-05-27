<template>
  <div class="directives h-100">
    <div class="title">Directives</div>
    <p class="m-auto" v-html='text'></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: "<span class='bold'>Directives</span> are instruction for VueJS to do things in a certain way. There are a lot of directives such as v-if, v-show, v-else, v-for, v-bind , v-model, v-on, etc."
    }
  }
}
</script>

<style lang="scss" scoped>
  .directives {
    display: flex;
    flex-direction: column;

    p {
      max-width: 600px;
      font-size: 28px;
    }
  }
</style>
