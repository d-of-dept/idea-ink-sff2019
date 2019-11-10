const auth = firebase.auth();
const db = firebase.firestore();
const eventRef = db.collection('events');
const itemRef = eventRef.doc('mGyW6ogPmyoV8CARcYka').collection('items');

auth.onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
  } else {
    // No user is signed in.
  }
});

function checkLogin(){
  var user = auth.currentUser;
  if(user)
  {
    url = document.getElementById('graphicRecording').src;
    window.open(url);
  }
  else
  {
    showModal();
  }
}

const loginForm = document.querySelector("#loginForm");

loginForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  //get user info
  const email = loginForm['email'].value;
  const password = loginForm['password'].value;
  auth.signInWithEmailAndPassword(email,password).then((cred)=>{
    console.log(cred.user);
    hideModal();
    loginForm.reset();
  });
})

//Frontend
function hideModal(){
  document.getElementById("loginBox").style.top = "150%";
  document.getElementById("loginModal").style.opacity = "0";
  setTimeout(function(){
    document.getElementById("loginModal").style.display = "none";
  }, 500)
}

function showModal(){
  document.getElementById("loginModal").style.display = "block";
  setTimeout(function(){
    document.getElementById("loginBox").style.top = "0";
    document.getElementById("loginModal").style.opacity = "1";
  }, 100)
}
