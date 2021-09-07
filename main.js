

var start = Vue.extend({  template: '#start'});
var lesson1 = Vue.extend({  template: '#lesson1'});
var lesson2 = Vue.extend({  template: '#lesson2'});
var lesson3 = Vue.extend({  template: '#lesson3'});
var lesson4 = Vue.extend({  template: '#lesson4'});
var lesson5 = Vue.extend({  template: '#lesson5'});
var lesson6 = Vue.extend({  template: '#lesson6'});
var lesson7 = Vue.extend({  template: '#lesson7'});
var lesson8 = Vue.extend({  template: '#lesson8'});




var router = new VueRouter({
  routes: [
    {path: '/', component: start},
    {path: '/lesson/1', component: lesson1},
    {path: '/lesson/2', component: lesson2},
    {path: '/lesson/3', component: lesson3},
    {path: '/lesson/4', component: lesson4},
    {path: '/lesson/5', component: lesson5},
    {path: '/lesson/6', component: lesson6},
    {path: '/lesson/7', component: lesson7},
    {path: '/lesson/8', component: lesson8}
  ]});


new Vue({
  el: '#app',
  router: router
});



