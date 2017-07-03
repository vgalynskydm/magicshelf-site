<template>
  <div class="basket">
    <ul class="basket-list">
      <li class="basket-list__item" v-for="item in items" v-bind:key="item.id">
        <div class="row">
          <router-link v-bind:to="{ name: 'detail', params: { id: item.id }}">
            <h4 class="">{{ item.name }}</h4>
          </router-link>
        </div>
        <div class="row">
          <h4 class="">{{ item.price }} руб.</h4>
        </div>
        <div class="row">
          <h4 class="">Итого: {{ item.total }} руб.</h4>
        </div>
        <div class="row">
          <h4 class="">Количество: {{ item.quantity }} шт.</h4>
        </div>
        <div class="row">
          <button class="basket-list__button basket-list__button_add" v-on:click="addCart(item.id)" v-bind:disabled="item.available == 0">
            Добавить
          </button>
          <button class="basket-list__button basket-list__button_remove" v-on:click="removeCart(item.id)">
            Удалить
          </button>
        </div>
      </li>
    </ul>
    <h4 class="">Итоговая сумма: {{ total }} руб.</h4>
  </div>
</template>

<script>
  export default {
    name: 'basket',
    computed: {
        items() {
            return this.$store.getters.itemsDetailCart
        },
        total() {
            return this.$store.getters.cartTotalPrice
        }
    },
    methods: {
        addCart(id) {
            this.$store.dispatch('addCart', id)
        },
        removeCart(id) {
            this.$store.dispatch('removeCart', id)
        }
    }
  }
</script>

<style>
  .basket-list {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  .basket-list__item {
    display: flex;
    align-items: center;
    min-height: 80px;
    border-bottom: 1px solid #e0e0e0;
  }

  .row {
    display: flex;
    flex-grow: 1;
    flex-shrink: 1;
    flex-basis: 0;
    justify-content: space-around;
  }

  .basket-list__button {
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

  .basket-list__button_add {
    background: #2e7d32;
  }

  .basket-list__button_add:hover {
    background: #43a047;
  }

  .basket-list__button_add:disabled {
    opacity: .4;
    cursor: default;
  }

  .basket-list__button_remove {
    background: #c62828;
  }

  .basket-list__button_remove:hover {
    background: #e53935;
  }
</style>
