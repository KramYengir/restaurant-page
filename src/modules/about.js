import '../styles/about.scss';

const buildAboutpage = (()=>{

    const textContent = [
        'Ferryhill, what a place to be, bal blab blabalb',
        'hjgfj sdgf jgsd fgs dhgfjgs djf g hds gfjgd hddfsg jdhg f',
        'hjgfj sdgf jgsd fgs dhgfjgs djf g hds gfjgd hddfsg jdhg f',
        'hjgfj sdgf jgsd fgs dhgfjgs djf g hds gfjgd hddfsg jdhg f',    
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

        container.appendChild(imgContainer);
        container.appendChild(textContainer);
        
    }


    return container;

})();

export default buildAboutpage;