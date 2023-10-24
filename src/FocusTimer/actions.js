import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle('running')

  timer.countdown()
  sounds.buttonPressAudio.play()
}

export function stop() {
  state.isRunning = false
  document.documentElement.classList.remove('running')

  timer.updateDisplay()
  sounds.buttonPressAudio.play()
}

export function plusFiveMinutes() {
  let currentMinutes = parseInt(el.minutes.textContent);
  let currentSeconds = parseInt(el.seconds.textContent);

  currentMinutes += 5;

  el.minutes.textContent = currentMinutes.toString().padStart(2, "0");
  el.seconds.textContent = currentSeconds.toString().padStart(2, "0");

  sounds.buttonPressAudio.play()
}

export function lessFiveMinutes() {
  let currentMinutes = parseInt(el.minutes.textContent);
  let currentSeconds = parseInt(el.seconds.textContent);

  currentMinutes -= 5;

  if (currentMinutes < 0) {
    currentMinutes = 0;
  }

  el.minutes.textContent = currentMinutes.toString().padStart(2, "0");
  el.seconds.textContent = currentSeconds.toString().padStart(2, "0");

  sounds.buttonPressAudio.play()
}

function toggleMusicClass(button) {
  button.classList.toggle('music-on'); 
  const musicButtons = document.querySelectorAll('#controlsMusic button');

  musicButtons.forEach(otherButton => {
    if (otherButton !== button) {
      otherButton.classList.remove('music-on'); 
    }
  });
}

let currentPlayingMusic = null;

function playMusicWithToggle(audio, button) {
  toggleMusicClass(button);

  if (currentPlayingMusic === audio.audio) {
    currentPlayingMusic.pause();
    currentPlayingMusic = null;
  } else {
    if (currentPlayingMusic) {
      currentPlayingMusic.pause();
    }
    audio.audio.loop = true;
    audio.audio.play();
    currentPlayingMusic = audio.audio;
  }

}
export function playMusicRain(event) {
  const  audio  = sounds.musicConfig.rain;
  playMusicWithToggle(audio, event.target);

}

export function playMusicForest(event) {
  const  audio = sounds.musicConfig.forest;
  playMusicWithToggle(audio, event.target);

}

export function playMusicFireplace(event) {
  const  audio = sounds.musicConfig.fireplace;
  playMusicWithToggle(audio, event.target);

}

export function playMusicWave(event) {
  const  audio = sounds.musicConfig.wave;
  playMusicWithToggle(audio, event.target);

}

