<template>
  <div class="detail">
    <div>
      <img class="detail__image" v-bind:src="item.img" />
    </div>
    <div>
      <h4 class="detail__title">{{ item.name }}</h4>
      <h4 class="detail__price">{{ item.price }} руб.</h4>
      <h4 class="detail__available">Доступно {{ item.available }} шт.</h4>
    </div>
    <div>
      <button class="detail__button detail__button_add" v-on:click="addCart(item.id)">Добавить в корзину</button>
      <button class="detail__button detail__button_remove" v-on:click="removeCart(item.id)">Удалить из корзины</button>
      <router-link to="/catalog">Назад</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'detail',
    computed: {
      item() {
        return this.$store.state.items.find(item => item.id === Number(this.$route.params.id))
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
  .detail {
    display: flex;
    justify-content: center;
  }

  .detail__image {
    max-width: 256px;
    max-height: 256px;
  }

  .detail__title {
    font-size: 18px;
  }

  .detail__button {
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

  .detail__button_add {
    background: #2e7d32;
  }

  .detail__button_add:hover {
    background: #43a047;
  }

  .detail__button_remove {
    background: #c62828;
  }

  .detail__button_remove:hover {
    background: #e53935;
  }
</style>
