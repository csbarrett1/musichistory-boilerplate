var addMusicButton = document.getElementById("addMusic");
var listMusicButton = document.getElementById("listMusic");
var addSong = document.getElementById("addsong");
var listSongs = document.getElementById("listSongs");

addSong.classList.add("hide");

addMusicButton.addEventListener("click", function() {
  event.preventDefault();
  listSongs.classList.add("hide");
  addSong.classList.remove("hide");
})

listMusicButton.addEventListener("click", function() {
  addSong.classList.add("hide");
  listSongs.classList.remove("hide");
})