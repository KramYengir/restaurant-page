import '../styles/homepage.scss';

const buildHomepage = (()=>{
    const container = document.createElement('div');
    container.id = 'homepage-container';
   
    const welcomeDiv = document.createElement('div');
    welcomeDiv.id = 'welcome';

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