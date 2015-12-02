var deadline = 'December 3 2015 00:00:00 UTC+0100';

function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var isFuture = (t>=0);
  var seconds = (isFuture)?Math.floor( (t/1000) % 60 ):0;
  var minutes = (isFuture)?Math.floor( (t/1000/60) % 60 ):0;
  var hours = (isFuture)?Math.floor( (t/(1000*60*60)) % 24 ):0;
  var days = (isFuture)?Math.floor( t/(1000*60*60*24) ):0;
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}

var timeRemaining = getTimeRemaining(deadline);

var days = timeRemaining.days + '';
var hours = ('0' + timeRemaining.hours).slice(-2);
var minutes = ('0' + timeRemaining.hours).slice(-2);
var seconds = ('0' + timeRemaining.seconds).slice(-2);