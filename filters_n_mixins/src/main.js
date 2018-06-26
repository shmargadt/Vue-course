import Vue from 'vue'
import App from './App.vue'

Vue.filter('add-length', function(value) {
    return value + " (" + value.length + ")";
});

Vue.mixin({
    computed: {
        reverseComputed () {
          return this.textToReverse.split("").reverse().join("");
        }, 
        addLengthComputed () {
          return value + " (" + value.length + ")";
        }
      }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
