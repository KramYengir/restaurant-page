import '../styles/homepage.scss';

const buildHomepage = (()=>{
    const container = document.createElement('div');
    container.id = 'container';
    
    const box = document.createElement('div');
    box.id = 'homepage-box';

    container.appendChild(box);

    return container;

})();

export default buildHomepage;