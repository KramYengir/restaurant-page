import '../styles/about.scss';

const buildAboutpage = (()=>{

    const textContent = [
        'Ferryhill, what a place to be, bal blab blabadfdf dfdf dfdf dlb',
        'hjgfj sdgf jgsd fgs dhgfjgs djf g hds gfjgd hddfsg jdhg dffdffdf fdfdf',
        'hjgfj sdgf jgsd fgs dhgfjgs djf g hds gfjgd hddfsg jdhg fdfdfd dffdfd df fdfdf f',
        'hjgfj sdgf jgsd fgs dhgfjgs djf g hds gfjgd hdfdf dfdf dfdf ddffddfsg jdhg f',    
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

        /* let seperator = document.createElement('div');
        seperator.classList.add('seperator'); */

        container.appendChild(section);
        /* container.appendChild(textContainer); */
        /* container.appendChild(seperator); */
        
    }


    return container;

})();

export default buildAboutpage;