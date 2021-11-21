const COLLECTION = document.querySelectorAll('.piano-key');
const PIANO = document.getElementById('piano');

const btnLetters = document.querySelector('.btn-letters');
const btnNotes = document.querySelector('.btn-notes');



btnLetters.addEventListener('click', (event) => {
  btnLetters.classList.add('btn-active');
  COLLECTION.forEach((el) => {
    el.classList.add('piano-key-letter');
  });
  btnLetters.classList.remove('btn-active');
})

btnNotes.addEventListener('click', (event) => {
  btnNotes.classList.add('btn-active');
  COLLECTION.forEach((el) => {
    el.classList.remove('piano-key-letter');
  });
  btnNotes.classList.remove('btn-active');
})

function playAudio(event) {
  const audio = new Audio();
  if (event.target.classList.contains('piano-key')) {
    const note = event.target.dataset.note;
    const src = `assets/audio/${note}.mp3`;
    audio.src = src;
    audio.currentTime = 0;
    audio.play();
  }

}


window.addEventListener('keydown', event => {
  const code = event.code.replace('Key', '');
for (key of COLLECTION) {
  if (code === key.dataset.letter) {
    playAudio(key);
  }
}
});

const startSound = (event) => {
  if (event.target.classList.contains('piano-key')) {
    event.target.classList.add('piano-key-active');
    event.target.classList.add('piano-key-active-pseudo');
}
    playAudio(event);
}

const stopSound = (event) => {
  event.target.classList.remove('piano-key-active');
  event.target.classList.remove('piano-key-active-pseudo');
  
}


PIANO.addEventListener('click', (event) => {
  if (event.target.classList.contains('piano-key')) {
    event.target.classList.add('piano-key-active');
    event.target.classList.add('piano-key-active-pseudo');
}
    playAudio(event);
});

PIANO.addEventListener('click', (event) => {
  event.target.classList.remove('piano-key-active');
  event.target.classList.remove('piano-key-active-pseudo');
  
});



const startCorrespondOver = (event) => {
  event.target.classList.add('active');
  COLLECTION.forEach((elem) => {
    elem.addEventListener('mouseover', startSound)
    elem.addEventListener('mouseout', stopSound)
  });
}

const stopCorrespondOver = () => {
  COLLECTION.forEach((elem) => {
    elem.classList.remove('active');
    elem.removeEventListener('mouseover', startSound)
    elem.removeEventListener('mouseout', stopSound)
  });
}
COLLECTION.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    event.target.classList.add('active');
  })
  elem.addEventListener('click', (event) => {
    event.target.classList.remove('active');
  })
}) 
  
PIANO.addEventListener('mousedown', startCorrespondOver, false);
PIANO.addEventListener('mouseup', stopCorrespondOver);
