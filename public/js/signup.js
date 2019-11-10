// Initialize Firebase
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const usersRef = db.collection('users');
const signupForm = document.getElementById('signupForm');

signupForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  //get user info
  let messages=[];
  let valid = false;
  const email = signupForm['email'].value;
  const password = signupForm['password'].value;
  const password_confirm = signupForm['password_confirm'].value;
  const firstName = signupForm['firstName'].value;
  const lastName = signupForm['lastName'].value;
  const organisation = signupForm['organisation'].value;
  const designation = signupForm['designation'].value;
  if(password.length < 6)
  {
    messages.push('password should be 6 characters or longer');
  }
  if(password != password_confirm)
  {
    messages.push("passwords have to match.")
  }
  if(!validateEmail(email))
  {
    messages.push("please enter a valid email")
  }
  if(password.length >= 6 && password === password_confirm && validateEmail(email))
  {
    valid = true;
  }

  if(valid)
  {
    auth.createUserWithEmailAndPassword(email,password).then((cred)=>{
      usersRef.add({
        uid: cred.user.uid,
        firstname: firstName,
        lastname: lastName,
        organisation: organisation,
        designation: designation,
        email: email
      }).then(function(docRef){
        window.history.back();
      })

      //adminForm.style.display = "none";
      //adminForm.reset();
    });
  }
  else {
    alert(messages);
  }

})

function validateEmail(email)
{
  regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(email);
}
