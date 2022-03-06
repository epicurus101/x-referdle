const buttonElement = document.createElement('button')
buttonElement.textContent = key
buttonElement.setAttribute('id', key)
buttonElement.addEventListener('click', () => handleClick())

function handleClick(){

    document.write('clicked')
}