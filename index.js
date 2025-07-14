let progress = document.getElementById("progress");
let songs = document.getElementById("songs");
let controls = document.getElementById("controls");

songs.onloadedmetadata = function(){
    progress.max = songs.ondurationchange;
    progress.value = songs.currentTime;
    
}

function playPause(){
    if(controls.classList.contains("fa-pause")){
        songs.pause();
        controls.classList.remove("fa-pause");
        controls.classList.add("fa-play");
    }else{
        songs.play();
         controls.classList.add("fa-pause");
        controls.classList.remove("fa-play");
    }
}