import './styles/main.scss';
import header from './header.js';
import homepage from './homepage.js';
import footer from './footer.js';


let currentPage;

const content = document.getElementById('content');

content.appendChild(header);
content.appendChild(homepage);
content.appendChild(footer);


