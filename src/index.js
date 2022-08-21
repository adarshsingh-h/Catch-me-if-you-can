function catchMe(e) {
  e.style.top = getRandom(0, window.innerHeight - e.offsetHeight) + "px";
  e.style.left = getRandom(0, window.innerWidth - e.offsetWidth) + "px";
}

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
