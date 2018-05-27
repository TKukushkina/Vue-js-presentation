<template>
  <div class="conditions">
    <div class="title mb-6">Conditions</div>
    <input type="checkbox" v-model="checked">
    <p v-if="checked">The checkbox is checked</p>
    <p v-else>The checkbox is not checked</p>
    <img class="mt-3" src="../assets/condition.png" alt="">
    <div class="show mt-6">
      <label>
        <input type="checkbox" v-model="display">
        Toggle css
      </label>
      <p v-show="display">I'm always here, but sometimes you don't see me because of css</p>
      <img class="mt-3" src="../assets/show.png" alt="">
    </div>  
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: false,
      display: false
    }
  }
}
</script>

<style lang="scss" scoped>
  label {
    cursor: pointer;
  }
  input[type="checkbox"] {
    position: relative;
    margin-bottom: 0;
    margin-right: 8px;
    margin-top: 2px;
    width: 13px;
    height: 13px;
    cursor: pointer;
    outline: none;
  }
  input[type="checkbox"]:before {
    content: "";
    display: block;
    position: relative;
    top: -2px;
    left: -2px;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #ffffff;
    border: 1px solid #35495e;
  }
  input[type="checkbox"]:checked:before {
    content: "";
    border-radius: 50%;
    background: #41b883;
    border: 1px solid #dadada;
  }

  .show {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
</style>

