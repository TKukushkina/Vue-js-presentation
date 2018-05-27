<template>
  <div id="message">
    <div class="title">Simple example</div>
    <p>{{ message }}</p>
    <img class="mt-3" src="../assets/message.png" alt="">
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      message: 'Hello Vue.js!'
    }
  }
}
</script>

