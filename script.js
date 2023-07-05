console.log("MUSIC PLAYER");
let SongIndex = 0;
let audioElement = new Audio('Despacito.mp3');
let masterPlay = document.getElementById('masterPlay');
let ProgressBar = document.getElementById('ProgressBar');
let visualizer = document.getElementById('visualizer');
let SongItems = Array.from(document.getElementsByClassName('SongItem'));
let songs = [{ songName: "Despacito - Song by Luis Fonsi", filePath: "Despacito.mp3", coverPath: "Despacito.jpg" }, 
{ songName: "Night Changes - One Direction", filePath: "Night-Changes.mp3", coverPath: "NightChanges.png" },
{ songName: "Perfect - Song By Ed Sheeran", filePath: "Perfect.mp3", coverPath: "Perfect.jpg" },
{ songName: "Till I Collapse - Song By Eminem", filePath: "Till I Collapse.mp3", coverPath: "Till I Collapse.jpeg" },
{ songName: "Shape of You - Song By Ed Sheeran", filePath: "Shape of You.m4a", coverPath: "ShapeofYou.jpeg" }]


SongItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("SongName")[0].innerText = songs[i].songName;
});

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        visualizer.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        visualizer.style.opacity = 0;
    }

})

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    ProgressBar.value = progress;
})

ProgressBar.addEventListener('change', () => {
    audioElement.currentTime = ProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName("ListPlay")).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName("ListPlay")).forEach((element) => {
    element.addEventListener('click', (Play) => {
        makeAllPlays();
        SongIndex = parseInt(Play.target.id);
        Play.target.classList.remove("fa-play-circle");
        Play.target.classList.add("fa-pause-circle");
        audioElement.src=songs[SongIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        visualizer.style.opacity = 1;
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (SongIndex >= 4) {
        SongIndex = 0
    }
    else {
        SongIndex += 1;
    }
    audioElement.src=songs[SongIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    visualizer.style.opacity = 1;
})

document.getElementById('previous').addEventListener('click', () => {
    if (SongIndex <=0) {
        SongIndex = 0
    }
    else {
        SongIndex -= 1;
    }
    audioElement.src=songs[SongIndex].filePath;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
    visualizer.style.opacity = 1;
})