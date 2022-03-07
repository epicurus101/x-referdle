async function loadFileAndPrintToConsole(url) {
    try {
      const response = await fetch(url);
      const data = await response.text();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  }
  

loadFileAndPrintToConsole('/wiki-100k.txt');



const gameContainer = document.querySelector('.game-container')
const wordList = ["one", "two", "three", "four", ]


const buttonElement = document.createElement('button')
buttonElement.textContent = "hi friend!"
buttonElement.setAttribute('id', "yolo")
buttonElement.addEventListener('click', () => handleClick())
gameContainer.appendChild(buttonElement)

const textElement = document.createElement('div')
textElement.textContent = ''
gameContainer.appendChild(textElement)

function handleClick(){
    console.log('clicked')
    let ind = getRandomInt(wordList.length)
    textElement.textContent = wordList[ind]
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

