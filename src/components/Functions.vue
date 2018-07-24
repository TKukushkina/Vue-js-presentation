<template>
  <div>
    <div class="title">Functions</div>
    <h3>Computed Properties</h3>
    <div>{{ getfullnameComputed }}</div>
    <img class="mt-3" src="../assets/computed.png" alt="">
    <h3 class="mt-6">Methods</h3>
    <div>{{ getfullnameMethod() }}</div>
    <img class="mt-3" src="../assets/methods.png" alt="">
    <h3 class="mt-6">Watchers</h3>
    <div id = "computed_props">
      Kilometers : <input class="input" type = "text" v-model = "kilometers">
      Meters : <input class="input" type = "text" v-model = "meters">
    </div>
    <img class="mt-3" src="../assets/watchers.png" alt="">
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "FirstName",
      secondName: "SecondName",
      kilometers: 0,
      meters: 0
    };
  },
  computed: {
    getfullnameComputed() {
      return this.firstName + " " + this.secondName;
    }
  },
  methods: {
    getfullnameMethod() {
      return this.firstName + " " + this.secondName;
    }
  },
  watch: {
    kilometers: function(val) {
      this.kilometers = val;
      this.meters = val * 1000;
    },
    meters: function(val) {
      this.kilometers = val / 1000;
      this.meters = val;
    }
  }
};
</script>

