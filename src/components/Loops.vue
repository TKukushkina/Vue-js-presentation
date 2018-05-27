<template>
  <div class="loop">
    <div class="title">Loops</div>
    <ul class="list">
      <li v-for="friend in friends" v-bind:key="friend.id">{{ friend.name }}</li>
    </ul>
    <div class="loop__img mt-3">
      <img src="../assets/loop.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      "friends": [
        {
          "id": 0,
          "name": "Eva Stuart"
        },
        {
          "id": 1,
          "name": "Mariana Tillman"
        },
        {
          "id": 2,
          "name": "Corrine Dejesus"
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .loop {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>
