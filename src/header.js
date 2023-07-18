import './styles/header.scss';

const buildHeader = (()=>{

    const header = document.createElement('header');
    const home = document.createElement('a');
    const menu = document.createElement('a');
    const contact = document.createElement('a');

    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';

    header.appendChild(home);
    header.appendChild(menu);
    header.appendChild(contact);


    return header;

})();

export default buildHeader;