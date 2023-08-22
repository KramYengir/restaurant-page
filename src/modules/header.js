import '../styles/header.scss';

const SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line class="lines" x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;

const buildHeader = (()=>{

    const header = document.createElement('header');
    const left = document.createElement('div');
    const right = document.createElement('div');

    const home = document.createElement('a');
    const menu = document.createElement('a');
    const about = document.createElement('a');
    const contact = document.createElement('a');

/*     const dropdownMenu = document.createElement('a');
    dropdownMenu.classList.add('dropdown-link');
    dropdownMenu.textContent = 'Menu';
    const dropdownAbout = document.createElement('a');
    dropdownAbout.classList.add('dropdown-link');
    dropdownAbout.textContent = 'About';
    const dropdownContact = document.createElement('a');
    dropdownContact.classList.add('dropdown-link');
    dropdownContact.textContent = 'Contact'; */


    const menuButton = document.createElement('button');
    //add svg to menu button
    menuButton.innerHTML = SVG;

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

    menuButton.id = 'menu-button';

    //set the data-index attribute to we can associate each
    //header link to a page
    home.dataset.index = 0;
    menu.dataset.index = 1;
    about.dataset.index = 2;
    contact.dataset.index = 3;

    home.appendChild(homeHeading);
    home.appendChild(homeSubHeading);
    menu.textContent = 'Menu';
    about.textContent = 'About';
    contact.textContent = 'Contact';

    //dropdown box
    const dropDownBox = document.createElement('div');
    dropDownBox.id = 'dropdown-box'; 
    
    left.appendChild(home);
    right.appendChild(menu);
    right.appendChild(about);
    right.appendChild(contact);
    
    
    
    header.appendChild(left);
    header.appendChild(right);
    menuButton.appendChild(dropDownBox);
    header.appendChild(menuButton);
    
    menuButton.addEventListener('click', ()=>{
        dropDownBox.classList.toggle('active');
        if(dropDownBox.classList.contains('active')){
            dropDownBox.appendChild(menu);
            dropDownBox.appendChild(about);
            dropDownBox.appendChild(contact)

        }
        else{
            dropDownBox.removeChild(menu);
            dropDownBox.removeChild(about);
            dropDownBox.removeChild(contact);
            right.appendChild(menu);
            right.appendChild(about);
            right.appendChild(contact);
        }
    })

    return header;

})();

export default buildHeader;