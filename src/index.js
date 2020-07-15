function changeFont () {
  const fonts = [
    "'Odibee Sans', cursive",
    "'Slabo 27px', serif",
    "'Fjalla One', sans-serif",
    "'Arvo', serif",
    "'Indie Flower', cursive"
  ]
  console.log('here')
  const font = Math.floor(Math.random() * Math.floor(fonts.length))

  const fontFamily = fonts[font]
  console.log(fontFamily)

  const jobBullets = document.querySelectorAll('.job_bullets')
  console.log(jobBullets)
  for (let x = 0; x < jobBullets.length; x++) {
    console.log(x)
    jobBullets[x].style.setProperty('--font-name', fontFamily)
  }
}


const AudioContext = window.AudioContext || window.webkitAudioContext
let noAudioButton
let yesAudioButton
let modalContainer
let navButton1, navButton2, navButton3
let audioContext
let audioElement1, audioElement2, audioElement3
let track1, track2, track3
let gainNode
let audio = false

window.onload = (event) => {
  changeFont()
  noAudioButton = document.getElementById('no-audio-button')
  yesAudioButton = document.getElementById('yes-audio-button')
  modalContainer = document.getElementById('modal-container')
  navButton1 = document.getElementById('nav-b1')
  navButton2 = document.getElementById('nav-b2')
  navButton3 = document.getElementById('nav-b3')
  audioElement1 = document.getElementById('audio1')
  audioElement2 = document.getElementById('audio2')
  audioElement3 = document.getElementById('audio3')

  noAudioButton.addEventListener('click', function () {
    modalContainer.style.display = 'none'
    audio = false
    console.log(audio)
  })
  yesAudioButton.addEventListener('click', function () {
    modalContainer.style.display = 'none'
    audio = true
    audioContext = new AudioContext()
    console.log(audioContext)
    gainNode = audioContext.createGain()
    gainNode.connect(audioContext.destination)
    track1 = audioContext.createMediaElementSource(audioElement1)
    track1.connect(gainNode)
    track2 = audioContext.createMediaElementSource(audioElement2)
    track2.connect(gainNode)
    track3 = audioContext.createMediaElementSource(audioElement3)
    track3.connect(gainNode)
  })

  navButton1.addEventListener('mouseenter', function (event) {
    if (audio) {
      gainNode.gain.linearRampToValueAtTime(1.0, audioContext.currentTime + 0.2)
      audioElement1.play()
    }
  })
  navButton1.addEventListener('mouseout', function (event) {
    if (audio) {
      gainNode.gain.linearRampToValueAtTime(0.0, audioContext.currentTime + 0.2)
      audioElement1.pause(0.2)
      audioElement1.currentTime = 0.0
    }
  })
  navButton2.addEventListener('mouseenter', function (event) {
    if (audio) {
      gainNode.gain.linearRampToValueAtTime(1.0, audioContext.currentTime + 0.2)
      audioElement2.play()
    }
  })
  navButton2.addEventListener('mouseout', function (event) {
    if (audio) {
      gainNode.gain.linearRampToValueAtTime(0.0, audioContext.currentTime + 0.2)
      audioElement2.pause(0.2)
      audioElement2.currentTime = 0.0
    }
  })
  navButton3.addEventListener('mouseenter', function (event) {
    if (audio) {
      gainNode.gain.linearRampToValueAtTime(1.0, audioContext.currentTime + 0.2)
      audioElement3.play()
    }
  })
  navButton3.addEventListener('mouseout', function (event) {
    if (audio) {
      gainNode.gain.linearRampToValueAtTime(0.0, audioContext.currentTime + 0.2)
      audioElement3.pause(0.2)
      audioElement3.currentTime = 0.0
    }
  })
}



