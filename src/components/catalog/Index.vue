<template>
  <div class="catalog">
    <filters></filters>
    <items></items>
  </div>
</template>

<script>
  import Items from './Items.vue'
  import Filters from './Filters.vue'

  export default {
    name: 'catalog',
    components: {
        Items,
        Filters
    }
  }
</script>

<style>
  .catalog {
    display: flex;
  }
</style>
