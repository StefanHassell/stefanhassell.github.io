"use strict";

function changeLight(e) {
   document.getElementById("light").src = "greenlight.jpg"; } 

function myMove(event) { 
  var elem = document.getElementById("running");
  var elem2 = document.getElementById("running2");
  var elem3 = document.getElementById("running3");
  var pos = 0;
  var pos2 = 0;
  var pos3 = 0;

function shuffle(array) {
  var currentIndex = array.length, temp, randomIndex;
   
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1; 
    temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }
return array;
}

var speedArray = [4, 5, 6, 7, 8];

shuffle(speedArray);
var speed = speedArray[0];
var speed2 = speedArray[1];
var speed3 = speedArray[2];
  
var id = setInterval(race, speed);
var id2 = setInterval(race2, speed2);
var id3 = setInterval(race3, speed3);

var end = (window.innerWidth - 184);
   
function race() {
    if (pos == end) {
       clearInterval(id);
       clearInterval(id2);
       clearInterval(id3); 
       document.getElementById("winner").src = "mariowins.jpg"; } 
    else {
      pos++;
      elem.style.left = pos + 'px'; }
}
function race2() { 
    if (pos2 == end) {
       clearInterval(id);
       clearInterval(id2);
       clearInterval(id3);
       document.getElementById("winner").src = "luigiwins.jpg"; } 
   else {
      pos2++;
      elem2.style.left = pos2 + 'px'; }
}
function race3() {
    if (pos3 == end) {
      clearInterval(id);
       clearInterval(id2);
       clearInterval(id3);
       document.getElementById("winner").src = "yoshiwins.jpg"; }
    else {
      pos3++;
      elem3.style.left = pos3 + 'px'; }
}
}