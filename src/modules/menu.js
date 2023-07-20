import '../styles/menu.scss';

const buildMenu = (()=>{
    const container = document.createElement('div');
    container.id = 'container';
    
    const box = document.createElement('div');
    box.id = 'menu-box';

    container.appendChild(box);

    return container;

})();

export default buildMenu;