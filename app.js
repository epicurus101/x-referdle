



const gameContainer = document.querySelector('.game-container')
let wordList = ["one", "two", "three", "four", ]


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

fetch("https://epicurus101.github.io/x-referdle/shortWordList.json").then(async response => {
    try {
     wordList = await response.json()
     console.log('response data?', wordList)
   } catch(error) {
     console.log('Error happened here!')
     console.error(error)
   }
  })



// fetch("https://epicurus101.github.io/x-referdle/shortWordList.json")
// .then(response => {
//    return response.json();
// })
// .then(jsondata => console.log(jsondata));

// async function loadFileAndPrintToConsole(url) {
//     try {
//       const response = await fetch(url);
//       const data = await response.text();
//       console.log(data);
//     } catch (err) {
//       console.error(err);
//     }
//   }
  

//loadFileAndPrintToConsole('https://epicurus101.github.io/x-referdle/wiki-100k.txt');