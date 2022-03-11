
const expContainer = document.querySelector('.exp-container')


for (let i = 0; i < 6; i++) { 
    console.log(i)
    const box = document.createElement('div')
    box.classList.add('exp-box')
    box.textContent = i
    expContainer.append(box)
}