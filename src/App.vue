<template>
  <div id="app">
    <navigation></navigation>
    <div class="main">
      <router-view>    
      </router-view>
      <div class="stripes">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
  import navigation from './components/links/Navigation.vue';
  
  export default {
    name: 'app',
    components: {
      navigation,
    }
  }
</script>

<style lang="scss">
  @font-face {
    font-family: Fira;
    font-weight: 500;
    src: url("./assets/fonts/FiraSansMedium.woff");
  }

  @font-face {
    font-family: Proxima;
    font-weight: normal;
    src: url("./assets/fonts/ProximaNovaRegular.woff");
  }

  @font-face {
    font-family: Proxima;
    font-weight: normal;
    font-style: italic;
    src: url("./assets/fonts/ProximaNovaRegularItalic.woff");
  }
  
  @font-face {
    font-family: Proxima;
    font-weight: 600;
    src: url("./assets/fonts/ProximaNovaBold.woff");
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: Proxima, sans-serif;
    color: #313131;
    font-size: 22px;
    line-height: 1.5;
  }

  h3 {
    margin-top: 20px;
    margin-bottom: 20px;
    font-size: 36px;
    font-family: Fira;
    font-weight: 500;
  }

  a {
    color: #42b983;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    height: 46px;
    text-decoration: none;
    font-size: 14px;
    text-transform: uppercase;
    color: #ffffff;
    padding: 0 52px;
    border-radius: 5px;
    border: none;
    background-color: #42b983;
    cursor: pointer;
    outline: none;
  }

  .d-flex {
    display: flex;
  }

  .d-inline-block {
    display: inline-block;
  }

  .flex-direction-column {
    flex-direction: column;
  }

  .justify-content-center {
    justify-content: center;
  }

  .h-100 {
    height: 100%;
  }

  #app {
    display: flex;
  }

  .section {
    width: 100%;
    height: 100vh;
  }

  .main {
    position: relative;
    flex-grow: 1;
    width: calc(100% - 270px);
    height: 100vh;
    overflow: auto;

    & > div {
      position: absolute;
      top: 0px;
      left: 0px;
      right: 0px;
      width: 100%;
      padding: 50px;
    }

    .stripes {
      position: fixed;
      left: 270px;
      padding: 0 65px 0px 50px;
      display: flex;
      justify-content: space-between;
      width: calc(100% - 270px);
      height: 100%;
      pointer-events: none;
      z-index: -1;

      & > div {
        width: 1px;
        height: 100%;
        background-color: #f1f1f1;
      }
    }
  }

  .title {
    margin-bottom: 20px;
    font-family: Fira;
    font-size: 44px;
    font-weight: 500;
    text-transform: uppercase;
    text-align: right;
  }

  .input {
    border: 0;
    border-bottom: 2px solid #313131;
    line-height: 24px;
    outline: none;
    padding-left: 10px;
    width: 100px;
    font-size: 16px;
    color: #313131;
  }

  .bold {
    font-weight: bold;
  }

  .italic {
    font-style: italic;
  }

  .text-aling-right {
    text-align: right;
  }

  .m-auto {
    margin: auto;
  }

  .mx-auto {
    margin-left: auto;
    margin-right: auto;
  }

  ul {
    list-style: none;

    li {
      margin-top: 5px;
      margin-bottom: 5px;

      &:before {
        content: '';
        position: relative;
        top: -3px;
        left: -5px;
        display: inline-block;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #41b883;
      }
    }
  }

  .mt-3 {
    margin-top: 30px;
  }

  .mt-6 {
    margin-top: 60px;
  }

  .mb-3 {
    margin-bottom: 30px;
  }

  .mb-6 {
    margin-bottom: 60px;
  }
</style>
