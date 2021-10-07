let wind = document.getElementById("wind");
let cloud = document.getElementById("cloud");
let back = document.getElementById("back");
let text = document.getElementById("text");
let mid = document.getElementById("mid");
let shrine = document.getElementById("shrine");
let front = document.getElementById("front");

window.addEventListener("scroll", function () {
  let value = window.scrollY;
  cloud.style.left = value * 0.5 + "px";
  back.style.top = value * 0.3 + "px";
  mid.style.top = value * 0.2 + "px";
});

const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')
const SELECTIONS = [
  {
    name: 'Batu',
    hand: 'Batu',
    beats: 'Gunting'
  },
  {
    name: 'Kertas',
    hand: 'Kertas',
    beats: 'Batu'
  },
  {
    name: 'Gunting',
    hand: 'Gunting',
    beats: 'Kertas'
  }
]

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection
    const selection = SELECTIONS.find(selection => selection.name === selectionName)
    makeSelection(selection)
  })
})

function makeSelection(selection) {
  const computerSelection = randomSelection()
  const yourWinner = isWinner(selection, computerSelection)
  const computerWinner = isWinner(computerSelection, selection)

  addSelectionResult(computerSelection, computerWinner)
  addSelectionResult(selection, yourWinner)

  if (yourWinner) incrementScore(yourScoreSpan)
  if (computerWinner) incrementScore(computerScoreSpan)
}

function incrementScore(scoreSpan) {
  scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}

function addSelectionResult(selection, winner) {
  const div = document.createElement('div')
  div.innerText = selection.hand
  div.classList.add('result-selection')
  if (winner) div.classList.add('winner')
  finalColumn.after(div)
}

function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name
}

function randomSelection() {
  const randomIndex = Math.floor(Math.random() * SELECTIONS.length)
  return SELECTIONS[randomIndex]
}