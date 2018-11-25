var start = Vue.extend({
  template: '#start',
   data: function () {
      return {name: 'Hello'}
    },
});

var router = new VueRouter({
  routes: [
    {path: '/', component: start}

]});


new Vue({
  el: '#app',
  router: router

});



