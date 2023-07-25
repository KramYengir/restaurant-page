import '../styles/homepage.scss';

const TITLE = 'Welcome to Ferryhill';
const MSG = "Voted Salford's Best Chippy 2023 by SalfordNow.co.uk readers";

const buildHomepage = (()=>{
    const container = document.createElement('div');
    container.id = 'homepage-container';
   
    //welcome section
    const welcomeDiv = document.createElement('div');
    welcomeDiv.id = 'welcome';

    const welcomeTitle = document.createElement('div');
    welcomeTitle.innerText = TITLE;
    welcomeTitle.id = 'welcome-title';
    
    const welcomeMsg = document.createElement('div');
    welcomeMsg.innerText = MSG;
    welcomeMsg.id = 'welcome-msg';

    welcomeDiv.appendChild(welcomeTitle);
    welcomeDiv.appendChild(welcomeMsg);

    //news section
    const newsDiv = document.createElement('div');
    newsDiv.id = 'news';

    const openingHoursDiv = document.createElement('div');
    openingHoursDiv.id = 'hours';

    container.appendChild(welcomeDiv);
    container.appendChild(newsDiv);
    container.appendChild(openingHoursDiv);

    return container;

})();

export default buildHomepage;