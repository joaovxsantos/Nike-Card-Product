const colorButtons = document.querySelectorAll('.color');
const images = document.querySelectorAll('.images img');
const body = document.body;
const sizeButtons = document.querySelectorAll('.button-nums span');
const priceElement = document.querySelector('#price');

colorButtons.forEach((button, indx) => {
    button.addEventListener('click', () => {
        images.forEach((img) => img.classList.remove('active'))
        indx === 0 ? body.classList = '' : body.classList = 'change'
        images[indx].classList.add('active')
    })
})

sizeButtons.forEach((sizeButton) => {
    sizeButton.addEventListener('click', () => {

        const valueSize = +sizeButton.innerHTML

        sizeButtons.forEach((img) => img.classList.remove('active'))
        sizeButton.classList.add('active');

        if (valueSize <= 7) {
            priceElement.innerHTML = '300,00'
        }
        else if (valueSize > 7 && valueSize < 10) {
            priceElement.innerHTML = '350,00'
        } else {
            priceElement.innerHTML = '450,00'
        }
    })
})