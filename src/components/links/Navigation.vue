<template>
  <nav>
    <div class='mb-6'>
      <div class="logo">
        <img src="../../assets/logo.png">
      </div>
      <router-link to="/">Vue js</router-link>
      <router-link to="/history">History</router-link>
      <router-link to="/statistics">Statistics</router-link>
      <router-link to="/features">Features</router-link>
      <router-link to="/simple">Simple example</router-link>
      <router-link to="/interpolation">Interpolation</router-link>
      <router-link to="/directives">Directives</router-link>
      <router-link to="/loops">Loops</router-link>
      <router-link to="/conditions">Conditions</router-link>
      <router-link to="/styles">Styles</router-link>
      <router-link to="/functions">Functions</router-link>
      <router-link to="/events">Events</router-link>
      <router-link to="/forms">Forms</router-link>
      <router-link to="/components">Components</router-link>
      <router-link to="/transition">Transition & Animation</router-link>
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'navigation'
  }
</script>

<style scoped src='./Navigation.css'></style>
