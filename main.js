

var router = new VueRouter({
  routes: [
    {path: '/', component: start}

]});


new Vue({
  el: '#app',
  router: router

});


var start = Vue.extend({
  template: '#start'
});
