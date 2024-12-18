// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// global object
T = {} ;
T.timerDiv1 = document.getElementById('timer1');
T.timerDiv2 = document.getElementById('timer2');
T.timerDiv3 = document.getElementById('timer3');
T.timerDiv4 = document.getElementById('timer4');
T.timerDiv5 = document.getElementById('timer5');
T.timerDiv6 = document.getElementById('timer6');
function displayTimer() {

  // initilized all local variables:
  var hours='00', minutes='00',
  miliseconds=0, seconds='00',
  time = '',
  timeNow = new Date().getTime(); // timestamp (miliseconds)
  
	
  T.difference = timeNow - T.timerStarted;

  // milliseconds
  if(T.difference > 10) {
    miliseconds = Math.floor((T.difference % 1000) / 10);
    if(miliseconds < 10) {
      miliseconds = '0'+String(miliseconds);
    }
  }
  // seconds
  if(T.difference > 1000) {
    seconds = Math.floor(T.difference / 1000);
    if (seconds > 60) {
      seconds = seconds % 60;
    }
    if(seconds < 10) {
      seconds = '0'+String(seconds);
    }
  }

  // minutes
  if(T.difference > 60000) {
    minutes = Math.floor(T.difference/60000);
    if (minutes > 60) {
      minutes = minutes % 60;
    }
    if(minutes < 10) {
      minutes = '0'+String(minutes);
    }
  }

  // hours
  if(T.difference > 3600000) {
    hours = Math.floor(T.difference/3600000);
    // if (hours > 24) {
    // 	hours = hours % 24;
    // }
    if(hours < 10) {
      hours = '0'+String(hours);
    }
  }

  /*time  =  hours   + ':'
  time += minutes + ':'
  time += seconds */

	T.timerDiv1.innerHTML = hours.toString()[0]
	T.timerDiv2.innerHTML = hours.toString()[1] + ':'
	
	T.timerDiv3.innerHTML = minutes.toString()[0]
	T.timerDiv4.innerHTML = minutes.toString()[1] + ':'
	
	T.timerDiv5.innerHTML = seconds.toString()[0]
	T.timerDiv6.innerHTML = seconds.toString()[1] 
}

function startTimer() {
  // save start time.getTime()
  //			   
  T.timerStarted = 1734386285733 - 60*60*1000*6 - 9*60*1000 + 17*1000 -  20*60*1000
  //T.timerStarted = new Date().getTime()
  //console.log('T.timerStarted: '+T.timerStarted)

  if (T.difference > 0) {
    T.timerStarted = T.timerStarted - T.difference
  }
  // update timer periodically
  T.timerInterval = setInterval(function() {
    displayTimer()
  }, 10);

  // show / hide the relevant buttons:
  /*document.getElementById('go').style.display="none";
  document.getElementById('stop').style.display="inline";
  document.getElementById('clear').style.display="none";*/
}

function stopTimer() {
  clearInterval(T.timerInterval); // stop updating the timer

  document.getElementById('stop').style.display="none";
  document.getElementById('go').style.display="inline";
  document.getElementById('clear').style.display="inline";
}

function clearTimer() {
  clearInterval(T.timerInterval);
  T.timerDiv1.innerHTML = "00:00:00:00"; // reset timer to all zeros
  T.difference = 0;

  document.getElementById('stop').style.display="none";
  document.getElementById('go').style.display="inline";
  document.getElementById('clear').style.display="none";
}

startTimer()
