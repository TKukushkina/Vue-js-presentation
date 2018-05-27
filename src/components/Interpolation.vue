<template>
  <div class="interpolation">
    <div class="title mb-6">Interpolation</div>
    <h3>Text interpolation using the "Mustache" syntax</h3>
    <p>{{ text }}</p>
    <img class='mt-3' src="../assets/interpolation/text.png" alt="">
    <h3 class="mt-6">Using mustaches:</h3>
    <p>{{ tag }}</p>
    <img class='mt-3' src="../assets/interpolation/error.png" alt="">
    <h3 class="mt-6">Real HTML</h3>
    <p v-html='tag'></p>
    <img class='mt-3' src="../assets/interpolation/tag.png" alt="">
    <h3 class="mt-6">Nothing will change inside v-once directive</h3>
    <p v-once>{{ once }}</p>
    <img class='mt-3' src="../assets/interpolation/once.png" alt="">
    <h3 class="mt-6">Using JavaScript Expressions</h3>
    <p>{{counter + 1}}</p>
    <img class='mt-3' src="../assets/interpolation/js-expression.png" alt="">
    <h3 class="mt-6">Arguments</h3>
    <a class="d-flex" v-bind:href="url" target="_blank">https://vuejs.org</a>
    <img class='mt-3' src="../assets/interpolation/url.png" alt="">
  </div>
</template>

<script>
export default {
  name: 'Interpolation',
  data: function() {
    return {
      text: "I'm just text inside {{ }}",
      tag: "<span>I don't want you to see my HTML tag</span>",
      once: "This will never change. The same for children",
      counter: 9,
      url: "https://vuejs.org",
    }
  }
}
</script>

<style lang="scss" scoped>
  .interpolation {
    h3, img {
      max-width: 600px;
    }
  }
</style>

