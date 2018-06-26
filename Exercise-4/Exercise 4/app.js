new Vue({
  el: '#exercise',
  data: {
    effect: true,
    width: 0,
    userClass: '',
    isActiveClass: '',
    userStyle: ''
  },
  methods: {
    startEffect: function() {
      setInterval(function(){
        this.effect = !effect
       }, 3000);
    },
    startProgress: function() {
      setInterval(function(){
        this.width++
       }, 300);
    }
  },
  computed: {
    myStyle: function() {
      return {
        width: this.width + 'px',
        background: blue,
        height: '5px'
      }
    }
  }
});
