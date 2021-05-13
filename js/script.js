const container = document.querySelector(".container"),
musicImg = container.querySelector(".img-area img"),
musicName = container.querySelector(".song-details .song-name"),
musicArtist = container.querySelector(".song-details .artist"),
mainAudio = container.querySelector("#main-audio"),
playPauseBtn = container.querySelector(".play-pause"),
prevBtn = container.querySelector("#prev"),
nextBtn = container.querySelector("#next"),
progressBar = container.querySelector(".progress-bar");

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
    musicIndex++; //iterate over music index
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex; //repeats music at end of array
    loadMusic(musicIndex); //load index
    playMusic(); //play
}
 
//prev music function
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

// update progress bar according to music time
mainAudio.addEventListener("timeupdate", (e)=>{
    const currentTime = e.target.currentTime; //get current time of song
    const duration = e.target.duration; //get duration of song 
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;
    
    let musicCurrentTime = container.querySelector(".current"),
        musicDuration = container.querySelector(".duration");

    mainAudio.addEventListener("loadeddata", ()=>{
        

        //update song duration
        let audioDuration = mainAudio.duration;
        let totalMin = Math.floor(audioDuration / 60);
        let totalSec = Math.floor(audioDuration % 60);
        if(totalSec < 10){
            totalSec = `0${totalSec}`;
        }
        musicDuration.innerText = `${totalMin}:${totalSec}`;

       

    });
    //update current song durration
    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if(currentSec < 10){
         currentSec = `0${currentSec}`;
     }
        musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});