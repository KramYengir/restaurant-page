import '../styles/contact.scss';
import { Loader } from "@googlemaps/js-api-loader";

const API_KEY = "AIzaSyALqs75llImmdtIhHQ2jopv08LW5cleUYs";

const ADDRESS = `<div class='contact-info contact-heading' id='adrss-heading'>Ferryhill Fish & Chips</div>
                <div class='contact-info'>50 Ferryhill Road,</div>
                <div class='contact-info'>Manchester</div>
                <div class='contact-info'>United Kingdom</div>
                <div class='contact-info contact-heading'>Tel:</div>
                <div class='contact-info'>0161 775 4738</div>
                <div class='contact-info contact-heading'>Email:</div>
                <div class='contact-info'>ferryhillfishandchips@gmail.com</div>
                `
;


const buildContactpage = (()=>{
    const container = document.createElement('div');
    container.id = 'contact-container';

    //CREATE SECTIONS
    const locationSection = document.createElement('div');
    locationSection.classList.add('contact-section');
    locationSection.id = 'location-section';
    
    const socialSection = document.createElement('div');
    socialSection.classList.add('contact-section');
    socialSection.id = 'social-section';

    //CREATE BOXES
    const contactBox = document.createElement('div');
    contactBox.classList.add('box');
    contactBox.innerHTML = ADDRESS;
    
    const mapBox = document.createElement('div');
    mapBox.classList.add('box');
    mapBox.id = 'map';
    mapBox.textContent = 'map box';

    const messageBox = document.createElement('div');
    messageBox.classList.add('box');
    messageBox.textContent = 'message box';
   
    const socialBox = document.createElement('div');
    socialBox.classList.add('box');
    socialBox.textContent = 'social box';

    //APPEND BOXES TO RELEVANT SECTION
    locationSection.appendChild(contactBox);
    locationSection.appendChild(mapBox);

    socialSection.appendChild(messageBox);
    socialSection.appendChild(socialBox);


    //APPEND SECTIOSN TO CONTAINER
    container.appendChild(locationSection);
    container.appendChild(socialSection);

    //GOOGLE MAPS STUFF
    const loader = new Loader({
        apiKey: API_KEY,
        version: "weekly",
      });
      
      loader.load().then(async () => {
        const { Map } = await google.maps.importLibrary("maps");
      
        let map = new Map(mapBox, {
          center: { lat: 53.448156, lng: -2.415962 },
          zoom: 15,
        });

        let location = new google.maps.LatLng(53.448156,-2.415962 );
        let marker = new google.maps.Marker({
            position:location,
            map:map
        });
      });

    return container;

})();

export default buildContactpage;