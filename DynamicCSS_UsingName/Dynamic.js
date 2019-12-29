new Vue({
  el: '#app',
  data: {
    attachRed: false,
    color :'green'
  },
  computed: {
    divClass: function() {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      };
    }
  }
});
