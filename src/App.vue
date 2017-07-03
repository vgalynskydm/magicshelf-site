<template>
  <div id="app">
    <nav class="navigation">
      <h4 class="navigation__brand">MagicShelf</h4>
      <ul class="navigation-list">
        <router-link tag="li" to="/" class="navigation-list__item">
          <a class="navigation-list__link">Главная</a>
        </router-link>
        <router-link tag="li" to="/catalog" class="navigation-list__item">
          <a class="navigation-list__link">Каталог</a>
        </router-link>
        <router-link tag="li" to="/basket" class="navigation-list__item">
          <a class="navigation-list__link">Корзина ({{ countCartItems }})</a>
        </router-link>
      </ul>
    </nav>
    <router-view class="app-view"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    computed: {
        countCartItems() {
            return this.$store.getters.countCartItems
        }
    }
  }
</script>

<style>
  @font-face {
    font-family: 'Roboto';
    src: url('./assets/fonts/Roboto-Regular.ttf');
  }

  html, body, h4, ul {
    padding: 0;
    margin: 0;
  }

  #app {
    font-family: 'Roboto', sans-serif;
  }

  .app-view {
    max-width: 1200px;
    margin: auto;
  }

  .navigation {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #00695c;
    min-height: 80px;
    margin: 0 0 16px;
  }

  .navigation__brand {
    color: #ffffff;
    font-size: 22px;
  }

  .navigation-list {
    display: flex;
    list-style: none;
  }

  .navigation-list__item {
    margin: 0 12px 0 0;
  }

  .navigation-list__item:last-child {
    margin: 0;
  }

  .navigation-list__link {
    color: #ffffff;
    font-size: 18px;
    text-decoration: none;
  }

  .router-link-exact-active .navigation-list__link {
    border-bottom: 2px solid #ffffff;
  }

  @media screen and (max-width: 768px) {
    .navigation {
      flex-direction: column;
    }
  }
</style>
