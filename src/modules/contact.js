import '../styles/contact.scss';

const buildContactpage = (()=>{
    const container = document.createElement('div');
    container.id = 'container';
    
    const box = document.createElement('div');
    box.id = 'contact-box';

    container.appendChild(box);

    return container;

})();

export default buildContactpage;