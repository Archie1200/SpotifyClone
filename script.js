console.log("Welcome to Spotify");
let a= new Audio("songs/1.mp3");
let songIndex=0;
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));
let masterSongName=document.getElementById('masterSongName');
let songs=[
          {songName:"Let me Love You", filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
          {songName:"Rockabye", filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
          {songName:"Heart Attack", filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
          {songName:"Ice Doll", filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
          {songName:"Unstoppable", filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
          {songName:"Bad Habits", filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
          {songName:"Love Sight", filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
]
/*songItems.forEach((element,i)=>{
  element.getElementByTagName('img')[0].src=songs[i].coverPath;
  element.getElementByClassName('songName')[0].innerText=songs[i].songName;
})*/
masterPlay.addEventListener('click',()=>{
  if(a.paused || a.currentTime<=0){
    a.play();
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
    gif.style.opacity=1;
  }
  else{
    a.pause();
    masterPlay.classList.remove('fa-pause');
    masterPlay.classList.add('fa-play');
    gif.style.opacity=0;
  }
})
a.addEventListener("timeupdate",()=>{
   progess= parseInt((a.currentTime/a.duration)*100);
   myProgressBar.value=progess;
})
myProgressBar.addEventListener('change',()=>{
  a.currentTime=myProgressBar.value*a.duration/100;
})
const makeAllPlays= ()=>{
  Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-pause');
    element.classList.add('fa-play');
  })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
  element.addEventListener('click',(e)=>{
    makeAllPlays();
    songIndex=parseInt(e.target.id);
    e.target.classList.remove('fa-play');
    e.target.classList.add('fa-pause');
    /*if(a.paused){
      e.target.classList.remove('fa-pause');
      e.target.classList.add('fa-play');
      a.play();
    }
    else{
      e.target.classList.remove('fa-play');
      e.target.classList.add('fa-pause');
      a.pause();
    }*/
    a.src="songs/"+(songIndex + 1)+".mp3";
    masterSongName.innerText=songs[songIndex].songName;
    a.currentTime=0;
    a.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play');
    masterPlay.classList.add('fa-pause');
  })
})
document.getElementById('next').addEventListener('click',()=>{
  if(songIndex>7){
    songIndex=0;
  }
  else{
    songIndex+=1;
  }
  a.src="songs/"+(songIndex + 1)+".mp3";
  masterSongName.innerText=songs[songIndex].songName;
  a.currentTime=0;
  a.play();
  gif.style.opacity=1;
  masterPlay.classList.remove('fa-play');
  masterPlay.classList.add('fa-pause');
})
document.getElementById('previous').addEventListener('click',()=>{
  if(songIndex<=0){
    songIndex=0;
  }
  else{
    songIndex-=1;
  }
  a.src="songs/"+(songIndex + 1 )+".mp3";
  masterSongName.innerText=songs[songIndex].songName;
  a.currentTime=0;
  a.play();
  gif.style.opacity=1;
  masterPlay.classList.remove('fa-play');
  masterPlay.classList.add('fa-pause');
})
