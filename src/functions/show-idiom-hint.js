function showIdiomHint(event, idiom) {
    const meanings = {
        'crossed the line': 'To go beyond what is acceptable',
        'a little overkill': 'More than necessary',
        'don\'t get me wrong': 'Don\'t misunderstand me',
        'easier said than done': 'More difficult to do than to talk about',
        'out of the blue': 'Unexpectedly',
        'it just isn\'t done': 'It\'s not acceptable behavior',
        'i\'m drawing a blank': 'Cannot remember or think of something',
        'butterflies in my stomach': 'Nervous feeling',
        'run-of-the-mill': 'Ordinary, nothing special',
        'have a good intuitive sense': 'Understanding without conscious reasoning',
        'gotten carried away': 'Become overly excited or enthusiastic',
        'the cat\'s out of the bag': 'The secret has been revealed',
        'i\'m toast': 'I\'m in serious trouble',
        'par for the course': 'What is normal or expected',
        'mark my words': 'Remember what I\'m saying',
        'be in bad taste': 'Inappropriate or offensive'
    };
    idiom = idiom.toLowerCase();

    const hintBox = document.createElement('div');
    hintBox.className = 'idiom-hint';
    hintBox.innerHTML = `
        <h3>${idiom}</h3>
        <p>${meanings[idiom]}</p>
    `;
    
    // Position hint box at cursor
    hintBox.style.position = 'fixed';
    hintBox.style.left = `${event.clientX}px`;
    hintBox.style.top = `${event.clientY}px`;
    
    event.target.appendChild(hintBox);
    
    // Remove hint box after 5 seconds or on click
    document.addEventListener('click', () => hintBox.remove());
    setTimeout(() => {
        hintBox.remove();
    }, 5000);
}

export default showIdiomHint;
