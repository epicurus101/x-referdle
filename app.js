
const boardContainer = document.querySelector('.board-container')

for (let i = 0; i < 6; i++) {
    console.log(i)
    const board = document.createElement('div')
    board.classList.add('board')
    board.textContent = i
    boardContainer.append(board)
}




// let expandedWordList = []

// function getRandomInt(max) {
//     return Math.floor(Math.random() * max);
// }

// let wordle

// const getWordle = () => {
//     wordle = wordList[getRandomInt(wordList.length)]
// }


// fetch("https://epicurus101.github.io/x-referdle/shortWordList.json").then(async response => {
//     try {
//         wordList = await response.json()
//         console.log('response data?', "success!")
//         getWordle()
//     } catch (error) {
//         console.log('Error happened here!')
//         console.error(error)
//     }
// })

// fetch("https://epicurus101.github.io/x-referdle/longWordList.json").then(async response => {
//     try {
//         expandedWordList = await response.json()
//         console.log('response data?', "success!")
//     } catch (error) {
//         console.log('Error happened here!')
//         console.error(error)
//     }
// })

// const tileDisplay = document.querySelector('.tile-container')
// const keyboard = document.querySelector('.key-container')
// const messageDisplay = document.querySelector('.message-container')

// const keys = [
//     'Q',
//     'W',
//     'E',
//     'R',
//     'T',
//     'Y',
//     'U',
//     'I',
//     'O',
//     'P',
//     'A',
//     'S',
//     'D',
//     'F',
//     'G',
//     'H',
//     'J',
//     'K',
//     'L',
//     'ENTER',
//     'Z',
//     'X',
//     'C',
//     'V',
//     'B',
//     'N',
//     'M',
//     '«',
// ]
// const guessRows = [
//     ['', '', '', '', ''],
//     ['', '', '', '', ''],
//     ['', '', '', '', ''],
//     ['', '', '', '', ''],
//     ['', '', '', '', ''],
//     ['', '', '', '', '']
// ]
// let currentRow = 0
// let currentTile = 0
// let isGameOver = false

// guessRows.forEach((guessRow, guessRowIndex) => {
//     const rowElement = document.createElement('div')
//     rowElement.setAttribute('id', 'guessRow-' + guessRowIndex)
//     guessRow.forEach((_guess, guessIndex) => {
//         const tileElement = document.createElement('div')
//         tileElement.setAttribute('id', 'guessRow-' + guessRowIndex + '-tile-' + guessIndex)
//         tileElement.classList.add('tile')
//         rowElement.append(tileElement)
//     })
//     tileDisplay.append(rowElement)
// })

// keys.forEach(key => {
//     const buttonElement = document.createElement('button')
//     buttonElement.textContent = key
//     buttonElement.setAttribute('id', key)
//     buttonElement.addEventListener('click', () => handleClick(key))
//     keyboard.append(buttonElement)
// })

// const handleClick = (letter) => {
//     if (!isGameOver) {
//         if (letter === '«') {
//             deleteLetter()
//             return
//         }
//         if (letter === 'ENTER') {
//             checkRow()
//             return
//         }
//         addLetter(letter)
//     }
// }

// const addLetter = (letter) => {
//     if (currentTile < 5 && currentRow < 6) {
//         const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
//         tile.textContent = letter
//         guessRows[currentRow][currentTile] = letter
//         tile.setAttribute('data', letter)
//         currentTile++
//     }
// }

// const deleteLetter = () => {
//     if (currentTile > 0) {
//         currentTile--
//         const tile = document.getElementById('guessRow-' + currentRow + '-tile-' + currentTile)
//         tile.textContent = ''
//         guessRows[currentRow][currentTile] = ''
//         tile.setAttribute('data', '')
//     }
// }

// const checkRow = () => {
//     const guess = guessRows[currentRow].join('')
//     if (currentTile > 4) {
//         if (!expandedWordList.includes(guess)) {
//             showMessage('word not in list')
//             return
//         } else {
//             flipTile()
//             if (wordle == guess) {
//                 showMessage('Magnificent!')
//                 isGameOver = true
//                 return
//             } else {
//                 if (currentRow >= 5) {
//                     isGameOver = true
//                     showMessage('Game Over')
//                     return
//                 }
//                 if (currentRow < 5) {
//                     currentRow++
//                     currentTile = 0
//                 }
//             }
//         }
//     }

// }


// const showMessage = (message) => {
//     const messageElement = document.createElement('p')
//     messageElement.textContent = message
//     messageDisplay.append(messageElement)
//     setTimeout(() => messageDisplay.removeChild(messageElement), 2000)
// }

// const addColorToKey = (keyLetter, color) => {
//     const key = document.getElementById(keyLetter)
//     key.classList.add(color)
// }

// const flipTile = () => {
//     const rowTiles = document.querySelector('#guessRow-' + currentRow).childNodes
//     let checkWordle = wordle
//     const guess = []

//     rowTiles.forEach(tile => {
//         guess.push({ letter: tile.getAttribute('data'), color: 'grey-overlay' })
//     })

//     guess.forEach((guess, index) => {
//         if (guess.letter == wordle[index]) {
//             guess.color = 'green-overlay'
//             checkWordle = checkWordle.replace(guess.letter, '')
//         }
//     })

//     guess.forEach(guess => {
//         if (checkWordle.includes(guess.letter)) {
//             guess.color = 'yellow-overlay'
//             checkWordle = checkWordle.replace(guess.letter, '')
//         }
//     })

//     rowTiles.forEach((tile, index) => {
//         setTimeout(() => {
//             tile.classList.add('flip')
//             tile.classList.add(guess[index].color)
//             addColorToKey(guess[index].letter, guess[index].color)
//         }, 500 * index)
//     })
// }