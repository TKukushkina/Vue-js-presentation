<template>
  <div class="feature d-flex flex-direction-column h-100">
    <div class="title text-aling-right">What Vue js offers</div>
    <div class="d-flex m-auto">
      <ul class="feature__list">
        <li v-for="(offer, index) in offers" v-bind:key="index">
          {{ offer }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Offers',
  data: function () {
    return {
      offers: [
        'Reactive Interfaces',
        'Declarative Rendering',
        'Data Binding',
        'Directives',
        'Template Logic',
        'Components & Nesting',
        'Event Handling',
        'Computed Properties',
        'Css Transitions and Animations',
        'Custom Filters',
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  .feature {

    &__list {
      -webkit-columns: 400px 2;
      -moz-columns: 400px 2;
      columns: 400px 2;
    }
  }
</style>

