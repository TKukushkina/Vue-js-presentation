<template>
  <div class="wrapper">
    <div class="title">Transitions & Animation</div>
    <iframe height='500' scrolling='no' title='VueJS transition & transition-group demo' src='//codepen.io/udyux/embed/EwwPgr/?height=265&theme-id=0&default-tab=result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/udyux/pen/EwwPgr/'>VueJS transition & transition-group demo</a> by Nicolas Udy (<a href='https://codepen.io/udyux'>@udyux</a>) on <a href='https://codepen.io'>CodePen</a>.
    </iframe>
    <button class='btn mt-6' v-on:click="toggle">😋</button>
    <transition name="bounce">
      <p v-if="show">The end</p>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  methods: {
    toggle() {
      return this.show = !this.show;
    }
  }
}
</script>

<style lang="scss" scoped>
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }

  .wrapper {
    overflow-x: hidden;
    min-height: 974px;
  }

  p {
    margin: 50px auto;
    font-weight: bold;
    font-size: 48px;
    text-align: center;
    min-height: 55px;
  }
</style>


