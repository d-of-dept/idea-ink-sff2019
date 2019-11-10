// Initialize Firebase
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const eventRef = db.collection('events');
const itemRef = eventRef.doc('mGyW6ogPmyoV8CARcYka').collection('items');

//switch event
globalAccess = document.getElementById("globalAccess");
ieee = document.getElementById("IEEE");
unravelling = document.getElementById("unravelling");
sustainingFuture = document.getElementById("sustainingFuture");
poweringCities = document.getElementById("poweringCities");
//sff event
festival = document.getElementById("festival");
sustainability = document.getElementById("sustainability");
futureFinance = document.getElementById("futureFinance");
investment = document.getElementById("investment");
exponential = document.getElementById("exponential");
coral = document.getElementById("coral");
//event onclick
globalAccess.onclick = function(){goToTrack("switch","Global Access to Innovation")};
ieee.onclick = function(){goToTrack("switch","Future Directions with IEEE")};
unravelling.onclick = function(){goToTrack("switch","Unravelling Healthcare Innovation")};
sustainingFuture.onclick = function(){goToTrack("switch","Unravelling Healthcare Innovation")};
poweringCities.onclick = function(){goToTrack("switch","Powering Cities of the Future")};
festival.onclick = function(){goToTrack("sff","Plenary Stage")};
sustainability.onclick = function(){goToTrack("sff","Sustainability, Finance and Tech")};
futureFinance.onclick = function(){goToTrack("sff","Future of Finance")};
investment.onclick = function(){goToTrack("sff","Investment and Global Market Opportunities")};
exponential.onclick = function(){goToTrack("sff","Exponential Technologies")};
coral.onclick = function(){goToTrack("sff","Coral Triangle")};

function goToTrack(evt,track){
  track = track.split(" ").join("_");
  console.log(track);
  window.location.href = "/"+evt+"/"+track;
}

// Frontend
var indicator = document.getElementById("indicator");
	  var browse2019 = document.getElementById("browse2019");
	  var browseDB = document.getElementById("browseDB");
	  var dbLink = document.getElementById("dbLink");

	  document.getElementById("year19").onclick = function(){
		  indicator.style.left = "0%";
		  document.getElementById("year19").classList.add("year-tab-yellow");
		  document.getElementById("year19").classList.remove("year-tab-grey");
		  document.getElementById("year18").classList.remove("year-tab-yellow");
		  document.getElementById("year17").classList.remove("year-tab-yellow");
		  document.getElementById("year16").classList.remove("year-tab-yellow");

		  browse2019.style.display = "block";
		  browseDB.style.display = "none";

	  }

	  document.getElementById("year18").onclick = function(){
		  indicator.style.left = "28%";
		  document.getElementById("year18").classList.add("year-tab-yellow");
		  document.getElementById("year18").classList.remove("year-tab-grey");
		  document.getElementById("year19").classList.remove("year-tab-yellow");
		  document.getElementById("year19").classList.add("year-tab-grey");
		  document.getElementById("year17").classList.remove("year-tab-yellow");
		  document.getElementById("year16").classList.remove("year-tab-yellow");

		  browse2019.style.display = "none";
		  browseDB.style.display = "block";

		  dbLink.onclick = function(){
			  window.open('https://www.dropbox.com/sh/5omwtgwljwhq08o/AADmxsrrZvMWfxRmmzvfSdx9a?dl=0', '_blank');
		  }
	  }

	  document.getElementById("year17").onclick = function(){
		  indicator.style.left = "56%";
		  document.getElementById("year17").classList.add("year-tab-yellow");
		  document.getElementById("year17").classList.remove("year-tab-grey");
		  document.getElementById("year19").classList.remove("year-tab-yellow");
		  document.getElementById("year19").classList.add("year-tab-grey");
		  document.getElementById("year18").classList.remove("year-tab-yellow");
		  document.getElementById("year16").classList.remove("year-tab-yellow");

		  browse2019.style.display = "none";
		  browseDB.style.display = "block";

		  dbLink.onclick = function(){
			  window.open('https://www.dropbox.com/sh/l4oanagppochxvz/AAC0GDeyd9-EC_9c7aHPCzeCa?dl=0', '_blank');
		  }
	  }

	  document.getElementById("year16").onclick = function(){
		  indicator.style.left = "84%";
		  document.getElementById("year16").classList.add("year-tab-yellow");
		  document.getElementById("year16").classList.remove("year-tab-grey");
		  document.getElementById("year19").classList.remove("year-tab-yellow");
		  document.getElementById("year19").classList.add("year-tab-grey");
		  document.getElementById("year18").classList.remove("year-tab-yellow");
		  document.getElementById("year17").classList.remove("year-tab-yellow");

		  browse2019.style.display = "none";
		  browseDB.style.display = "block";

		  dbLink.onclick = function(){
			  window.open('https://www.dropbox.com/sh/w4avumnjaqfbv55/AAA9CjZjxvEh82F3aqU5DJZCa?dl=0', '_blank');
		  }
	  }
