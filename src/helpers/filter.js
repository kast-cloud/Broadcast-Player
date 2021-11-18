import Vue from 'vue';

//format Number two digit 
Vue.filter('formatNumber', function (number) {
  if (number >= 10) return number;
  return "0" + number;
});


//convert seconds to hours minutes
Vue.filter('convertSecondsToHoursMinutes', function (seconds) {
  const sec = parseInt(seconds, 10); // convert seconds to number if it's string
  let hours = Math.floor(sec / 3600); // get hours
  let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
  // add 0 if seconds < 10; Example: 2 => 02
  if (minutes > 0) {
    minutes = minutes + " min";
  } else {
    minutes = "";
  }
  if (hours > 0) {
    hours = hours + "h";
  } else {
    hours = "";
  }
  return hours + ' ' + minutes;
});
