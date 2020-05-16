import { SLIDES, MAX, PRESENTATION_TIMEOUT } from './constants.js';

const pausePresentation = false;

// img-container

let carousellIndex = 1;
const nextButton = document.querySelector('#next');
const backButton = document.querySelector('#back');

const slidesIndicatorsContainer = document.querySelector('.carrousell-index-container');
const slidesIndicators = document.querySelectorAll('.carrousell-index');

const home = document.querySelector('section.home');
const coverContainer = document.querySelector('#site-cover-container');
const cover = document.querySelector('#site-cover');
const descriptionTitle = document.querySelector('#description-title');
const descriptionParagraph = document.querySelector('#description-paragraph');
const seeMore = document.querySelector('#see-more');
const descriptionOuterContainer = document.querySelector('.description');
const descriptionInnerContainer = document.querySelector('#decription-container');
const seoWordsInjector = document.querySelector('#seo-words-injector');

const clearActiveClass = () => slidesIndicators.forEach(indicator => indicator.classList.remove('active'));
const activeIndicator = () => slidesIndicators[carousellIndex - 1].classList.add('active');

const setSeeMorePosition = () => {
    const descriptionInnerContainerHeight = descriptionInnerContainer.offsetHeight;
    const descriptionOuterContainerHeight = descriptionOuterContainer.offsetHeight;
    const seeMoreHeight = seeMore.offsetHeight;

    const position = descriptionOuterContainerHeight - descriptionInnerContainerHeight - seeMoreHeight;
    seeMore.style.transform = `translateY(-${position}px)`;
}

const alterSlide = () => {
    const { description, title, img, ancor, homeBg } = SLIDES[carousellIndex - 1];

    const animate = (element, attribute, css) => {
        element.style[css.property] = css.initialValue;

        setTimeout(() => element[attribute.attr] = attribute.value, 200);
        setTimeout(() => {
            element.style[css.property] = css.finalValue;
            home.style.background = homeBg;
        }, 200);
        setTimeout(() => setSeeMorePosition(), 201);
    }

    animate(
        descriptionTitle,
        { attr: 'innerHTML', value: title },
        { property: 'opacity', initialValue: 0, finalValue: 1 },
    );

    animate(
        descriptionParagraph,
        { attr: 'innerHTML', value: description },
        { property: 'opacity', initialValue: 0, finalValue: 1 },
    );

    animate(
        coverContainer,
        {},
        { property: 'opacity', initialValue: 0, finalValue: 1 },
    );

    animate(
        cover,
        { attr: 'src', value: img },
        { property: 'opacity', initialValue: 0, finalValue: 1 },
    );

    seeMore.href = ancor;
}

const nextSlide = () => {
    clearActiveClass(slidesIndicators);

    if (carousellIndex === MAX) {
        carousellIndex = 1;
        activeIndicator(slidesIndicators);
        return alterSlide();
    }

    carousellIndex = carousellIndex + 1;
    activeIndicator(slidesIndicators);
    return alterSlide();
}

const prevSlide = () => {
    clearActiveClass(slidesIndicators);

    if (carousellIndex === 1) {
        carousellIndex = MAX;
        activeIndicator(slidesIndicators);
        return alterSlide();
    }

    carousellIndex = carousellIndex - 1;
    activeIndicator(slidesIndicators);
    return alterSlide();
}

const injectWords = () => {
    let content = '';
    SLIDES.forEach(slide => content += content.concat(slide.description));
    const text = document.createTextNode(content);
    seoWordsInjector.appendChild(text);
    console.log(content)
}

window.onload = () => {
    setSeeMorePosition();

    injectWords();

    slidesIndicators.forEach((indicator) => {
        return indicator.addEventListener('click', (e) => {
            clearActiveClass();

            carousellIndex = Number(e.target.attributes.index.value);

            activeIndicator(slidesIndicators);
            return alterSlide();
        });
    });

    nextButton.addEventListener('click', nextSlide);
    backButton.addEventListener('click', prevSlide);

    setInterval(() => {
        nextSlide();
    }, PRESENTATION_TIMEOUT);
}
