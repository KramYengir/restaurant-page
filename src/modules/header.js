import '../styles/header.scss';

const buildHeader = (()=>{

    const header = document.createElement('header');
    const left = document.createElement('div');
    const right = document.createElement('div');

    const home = document.createElement('a');
    const menu = document.createElement('a');
    const about = document.createElement('a');
    const contact = document.createElement('a');

    const homeHeading = document.createElement('div');
    homeHeading.id = 'home-heading';
    const homeSubHeading = document.createElement('div');
    homeSubHeading.id = 'home-sub-heading';
    homeHeading.textContent = 'Ferryhill'
    homeSubHeading.textContent = "Fish and Chips";

    left.id = 'left-side';
    right.id = 'right-side';
    home.id = 'home-tab';
    menu.id = 'menu-tab';
    about.id = 'about-tab';
    contact.id = 'contact-tab';


    home.appendChild(homeHeading);
    home.appendChild(homeSubHeading);
    menu.textContent = 'Menu';
    about.textContent = 'About';
    contact.textContent = 'Contact';

    left.appendChild(home);
    right.appendChild(menu);
    right.appendChild(about);
    right.appendChild(contact);

    header.appendChild(left);
    header.appendChild(right);



    return header;

})();

export default buildHeader;