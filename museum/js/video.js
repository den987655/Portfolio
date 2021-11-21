


document.querySelector('#play').onclick = play;
document.querySelector('#pause').onclick = pause;
document.querySelector('#volume').onclick = videoVolume;


let display;


const video = document.querySelector('#video-player');
const progress = document.querySelector('#progress');
// vid
video.ontimeupdate = progressUpdate;
progress.onclick = videoRewind;


function play() {
  video.play();
}
function pause() {
  video.pause();
}
function videoVolume() {
  let v = this.value;
  console.log(v);
  video.volume = v / 100;
}

function progressUpdate() {
  console.log(video.duration);
  console.log(video.currentTime);
  let d = video.duration;
  let c = video.currentTime;
  progress.value = (100 * c) / d;
}
function videoRewind() {
  let w = this.offsetWidth;
  let o = event.offsetX;
  console.log(w);
  console.log(o);
  this.value = 100 * o / w;
  video.pause();
  video.currentTime = video.duration * (o/w);
  video.play();
}
