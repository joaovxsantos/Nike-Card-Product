const colorButtons = document.querySelectorAll('.color');
const images = document.querySelectorAll('.images img');
const body = document.body;
const sizeButtons = document.querySelectorAll('.button-nums span');


colorButtons.forEach((button, indx) => {
    button.addEventListener('click', () => {
        images.forEach((img) => img.classList.remove('active'))
        indx === 0 ? body.classList = '' : body.classList = 'change'
        images[indx].classList.add('active')
    })
})

sizeButtons.forEach((sizeButton) => {
    sizeButton.addEventListener('click', () => {
        sizeButtons.forEach((img) => img.classList.remove('active'))
        sizeButton.classList.add('active');
    })
})