import './styles/footer.scss';

const buildFooter = (()=>{

    const footer = document.createElement('footer');
    const home = document.createElement('a');
    const menu = document.createElement('a');
    const contact = document.createElement('a');

    home.textContent = 'Home';
    menu.textContent = 'Menu';
    contact.textContent = 'Contact';

    footer.appendChild(home);
    footer.appendChild(menu);
    footer.appendChild(contact);


    return footer;

})();

export default buildFooter;