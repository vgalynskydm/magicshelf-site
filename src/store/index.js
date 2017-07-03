import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: [
      {
        id: 1,
        name: 'Хочу и буду. Принять себя, полюбить жизнь и стать счастливым',
        img: 'http://ozon-st.cdn.ngenix.net/multimedia/c300/1019002307.jpg',
        price: 459,
        available: 4
      },
      {
        id: 2,
        name: 'Пиши, сокращай. Как создавать сильный текст',
        img: 'http://ozon-st.cdn.ngenix.net/multimedia/c300/1016555662.jpg',
        price: 499,
        available: 6
      },
      {
        id: 3,
        name: 'Сказать жизни "Да!". Психолог в концлагере',
        img: 'http://ozon-st.cdn.ngenix.net/multimedia/c300/1005782197.jpg',
        price: 304,
        available: 8
      },
      {
        id: 4,
        name: 'Самостоятельный ребенок, или как стать "ленивой мамой',
        img: 'http://ozon-st.cdn.ngenix.net/multimedia/c300/1015595367.jpg',
        price: 259,
        available: 4
      },
      {
        id: 5,
        name: 'Атлант расправил плечи (комплект из 3 книг)',
        img: 'http://ozon-st.cdn.ngenix.net/multimedia/c300/1016378501.jpg',
        price: 899,
        available: 10
      },
      {
        id: 6,
        name: 'Достающее звено. Книга 1. Обезьяна и все-все-все',
        img: 'http://ozon-st.cdn.ngenix.net/multimedia/c300/1018931275.jpg',
        price: 569,
        available: 12
      }
    ],
    cart: []
  },
  getters: {
    itemsDetailCart(state) {
      //const itemsIdCart = state.cart.map(item => item.id)

      return state.cart.map(({ id, quantity }) => {
        const itemCatalog = state.items.find(item => item.id === id)

        return {
          id,
          name: itemCatalog.name,
          price: itemCatalog.price,
          available: itemCatalog.available,
          total: quantity * itemCatalog.price,
          quantity
        }
      })
    },
    cartTotalPrice(state, getters) {
      return getters.itemsDetailCart.reduce((total, current) => total + current.total, 0)
    },
    countCartItems(state) {
      return state.cart.length
    }
  },
  actions: {
    addCart({ commit }, id) {
      commit('addCart', id);
    },
    removeCart({ commit }, id) {
      commit('removeCart', id)
    }
  },
  mutations: {
    addCart(state, id) {
      const itemCart = state.cart.find(item => item.id === id)
      const itemCatalog = state.items.find(item => item.id === id)

      if(itemCatalog.available > 0) {
        if(!itemCart) {
          state.cart.push({
            id: id,
            quantity: 1
          })
          itemCatalog.available--
        } else {
          itemCart.quantity++
          itemCatalog.available--
        }
      }
    },
    removeCart(state, id) {
      const itemCart = state.cart.find(item => item.id === id)
      const itemCatalog = state.items.find(item => item.id === id)
      const indexItemCart = state.cart.indexOf(itemCart)

      if(itemCart) {
        if(itemCart.quantity > 1) {
          itemCart.quantity--
          itemCatalog.available++
        } else {
          state.cart.splice(indexItemCart, 1)
          itemCatalog.available++
        }
      }
    }
  }
})
