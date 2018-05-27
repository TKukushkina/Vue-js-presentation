<template>
  <div class="interpolation">
    <div class="title mb-6">Interpolation</div>
    <h3 class="mt-6">Arguments</h3>
    <a v-bind:href="url" target="_blank">https://vuejs.org</a>
  </div>
</template>

<script>
export default {
  name: 'Interpolation',
  data: function() {
    return {
      url: "https://vuejs.org",
    }
  }
}
</script>

