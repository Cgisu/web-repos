'use strict'
/**
Title: Introduction to Vue.js
Author: Isaias M. Ghebrehiwet
Date: 10/11/2023
Review Display Component

filename: ReviewList.js
*/

app.component('review-list', {
  template: 
  /*html*/
  `
  <div class="review-container">
    <h3>Reviews:</h3>
    <ul>
      <li v-for="(review, index) in reviews" :key="index">
         {{ review.name }} gave this {{ review.rating }} stars
         <br>
        <blockquote>
        "{{  review.review }}"
        </blockquote>
      </li>
    </ul>
  </div>
  `,
  props: {
    reviews: {
      type: Array,
      required: true
    }

      
  }
})