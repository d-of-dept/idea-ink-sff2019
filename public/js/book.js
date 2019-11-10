const db = firebase.firestore();
const storage = firebase.storage();
const bookRef = db.collection('bookpreview');
const bookForm = document.getElementById('bookForm');
const cta1 = document.getElementById('cta1');
const cta2 = document.getElementById('cta2');
bookForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  //get user info
  const email = bookForm['email'].value;
	if(validateEmail(email))
	{
		bookRef.add({
			email: email
		}).then(docRef =>{
			cta1.innerHTML = "Thank You!";
			cta2.innerHTML = "We look forward to sharing more with you in the future.";
			bookForm.style.display = "none";
		})
	}

})

function validateEmail(email)
{
  regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return regex.test(email);
}

//Frontend
document.getElementById("slice1").onclick = function(){
	document.getElementById("capSight").style.opacity = 1;
	document.getElementById("capSight").style.left = '20%';

	document.getElementById("capSketch").style.opacity = 0;
	document.getElementById("capSynth").style.opacity = 0;

	document.getElementById("slice1").style.opacity = 1;
	document.getElementById("slice2").style.opacity = 0.25;
	document.getElementById("slice3").style.opacity = 0.25;

	document.getElementById("imgCaption").style.opacity = 0;
}

document.getElementById("slice2").onclick = function(){
	document.getElementById("capSight").style.opacity = 0;
	document.getElementById("capSketch").style.opacity = 1;
	document.getElementById("capSketch").style.left = '20%';

	document.getElementById("capSynth").style.opacity = 0;

	document.getElementById("slice1").style.opacity = 0.25;
	document.getElementById("slice2").style.opacity = 1;
	document.getElementById("slice3").style.opacity = 0.25;

	document.getElementById("imgCaption").style.opacity = 0;
}

document.getElementById("slice3").onclick = function(){
	document.getElementById("capSight").style.opacity = 0;
	document.getElementById("capSketch").style.opacity = 0;
	document.getElementById("capSynth").style.opacity = 1;
	document.getElementById("capSynth").style.left = '20%';

	document.getElementById("slice1").style.opacity = 0.25;
	document.getElementById("slice2").style.opacity = 0.25;
	document.getElementById("slice3").style.opacity = 1;

	document.getElementById("imgCaption").style.opacity = 0;
}
