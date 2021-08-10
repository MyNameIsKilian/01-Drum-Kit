document.addEventListener('DOMContentLoaded', (e) => {

  function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
  }

  HTMLCollection.prototype.forEach = Array.prototype.forEach;
  let myKeys = document.getElementsByClassName('key');
  const btn = document.querySelector(".btn")
  console.log(myKeys)
  myKeys.forEach(key => key.addEventListener('transitionend', (e) => {
    console.log(e)
    e.target.classList.remove('playing')
  }));
  
  window.addEventListener('keydown', playSound);
})