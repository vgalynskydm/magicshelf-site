<template>
  <ul class="items-list">
    <li class="items-list__item" v-for="item in items" v-bind:key="item.id">
      <router-link v-bind:to="{ name: 'detail', params: { id: item.id }}" class="items-list__link">
        <img class="items-list__image" v-bind:src="item.img" />
      </router-link>
      <h4 class="items-list__title">{{ item.name }}</h4>
      <h4 class="items-list__price">{{ item.price }} руб.</h4>
      <h4 class="items-list__available" v-bind:class="item.available">
        {{ item.available > 0 ? 'В наличии' : 'Нет в наличии' }}
      </h4>
      <button class="items-list__button items-list__button_add" v-on:click="addCart(item.id)" v-bind:disabled="item.available == 0">
        Добавить в корзину
      </button>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'items',
    computed: {
        items() {
            return this.$store.state.items.sort((a, b) => {
                if(a.price > b.price) {
                    return 1
                }

                if(a.price < b.price) {
                    return -1
                }

                return 0
            })
        }
    },
    methods: {
        addCart(id) {
          this.$store.dispatch('addCart', id)
        }
        /*,
        removeCart(id) {
            this.$store.dispatch('removeCart', id)
        }*/
    }
  }
</script>

<style>
  .items-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    list-style: none;
  }

  .items-list__item {
    display: flex;
    flex-direction: column;
    max-width: 240px;
    padding: 16px;
  }

  .items-list__item:hover {
    box-shadow: 0 2px 4px 4px #e0e0e0;
  }

  .items-list__link {
    text-align: center;
  }

  .items-list__image {
    max-width: 100%;
    max-height: 60%;
    margin: 0 0 12px;
  }

  .items-list__title {
    font-size: 16px;
    margin: 0 0 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .items-list__price {
    font-size: 22px;
    margin: 0 0 12px;
  }

  .items-list__available {
    font-size: 18px;
    margin: 0 0 12px;
  }

  .items-list__button {
    outline: 0;
    border: 0;
    min-height: 28px;
    color: #ffffff;
    font-size: 16px;
    border-radius: 2px;
    font-family: inherit;
    margin: 0 0 4px;
    cursor: pointer;
  }

  .items-list__button:last-child {
    margin: 0;
  }

  .items-list__button_add {
    background: #2e7d32;
  }

  .items-list__button_add:hover {
    background: #43a047;
  }

  .items-list__button_add:disabled {
    opacity: .4;
    cursor: default;
  }

  /*.items-list__button_remove {
    background: #c62828;
  }

  .items-list__button_remove:hover {
    background: #e53935;
  }

  .items-list__button_remove:disabled {
    opacity: .4;
    cursor: default;
  }*/
</style>
