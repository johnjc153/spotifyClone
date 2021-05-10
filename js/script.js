const container = document.querySelector(".container"),
musicImg = container.querySelector(".img-area img"),
musicName = container.querySelector(".song-details .song-name"),
musicArtist = container.querySelector(".song-details .artist"),
mainAudio = container.querySelector("#main-audio"),
playPauseBtn = container.querySelector(".play-pause"),
prevBtn = container.querySelector("#prev"),
nextBtn = container.querySelector("#next");

let musicIndex = 1;

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
    playPauseBtn.querySelector("i").innerText = "pause";
    mainAudio.play();
}

//pause music
function pauseMusic(){
    container.classList.remove("paused");
    playPauseBtn.querySelector("i").innerText = "play_arrow";
    mainAudio.pause();
}

// next music funtionn
function nextMusic(){
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}

function prevMusic(){
    musicIndex--;
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex);
    playMusic();
}

//button event
playPauseBtn.addEventListener("click", ()=>{
    const isMusicPaused = container.classList.contains("paused");
    // if isMusicPaused is true then cal pauseMusic else call playMusic
    isMusicPaused ? pauseMusic() : playMusic();
});

// next btn
nextBtn.addEventListener("click", ()=>{
    nextMusic();
    console.log(musicIndex - 1);
});

//prev btn
prevBtn.addEventListener("click", ()=>{
    prevMusic();
    console.log(musicIndex - 1);
});