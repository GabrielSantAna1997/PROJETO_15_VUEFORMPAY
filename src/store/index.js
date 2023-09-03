import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    country: {
      currency: '',
      value: 0,
    },
    methodPay: 'creditCard',
    validForm: false,
    user: {

    },
    count: 0
  },
  mutations: {
    updateCountry(state, newCountry) {
      state.country = newCountry; 
    },
    updateMethodPay(state, newMethod) {
      state.methodPay = newMethod; 
    },
    updateValidForm(state, newMethod) {
      state.validForm = newMethod; 
    },
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  },
  actions: {
    incrementAsync(context) {
      setTimeout(() => {
        context.commit('increment')
      }, 1000)
    }
  }
})
