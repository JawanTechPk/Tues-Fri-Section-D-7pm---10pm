// setInterval(function(){console.log('Hello')},2000);

// var numParaVar = document.getElementById('numPara');
// var num = 0;

// function myFunc(){
// console.log('Hello');
// num = num+5;
// numParaVar.innerHTML = num;
// }

// var funcId =  setInterval(myFunc,200);

// console.log(funcId);

// function stopCounter(){
//     clearInterval(funcId);
// }

// var timeID = setTimeout(function(){console.log('hello')},4000);
// console.log(timeID);
// function stopCounter(){
//     clearTimeout(timeID);
// }

var hMin = document.getElementById("min_Heading");
var hSec = document.getElementById("sec_Heading");
var hMiliSec = document.getElementById("miliSec_Heading");

var strBtn = document.getElementById("startBtn");

var min = 0;
var sec = 0;
var miliSec = 0;

var intervalVar;

function timeout() {
  miliSec++;
  hMiliSec.innerHTML = miliSec;
  if (miliSec >= 100) {
    sec++;
    hSec.innerHTML = sec;
    miliSec = 0;
  } else if (sec >= 60) {
    min++;
    hMin.innerHTML = min;
    sec = 0;
  }
}

function start() {
  intervalVar = setInterval(timeout, 10);
  strBtn.className = "disable";
}

function pause() {
  clearInterval(intervalVar);
  strBtn.className = "visible";
}

function reset() {
  min = 0;
  sec = 0;
  miliSec = 0;
  hMin.innerHTML =min;
  hSec.innerHTML = sec;
  hMiliSec.innerHTML = miliSec;
  pause()
}
