<template>
  <div class="filters">
    <h4>Filters</h4>
    <ul class="filters-list">
      <li class="filters-list__item">
        <select v-model="selected">
          <option disabled value="">Сортировать по:</option>
          <option value="name">Наименованию</option>
          <option value="price">Цене</option>
        </select>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'filters',
    data() {
        return {
            selected: ''
        }
    }
  }
</script>

<style>
  .filters-list {
    display: flex;
    flex-direction: column;
    list-style: none;
  }
</style>
