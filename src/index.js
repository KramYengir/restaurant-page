import './style.css';

const body = document.querySelector('body');

function makeDiv(){
    const div = document.createElement('div');
    div.textContent = 'Working fine...';

    return div;
}

body.appendChild(makeDiv());