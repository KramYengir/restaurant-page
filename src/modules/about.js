import '../styles/about.scss';

const buildAboutpage = (()=>{

    const textContent = [
        `Ferryhill Fish and Chips is a family-run business established in 
        2013 by husband and wife, Mike and Amelia.
        With over 30 years working within the industry, 
        we bring our knowledge and passion to provide quality food and 
        good friendly service to our customers.`,
        `Under the stewardship of nephew Christos since 2020, our shop has flourished, 
        garnering consistent 5-star reviews on Google. 
        Our menu continues to evolve, and we are proud to have been voted 
        the best chippy in Manchester by readers of salfordnow.co.uk in 2023.`,
        `Under Christos's leadership, the menu has expanded to include a diverse selection of vegan, vegetarian, and gluten-free options, catering to a wide range of dietary preferences.`,
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