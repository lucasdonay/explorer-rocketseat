import Controls from "./controls.js"
import Timer from "./timer.js"
import Sound from "./sounds.js"
import Events from "./events.js"
import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonSet,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js"

import { Modes } from "./modes.js"

const modes = Modes()

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,     
  resetControls: controls.resetControls
})

const sound = Sound()

Events({controls, timer, sound})