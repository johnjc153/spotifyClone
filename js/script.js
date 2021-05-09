const container = document.querySelector(".container"),
musicImg = container.querySelector(".img-area img"),
musicName = container.querySelector(".song-details .song-name"),
musicArtist = container.querySelector(".song-details .artist"),
mainAudio = container.querySelector("#main-audio"),
playPauseBtn = container.querySelector(".play-pause");

let musicIndex = 2;

window.addEventListener("load", ()=> {
    loadMusic(musicIndex);
})


// load le music
function loadMusic(indexNumb){
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    musicImg.src = `images/${allMusic[indexNumb - 1].img}.jpg`;
    mainAudio.src = `songs/${allMusic[indexNumb - 1].src}.mp3`;
}


//play music
function playMusic(){
    container.classList.add("paused");
    mainAudio.play();
}

//pause music
function pauseMusic(){
    container.classList.add("play");
    mainAudio.pause();
}

//button event
playPauseBtn.addEventListener("click", ()=>{
    const isMusicPaused = container.classList.contains("paused");
    // if isMusicPaused is true then cal pauseMusic else call playMusic
    isMusicPaused ? pauseMusic() : playMusic();
});