<template>
  <div>
    <div class="title">Components</div>
    <Child message="message from parent component"/>
    <h3>Parent</h3>
    <img class="mt-3 mb-3" src="../assets/parent.png" alt="">
    <h3>Child</h3>
    <img class="mt-3 mb-3" src="../assets/child.png" alt="">
  </div>
</template>

<script>
import Child from './Child.vue';
export default {
  components: {
		Child
	},
}
</script>

