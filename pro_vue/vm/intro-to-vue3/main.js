'use strict'
/**
  Title: Introduction to Vue.js
  Author: Isaias M. Ghebrehiwet
  Date: 10/11/2023
  Vue App

  Filename.: main.js
*/

const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: true
    }
  },

  methods: {
    updateCart(id) {
      this.cart.push(id)
    }
  },
})