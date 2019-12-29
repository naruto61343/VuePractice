new Vue({
  el: '#app',
  data: {
    attachRed: false
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
