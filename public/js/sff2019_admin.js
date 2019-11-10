const auth = firebase.auth();
const db = firebase.firestore();
const eventRef = db.collection('events');
const itemRef = eventRef.doc('mGyW6ogPmyoV8CARcYka').collection('items');

auth.onAuthStateChanged((user)=>{
  if(user)
  {
    if(user.uid != "lmw7DhqqEjOJalJeia8CSDkrYGI3")
    {
      window.location.href= "/admin";
    }
  }
  else
  {
    window.location.href= "/admin";
  }
})

let day1Wrapper = document.getElementById("day1Wrapper");
let day2Wrapper = document.getElementById("day2Wrapper");
let day3Wrapper = document.getElementById("day3Wrapper");

document.addEventListener("DOMContentLoaded", function(event) {
  day1Wrapper.style.display = "block";
  day2Wrapper.style.display = "none";
  day3Wrapper.style.display = "none";
});

var dayPill = document.getElementById("dayPill");
var days = document.getElementById("days");

document.getElementById("day1").onclick = function(){
  dayPill.style.left = '40px';
  days.style.left = '0px'
  day1Wrapper.style.display = "block";
  day2Wrapper.style.display = "none";
  day3Wrapper.style.display = "none";
}
document.getElementById("day2").onclick = function(){
  dayPill.style.left = '122px';
  days.style.left = '-18px'
  day1Wrapper.style.display = "none";
  day2Wrapper.style.display = "block";
  day3Wrapper.style.display = "none";
}
document.getElementById("day3").onclick = function(){
  dayPill.style.left = '203px';
  days.style.left = '-18px'
  day1Wrapper.style.display = "none";
  day2Wrapper.style.display = "none";
  day3Wrapper.style.display = "block";
}

document.getElementById("addBtn").onclick = function(){
  window.location.href = "/items/create";
}

function itemEdit(id){
  window.location.href="/items/edit/"+id;
}
function itemDelete(id){
  itemRef.doc(id).delete().then(e => {
    document.getElementById(id).style.display = "none";
    alert("successfully deleted item");
  })
}
