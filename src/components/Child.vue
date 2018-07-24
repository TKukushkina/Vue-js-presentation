<template>
  <div class="child">
    <h3>Child component</h3>
    <p>{{ message }}</p>
  </div>
</template>

<script>
export default {
props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  .child {
    padding: 10px;
    border: 2px solid #42b983;
    border-radius: 5px;
    margin-bottom: 60px;
  }
</style>
