" use strict";
const music= document.querySelector("audio");
const img= document.querySelector("img"); 
const play=document.querySelector("#play");
const title= document.querySelector("#title"); 
const artist= document.querySelector("#artist"); 
const prev= document.querySelector("#prev"); 
const next= document.querySelector("#next"); 

let isPlaying= false;

// play function
const playMusic= ()=> {
    isPlaying=true;
    music.play();
    play.classList.replace('fa-play','fa-pause');
    img.classList.add("anime");
}

//pause function
const pauseMusic= ()=> {
    isPlaying=false;
    music.pause();
    play.classList.replace('fa-pause','fa-play');
    img.classList.remove("anime");
}

play.addEventListener("click", ()=>{
    if(isPlaying){
        pauseMusic();
    }
    else{
        playMusic();
    }
})

//change data

const songs =[
    {
        name:"Alone",
        title:"Chand Asmano se Lapta",
        artist:"Bhavin Dhanak",
    },
    {
        name:"Sun Sathiya ",
        title:"Sun Sathiya",
        artist:"Divya Kumar",
    },
    {
        name:"ashiqui2",
        title:"Chahun Main Ya naa",
        artist:"Arijit Singh",
    },
    {
        name:"sawan",
        title:"Sawan Aaya Hai",
        artist:"Arijit Singh",
    },
    {
        name:"hangover",
        title:"Hangover",
        artist:"Shreya Ghosal",
    },
    {
        name:"Yaarian",
        title:"Yarian Barish",
        artist:"Gajendra Verma",
    },
    {
        name:"Sajde",
        title:"Sajde",
        artist:"Arijit Singh",
    },

]


// music data change 

const loadSong = (songs) => {
    title.textContent=songs.title;
    artist.textContent=songs.artist;
    music.src="music/" + songs.name + ".mp3";
    img.src="img/" + songs.name + ".jpg";

}

//loadSong(songs[0])
let songIndex=0;

const nextSong=()=>{
    songIndex= (songIndex+1)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}
const prevSong=()=>{
    songIndex= (songIndex - 1 +songs.length)%songs.length;
    loadSong(songs[songIndex]);
    playMusic();
}

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);