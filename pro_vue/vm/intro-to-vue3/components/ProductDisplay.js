'use strict'

/**
 * Title: Introduction to Vue.js
 * Author Isaias M. Ghebrehiwet
 * Date: 11/10/2023
 * Product Display Component
 *
 * Filename: P
 */

app.component('product-display', {
  template: 
  /*html*/
  `<div class="product-display">
    <div class="product-container">
      <div class="product-image">
        <img :src="image" alt="product"/>
      </div>
      <div class="product-info">
        <h1>{{ title }}</h1>

        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>
        <ul>
          <li v-for="detail in details">{{ detail }}</li>
        </ul>
        <div
          v-for="(variant, index) in variants"
          :key="variant.id"
          @mouseover="updateVariant(index)"
          class="color-circle"
          :style="{ backgroundColor: variant.color}"
        >
          <!-- {{ variant.color }} -->
        </div>
        <button 
          class="button"
          :class="{ disabledButton: !inStock }"
          :disabled="!inStock"
          @click="addToCart"
        >
          Add to cart
        </button>
      </div>
    </div>
    <review-list :reviews="reviews" v-if="reviews.length"></review-list>
    <review-form @review-submitted="addReview"></review-form>
  </div>`,
  data() {
    return {
      product: 'Socks',
      selectedVariant: 0,
      brand: 'Vue Mastery',
      details: ['50% cotton', '30% wool', '20% polyester'],
      variants: [
        { id: 2234, color: 'green',  image: './assets/images/socks_green.jpg', quantity: 50 },
        { id: 2235, color: 'blue',  image: './assets/images/socks_blue.jpg', quantity: 0 }
      ],
      reviews: []
    }
  },

  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },

  methods: {
    addToCart() {
      let payload = this.variants[this.selectedVariant].id 
      this.$emit('add-to-cart', payload)
    },

    updateVariant(index) {
      this.selectedVariant = index
    },

    addReview(review) {
      this.reviews.push(review)
    }
  },

  computed: {
    title() {
      return this.brand + ' ' +  this.product
    },
    image() {
      return this.variants[this.selectedVariant].image
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity
    },
    shipping() {
      if (this.premium) {
        return 'Free'
      }
      return 2.99
    }
  }
})