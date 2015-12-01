var deadline = 'December 3 2015 04:00:00 UTC+0100';


function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
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