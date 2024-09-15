const keys = document.querySelectorAll('.key');

function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0; 
    audio.play(); 
    if (key) key.classList.add('playing'); 
}

function removeTransition(e) {
    if (e.propertyName !== 'transform') return; 
    e.target.classList.remove('playing'); 
}

keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
