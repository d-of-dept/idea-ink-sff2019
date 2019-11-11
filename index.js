const express = require('express');
const path = require('path');

// Require Firebase
const admin = require('firebase-admin');
const serviceAccount = require('./serviceAccountKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
const eventsRef = db.collection('events');
//get Event data
let events = new Array();
eventsRef.get().then((snapshot)=>{
  snapshot.docs.forEach((doc)=>{
    events.push(doc.data());
  })
})
// Init App
const app = express();
// Load View Engine
app.set('views',path.join(__dirname, 'views'));
app.set('view engine', 'pug');
// Set public folder
app.use(express.static(path.join(__dirname,'public')));

function getLatestItems(){
  const itemsRef = db.collection('events').doc('mGyW6ogPmyoV8CARcYka').collection('items').orderBy('lastupdate','desc');
  return itemsRef.get().then(snapshot => {
    let items = new Array();
    let maxLength = 5;
    snapshot.docs.forEach(doc =>{
      data = doc.data();
      if(data.sourceurl != "")
      {
        if(items.length < maxLength)
        {
          data.id = doc.id;
          items.push(data);
        }
      }
    });
    return items;
  })
  .catch(error => {
    console.log(error);
  })
}

function getItems(){
  const itemsRef = db.collection('events').doc('mGyW6ogPmyoV8CARcYka').collection('items').orderBy('timeslot','asc');
  return itemsRef.get().then(snapshot => {
    let days = {};
    let day1 = [];
    let day2 = [];
    let day3 = [];
    snapshot.docs.forEach(doc =>{
      data = doc.data();
      data.id = doc.id;
      data.st = data.starttime[0] + ":" + data.starttime[1];
      data.et = data.endtime[0] + ":" + data.endtime[1];
      switch(data.day)
      {
        case "Day 1":
          day1.push(data);
        break;
        case "Day 2":
          day2.push(data);
        break;
        case "Day 3":
          day3.push(data);
        break;
      }
      days.day1 = day1;
      days.day2 = day2;
      days.day3 = day3;
    })
    return days;
  })
  .catch(error => {
    console.log(error);
  })
}

function getTrackItemsDays(track)
{
  const itemsRef = db.collection('events').doc('mGyW6ogPmyoV8CARcYka').collection('items').where('track','==',track).orderBy('timeslot','asc');
  return itemsRef.get().then(snapshot => {
    let days = {};
    let day1 = [];
    let day2 = [];
    let day3 = [];
    snapshot.docs.forEach(doc =>{
      data = doc.data();
      data.id = doc.id;
      data.st = data.starttime[0] + ":" + data.starttime[1];
      data.et = data.endtime[0] + ":" + data.endtime[1];
      switch(data.day)
      {
        case "Day 1":
          day1.push(data);
        break;
        case "Day 2":
          day2.push(data);
        break;
        case "Day 3":
          day3.push(data);
        break;
      }
      days.day1 = day1;
      days.day2 = day2;
      days.day3 = day3;
    })
    return days;
  })
  .catch(error => {
    console.log(error);
  })
}

function getTrackItems(track)
{
  const itemsRef = db.collection('events').doc('mGyW6ogPmyoV8CARcYka').collection('items').where('track','==',track).orderBy('timeslot','asc');
  return itemsRef.get().then(snapshot => {
    let items = [];
    snapshot.docs.forEach(doc => {
      data = doc.data();
      data.id = doc.id;
      data.st = data.starttime[0] + ":" + data.starttime[1];
      data.et = data.endtime[0] + ":" + data.endtime[1];
      items.push(data);
    })
    return items;
  })
  .catch(error => {
    console.log(error);
  })
}

// Load View Engine
app.set('views','./views');
app.set('view engine', 'pug');

// Home Route
app.get('/', function(req, res){
  getLatestItems().then(items => {
    res.render('index',{
      title: 'Idea Ink | Singapore Fintech Festival 2019',
      items: items
    })
  })

});

//User Routes
app.get('/signup',function(req,res){
  res.render('signup',{
    title: 'Idea Ink | Sign Up'
  });
})

app.get('/switch/:track',function(req, res){
  track = req.params.track.split("_").join(" ");
  getTrackItems(track).then(items =>{
    res.render('switch',{
      title: 'SWITCH |' + track,
      subtitle: track,
      items: items
    });
    return items;
  })
  .catch(error => {
    console.log(error);
  })
})

app.get('/sff/:track',function(req,res){
  track = req.params.track.split("_").join(" ");
  getTrackItemsDays(track).then(days =>{
    res.render('sff',{
      title: 'SFF2019 |' + track,
      day1: days.day1,
      day2: days.day2,
      day3: days.day3,
    });
    return days;
  })
  .catch(error => {
    console.log(error);
  })
})

app.get('/sessions/:id',function(req,res){
  const item = db.collection('events').doc('mGyW6ogPmyoV8CARcYka').collection('items').doc(req.params.id);
  item.get().then(doc => {
    data = doc.data();
    if(data.sourceurl != "")
    {
      res.render('session',{
        title: data.title,
        item: data
      })
    }
    else
    {
      res.render('not_found')
    }
  })
})

// Admin Login Route
app.get('/admin', function(req, res){
  res.render('admin',{
    title: 'Admin'
  });
});

app.get('/admin/sff2019', function(req, res){
  getItems().then( days =>{
    res.render('sff2019_admin',{
      title: 'Idea Ink | SFF19',
      day1: days.day1,
      day2: days.day2,
      day3: days.day3
    });
    return days;
  })
  .catch(error => {
    console.log(error);
  })
});

// Item Routes
app.get('/items/create',function(req,res){
  res.render('item_create',{
    title:'SFF19 | Create Item'
  })
})

app.get('/items/edit/:id',function(req,res){
  const item = db.collection('events').doc('mGyW6ogPmyoV8CARcYka').collection('items').doc(req.params.id);
  item.get().then( doc => {
    data = doc.data();
    res.render('item_edit',{
      title:'SFF19 | Edit Item',
      itemtitle: data.title,
      type: data.type,
      track: data.track,
      day: data.day,
      start_hh: data.starttime[0],
      start_mm: data.starttime[1],
      end_hh: data.endtime[0],
      end_mm: data.endtime[1],
      sourceurl: data.sourceurl,
      speaker: data.speaker,
      organisation: data.organisation,
      id: req.params.id
    })
    return data;
  })
  .catch(error => {
    console.log(error);
  })

})

// Start Server
app.listen(3000, function(){
  console.log('server started on port 3000');
});
