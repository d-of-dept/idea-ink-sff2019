let day1Wrapper = document.getElementById("day1Wrapper");
let day2Wrapper = document.getElementById("day2Wrapper");
let day3Wrapper = document.getElementById("day3Wrapper");

document.addEventListener("DOMContentLoaded", function(event) {
  day1Wrapper.style.display = "block";
  day2Wrapper.style.display = "none";
  day3Wrapper.style.display = "none";
});

//Frontend
var indicator = document.getElementById("indicator");

document.getElementById("day1").onclick = function(){

  indicator.style.left = "0%";

  document.getElementById("day1").classList.add("day-tab-yellow");
  document.getElementById("day1").classList.remove("day-tab-grey");
  document.getElementById("day2").classList.remove("day-tab-yellow");
  document.getElementById("day2").classList.add("day-tab-grey");
  document.getElementById("day3").classList.remove("day-tab-yellow");
  document.getElementById("day3").classList.add("day-tab-grey");

  day1Wrapper.style.display = "block";
  day2Wrapper.style.display = "none";
  day3Wrapper.style.display = "none";
}

document.getElementById("day2").onclick = function(){

  indicator.style.left = "30%";

  document.getElementById("day1").classList.remove("day-tab-yellow");
  document.getElementById("day1").classList.add("day-tab-grey");
  document.getElementById("day2").classList.add("day-tab-yellow");
  document.getElementById("day2").classList.remove("day-tab-grey");
  document.getElementById("day3").classList.remove("day-tab-yellow");
  document.getElementById("day3").classList.add("day-tab-grey");

  day1Wrapper.style.display = "none";
  day2Wrapper.style.display = "block";
  day3Wrapper.style.display = "none";
}

document.getElementById("day3").onclick = function(){

  indicator.style.left = "60%";

  document.getElementById("day1").classList.remove("day-tab-yellow");
  document.getElementById("day1").classList.add("day-tab-grey");
  document.getElementById("day2").classList.remove("day-tab-yellow");
  document.getElementById("day2").classList.add("day-tab-grey");
  document.getElementById("day3").classList.add("day-tab-yellow");
  document.getElementById("day3").classList.remove("day-tab-grey");

  day1Wrapper.style.display = "none";
  day2Wrapper.style.display = "none";
  day3Wrapper.style.display = "block";
}
