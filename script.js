let songTitle;
let outputGrid;
let singleSong;

let songCollection = [
  {
    "songName" : "Anti-Hero",
    "category" : "taylor",
    "id" : "antihero",
    "artist" : "Taylor Swift",
    "image" : "antihero.png"
  },
  {
    "songName" : "I'm Still Standing",
    "category" : "elton",
    "id" : "stillstanding",
    "artist" : "Elton John",
    "image" : "stillstanding.jpg"
  },
  {
    "songName" : "Rocket Man",
    "category" : "elton",
    "id" : "rocketman",
    "artist" : "Elton John",
    "image" : "rocketman.jpeg"
  },
  {
    "songName" : "Tiny Dancer",
    "category" : "elton",
    "id" : "tinydancer",
    "artist" : "Elton John",
    "image" : "tinydancer.png"
  },
  {
    "songName" : "Blank Space",
    "category" : "taylor",
    "id" : "blankspace",
    "artist" : "Taylor Swift",
    "image" : "blankspace.png"
  },
  {
    "songName" : "I Guess That's Why They Call It The Blues",
    "category" : "elton",
    "id" : "theblues",
    "artist" : "Elton John",
    "image" : "theblues.jpeg"
  },
  {
    "songName" : "Love Story",
    "category" : "taylor",
    "id" : "lovestory",
    "artist" : "Taylor Swift",
    "image" : "lovestory.png"
  },
];

document.addEventListener("DOMContentLoaded", function(){
  songTitle = document.getElementById("songTitle");
  outputGrid = document.getElementById("outputGrid");
  singleSong = document.getElementById("singleSong");

  let lookup = window.location.search;
  let params = new URLSearchParams(lookup);
  let page = params.get('page');
  let id = params.get('id');

  if (page != "song") {
    if (page == "elton") {
      nav3.style.textDecoration = "underline";
    }
    else if (page == "taylor") {
      nav1.style.textDecoration = "underline";
    }
    else{
      nav2.style.textDecoration = "underline";
    }

    for (let i = 0; i < songCollection.length; i++) {
      if (songCollection[i]["category"] == page || page == null){
        songGrid(songCollection[i]);
      }
    }
  }

  else {
    for (let i = 0; i < songCollection.length; i++) {
      if (songCollection[i]["id"] == id) {
        songPage(songCollection[i]);
        outputGrid.style.margin = "10px";
      }
    }
  }
});


function songGrid(songJSON){

  let link = document.createElement("A");
  link.href = "index.html?page=song&id=" + songJSON["id"];

  let song = document.createElement("DIV");
  link.appendChild(song);

  let songName = document.createElement("H2");
  songName.classList.add("previewTitle");
  songName.innerText = songJSON["songName"];
  song.appendChild(songName);

  let img = document.createElement("IMG");
  img.classList.add("thumbnail");
  img.src = songJSON["image"];
  song.appendChild(img);

  outputGrid.appendChild(link);

}

function songPage(songJSON) {

  songTitle.innerText = songJSON["songName"];
  let songPage = document.createElement("DIV");
  let songImage = document.createElement("IMG");
  songImage.classList.add("songImage");
  songImage.src = songJSON["image"];
  songPage.appendChild(songImage);

  let songDescription = document.createElement("P");
  songDescription.classList.add("artist");
  songDescription.innerText = "Song by " + songJSON["artist"];
  songPage.appendChild(songDescription);

  singleSong.appendChild(songPage);

}
