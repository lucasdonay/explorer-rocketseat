import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sound.js"
import Events from "./events.js"
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  buttonSoundOff,
  buttonSoundOn,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js"

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const sound = Sound()

const timer = Timer({
  minutesDisplay, 
  secondsDisplay,
  sound, 
  resetControls: controls.reset  
})

Events({controls, timer, sound})