// Initialize Firebase
const auth = firebase.auth();
const db = firebase.firestore();
const eventRef = db.collection('events');

//admin login
const adminForm = document.querySelector("#adminForm");

document.addEventListener("DOMContentLoaded", function(event) {
  adminForm.style.display = "block";
});

adminForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  //get user info
  const email = adminForm['userName'].value;
  const password = adminForm['password'].value;
  auth.signInWithEmailAndPassword(email,password).then((cred)=>{
    console.log(cred.user);
    adminForm.style.display = "none";
    adminForm.reset();
  });
})

auth.onAuthStateChanged((user)=>{
  if(user.uid === "lmw7DhqqEjOJalJeia8CSDkrYGI3")
  {
    adminForm.style.display = "none";
    window.location.href= "/admin/sff2019";
  }
  else
  {
    //adminForm.style.display = "block";
    //newItemForm.style.display = "none";
  }
  console.log(user);
})
