// Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

// HH = hours, padded to 2 digits, range: 00 - 99
// MM = minutes, padded to 2 digits, range: 00 - 59
// SS = seconds, padded to 2 digits, range: 00 - 59
// The maximum time never exceeds 359999 (99:59:59)

function humanReadable(seconds:number):string {
  let h = Math.floor(seconds / 3600)
  let m = Math.floor((seconds - (h * 3600)) / 60)
  let s = Math.floor(seconds - ((h * 3600) + (m * 60)))
  let hrs = `${h}`
  let mins = `${m}`
  let secs = `${s}`
  if (h < 10) {
    hrs = `0${h}`
  }
  if (m < 10) {
    mins = `0${m}`
  }
  if (s < 10) {
    secs = `0${s}`
  }
  return `${hrs}:${mins}:${secs}`
}