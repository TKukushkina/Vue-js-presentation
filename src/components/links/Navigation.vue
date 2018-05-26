<template>
  <nav>
    <div class="logo">
      <img src="../../assets/logo.png">
    </div>
    <router-link to="/">Vue js</router-link>
    <router-link to="/history">History</router-link>
    <router-link to="/statistics">Statistics</router-link>
    <router-link to="/features">Features</router-link>
  </nav>
</template>

<script>
  export default {
    name: 'navigation'
  }
</script>

<style scoped src='./Navigation.css'></style>
