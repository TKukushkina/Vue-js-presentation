<template>
  <div class="statictics">
    <div class="title text-aling-right">Statistics</div>
    <div class="section mb-6">
      <h3>Statistics 2017</h3>
      <div class="statictics__img">
        <img src="../assets/statistics/2017.png" alt="">
      </div>
    </div>
    <div class="section">
      <h3>Npm stats</h3>
      <div class="statictics__img">
        <img src="../assets/statistics/npm.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Statistics',
}
</script>

<style lang="scss" scoped>
  .statictics {

    &__img {
      height: calc(100% - 75px);
      margin: auto;
    }

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
</style>
