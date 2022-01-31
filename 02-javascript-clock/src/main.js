"use strict";
let time;
let seconds;
let minutes;
let hours;

// DOM ElEMENTS
const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".minute-hand");
const hourHand = document.querySelector(".hour-hand");

function getDate() {
  const date = new Date();
  return date;
}

function displaySeconds(seconds) {
  const maxSeconds = 60;
  const percent = Number(seconds / maxSeconds);
  const degree = percent * 360;
  console.log("Secdegree", degree);
  secondHand.style.transform = `rotate(${degree}deg)`;
}

function displayMinutes(minutes) {
  const maxMinutes = 60;
  const percent = Number(minutes / maxMinutes);
  const degree = percent * 360;
  console.log("Mindegree", degree);
  minuteHand.style.transform = `rotate(${degree}deg)`;
}

function displayHours(hours) {
  const maxHours = 24;
  const percent = Number(hours / maxHours);
  const degree = percent * 360;
  console.log("Hourdegree", degree);
  hourHand.style.transform = `rotate(${360}}deg)`;
}

function main() {
  time = getDate();
  seconds = time.getSeconds();
  minutes = time.getMinutes();
  hours = time.getHours();
  displaySeconds(seconds);
  displayMinutes(minutes);
  displayHours(hours);
  console.log(seconds, minutes, hours);
}

setInterval(main, 1000);
