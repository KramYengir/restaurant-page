import '../styles/about.scss';

const buildAboutpage = (()=>{
    const container = document.createElement('div');
    container.id = 'about-container';
    
    const box = document.createElement('div');
    box.id = 'about-box';

    container.appendChild(box);

    return container;

})();

export default buildAboutpage;