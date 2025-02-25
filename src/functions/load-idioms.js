import showIdiomHint from './show-idiom-hint.js';

const idioms = [
    'crossed the line',
    'a little overkill',
    'don\'t get me wrong',
    'easier said than done',
    'out of the blue',
    'it just isn\'t done',
    'I\'m drawing a blank',
    'butterflies in my stomach',
    'run-of-the-mill',
    'have a good intuitive sense',
    'gotten carried away',
    'the cat\'s out of the bag',
    'I\'m toast',
    'par for the course',
    'mark my word',
    'be in bad taste'
];

function loadIdioms(element) {
    idioms.forEach(idiom => {
        const regex = new RegExp(`(${idiom})`, 'gi');
        element.innerHTML = element.innerHTML.replace(
            regex, 
            `<span class="highlighted-idiom" data-idiom="$1">$1</span>`
        );
    });

    document.addEventListener('click', function(event) {
        if(event.target.classList.contains('highlighted-idiom')) {
            const idiom = event.target.dataset.idiom;
            showIdiomHint(event, idiom);
        }
    });
}

export default loadIdioms;