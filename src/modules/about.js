import '../styles/about.scss';
import mikeAmeliaImg from '../assets/mike-amelia.jpg';
import christosImg from '../assets/christos.png';
import menuImg from '../assets/inside-store.png';

const buildAboutpage = (()=>{

    const images = [mikeAmeliaImg, christosImg, menuImg];

    const textContent = [];
    textContent[0] = 
        `Ferryhill Fish and Chips is a family-run business established in 
        2013 by husband and wife, Mike and Amelia.
        With over 30 years working within the industry, 
        we bring our knowledge and passion to provide quality food and 
        good friendly service to our customers.`;
    textContent[1] = 
        `Under the stewardship of nephew Christos since 2020, our shop has 
        flourished, garnering consistent 5-star reviews on Google. 
        Our menu continues to evolve, and we are proud to have been voted 
        the best chippy in Manchester by readers of salfordnow.co.uk in 2023.`;
    textContent[2] = 
        `Our ever-expanding menu continues to add a 
        diverse selection of vegan, vegetarian, and gluten-free options, 
        catering to a wide range of dietary preferences.`;
    textContent[3] = 
        `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Pellentesque finibus ultrices enim sed ornare. Orci varius natoque 
        penatibus et magnis dis parturient montes, nascetur ridiculus mus. 
        Donec quis posuere orci.`;

    const container = document.createElement('div');
    container.id = 'about-container';

    
    for(let i = 0; i < textContent.length-1; i++){

        let img = document.createElement('img');
        img.classList.add('img');
        img.id = `img-${i}`;
        img.src = images[i];

        let textContainer = document.createElement('div');
        textContainer.classList.add('text-container');
        textContainer.id = `text-${i}`;
        textContainer.textContent = `${textContent[i]}`;

        let section = document.createElement('div');
        section.classList.add('section')

        section.appendChild(img);
        section.appendChild(textContainer);

        section.id = `section-${i}`;

        container.appendChild(section);
        
    }


    return container;

})();

export default buildAboutpage;