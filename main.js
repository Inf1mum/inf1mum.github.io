

var start = Vue.extend({  template: '#start'});
var lesson1 = Vue.extend({  template: '#lesson1'});
var lesson2 = Vue.extend({  template: '#lesson2'});
var lesson3 = Vue.extend({  template: '#lesson3'});
var lesson4 = Vue.extend({  template: '#lesson4'});
var lesson5 = Vue.extend({  template: '#lesson5'});



var router = new VueRouter({
  routes: [
    {path: '/', component: start},
    {path: '/lesson/1', component: lesson1},
    {path: '/lesson/2', component: lesson2},
    {path: '/lesson/3', component: lesson3},
    {path: '/lesson/4', component: lesson4},
    {path: '/lesson/5', component: lesson5}
  ]});


new Vue({
  el: '#app',
  router: router
});



