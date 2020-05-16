import { slides, max, slideTimeout } from './constants.js';

let carousellIndex = 1;
const nextButton = document.querySelector('#next');
const backButton = document.querySelector('#back');

const handleNextSlide = () => {
    if (carousellIndex === max) {
        return carousellIndex = 1;
    }

    return carousellIndex = carousellIndex + 1;
}

const handlePrevSlide = () => {
    if (carousellIndex === 1) {
        return carousellIndex = max;
    }

    return carousellIndex = carousellIndex - 1;
}

nextButton.addEventListener('click', handleNextSlide);
backButton.addEventListener('click', handlePrevSlide);