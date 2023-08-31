import '../styles/about.scss';

const buildAboutpage = (()=>{

    const textContent = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus ultrices enim sed ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis posuere orci.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus ultrices enim sed ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis posuere orci.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus ultrices enim sed ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis posuere orci.',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus ultrices enim sed ornare. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quis posuere orci.'
    ]

    const container = document.createElement('div');
    container.id = 'about-container';

    
    for(let i = 1; i<4; i++){

        let imgContainer = document.createElement('div');
        imgContainer.classList.add('img-container');
        imgContainer.id = `img-${i}`;

        let textContainer = document.createElement('div');
        textContainer.classList.add('text-container');
        textContainer.id = `text-${i}`;
        textContainer.textContent = `${textContent[i-1]}`;

        let section = document.createElement('div');
        section.classList.add('section')

        section.appendChild(imgContainer);
        section.appendChild(textContainer);

        section.id = `section-${i}`;

        /* let seperator = document.createElement('div');
        seperator.classList.add('seperator'); */

        container.appendChild(section);
        /* container.appendChild(textContainer); */
        /* container.appendChild(seperator); */
        
    }


    return container;

})();

export default buildAboutpage;