// Initialize Firebase
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const eventRef = db.collection('events');
const itemRef = eventRef.doc('mGyW6ogPmyoV8CARcYka').collection('items');

let imageLoaded = false;
const createForm = document.querySelector("#createForm");
createForm.addEventListener('submit', (e)=>{
  e.preventDefault();
  //add doc to firebase
  st = [createForm['start_hh'].value, createForm['start_mm'].value];
  et = [createForm['end_hh'].value, createForm['end_mm'].value];
  let timeSlot;
  switch(createForm['day'].value)
  {
    case "Day 1":
      timeSlot = new Date('November 11, 2019 '+ st[0] + ':' + st[1] + ':00');
    break;
    case "Day 2":
      timeSlot = new Date('November 12, 2019 '+ st[0] + ':' + st[1] + ':00');
    break;
    case "Day 3":
      timeSlot = new Date('November 13, 2019 '+ st[0] + ':' + st[1] + ':00');
    break;
  }
  today = new Date();
  if(imageLoaded)
  {
    file = createForm['source_image'].files[0];
    var storageRef = storage.ref('sff2019/' + file.name);
    var task = storageRef.put(file);
    task.on('state_changed',
      function complete()
      {
        storageRef.getDownloadURL().then(url =>{
          itemRef.add({
            title: createForm['title'].value,
            type: createForm['type'].value,
            track: createForm['track'].value,
            day: createForm['day'].value,
            starttime: st,
            endtime: et,
            timeslot: timeSlot,
            sourceurl: url,
            speaker: createForm['speaker'].value,
            organisation: createForm['organisation'].value,
            lastupdate: today
          }).then(function(docRef){
            window.location.href = "/admin/sff2019";
            alert("uploaded item to SFF2019 with image");

          })
        })
      }
    )
  }
  else
  {
    itemRef.add({
      title: createForm['title'].value,
      type: createForm['type'].value,
      track: createForm['track'].value,
      day: createForm['day'].value,
      starttime: st,
      endtime: et,
      timeslot: timeSlot,
      sourceurl: "",
      speaker: createForm['speaker'].value,
      organisation: createForm['organisation'].value,
      lastupdate: today
    }).then(function(docRef){
      console.log(docRef.id);
      window.location.href = "/admin/sff2019";
      alert("uploaded item to SFF2019 without image");
    })
  }


})

auth.onAuthStateChanged((user)=>{
  console.log(user);
})

document.getElementById('uploadInput').addEventListener('change',function(e){
  readURL(this);
})

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = function(e) {
      uploadimage = document.getElementById('#uploadImage');
      uploadImage.src = e.target.result;
      uploadImage.classList.remove('image');
      uploadImage.classList.add('image-edit');
      imageLoaded = true;
    }

    reader.readAsDataURL(input.files[0]);
  }
}

//Redirect to admin page if not logged in
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

document.getElementById('uploadImage').addEventListener('click', () => {
  document.getElementById('uploadInput').click()
});
