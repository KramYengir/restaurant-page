import './styles/main.scss';
import header from './modules/header.js';
import homepage from './modules/homepage.js';
import menu from './modules/menu.js';
import contact from './modules/contact.js';
import about from './modules/about.js';
import footer from './modules/footer.js';

let currentPage = homepage;

const pages = [homepage, menu, about, contact];

const content = document.getElementById('content');
const contentMain = document.createElement('div');
contentMain.id = 'content-main';
contentMain.appendChild(currentPage);

content.appendChild(header);
content.appendChild(contentMain);
content.appendChild(footer);

const tabLinks = document.querySelectorAll('a');

const loadContent = (index)=>{
    console.log(index);
    contentMain.removeChild(currentPage);
    contentMain.appendChild(pages[index]);
    currentPage = pages[index];
}

const toggleActiveTab = (index)=>{
    tabLinks.forEach((el,i)=>{
        if(i === index){
            tabLinks[index].classList.add('active')
        }
        else{
            tabLinks[i].classList.remove('active')
            console.log('matching index');
        }
    })
}

tabLinks.forEach((el, i) =>{
    el.addEventListener('click', ()=>{
        loadContent(el.dataset.index);
        toggleActiveTab(i);
    })
})

