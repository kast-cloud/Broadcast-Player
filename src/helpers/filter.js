import Vue from 'vue';

//format Number two digit 
Vue.filter('formatNumber', function (number) {
  if (number >= 10) return number;
  return "0" + number;
});
