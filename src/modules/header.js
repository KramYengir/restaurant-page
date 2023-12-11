import "../styles/header.scss";
import seagullIMG1 from "../assets/seagull_1.png";
import seagullIMG2 from "../assets/seagull_2.png";
import seagullIMG3 from "../assets/seagull_3.png";

const SVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-menu"><line class="lines" x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>`;

const buildHeader = (() => {
  const headerContainer = document.createElement("div");
  const header = document.createElement("header");
  const left = document.createElement("div");
  const right = document.createElement("div");

  const home = document.createElement("a");
  const menu = document.createElement("a");
  const about = document.createElement("a");
  const contact = document.createElement("a");

  const menuButton = document.createElement("button");

  headerContainer.id = "header-container";

  //instead, I'm going to use three divs inside the
  //button to create the hamburger effect
  const line1 = document.createElement("div");
  line1.classList.add("line");
  line1.id = "line1";
  const line2 = document.createElement("div");
  line2.classList.add("line");
  line2.id = "line2";
  const line3 = document.createElement("div");
  line3.classList.add("line");
  line3.id = "line3";

  // seagull images
  const seagullIconA = document.createElement("img");
  seagullIconA.src = seagullIMG1;
  seagullIconA.alt = "Icon of a seagull";
  seagullIconA.id = "seagull-icon-a";
  const seagullIconB = document.createElement("img");
  seagullIconB.src = seagullIMG3;
  seagullIconB.alt = "Icon of another seagull";
  seagullIconB.id = "seagull-icon-b";

  menuButton.appendChild(line1);
  menuButton.appendChild(line2);
  menuButton.appendChild(line3);

  menuButton.setAttribute("aria-label", "Dropdown Menu Button");

  const homeHeading = document.createElement("div");
  homeHeading.id = "home-heading";
  const homeSubHeading = document.createElement("div");
  homeSubHeading.id = "home-sub-heading";
  homeHeading.textContent = "Ferryhill";
  homeSubHeading.textContent = "Fish and Chips";

  left.id = "left-side";
  right.id = "right-side";

  home.id = "home-tab";
  menu.id = "menu-tab";
  about.id = "about-tab";
  contact.id = "contact-tab";

  menuButton.id = "menu-button";

  //set the data-index attribute to we can associate each
  //header link to a page
  home.dataset.index = 0;
  menu.dataset.index = 1;
  about.dataset.index = 2;
  contact.dataset.index = 3;

  home.appendChild(homeHeading);
  home.appendChild(homeSubHeading);
  home.appendChild(seagullIconA);
  home.appendChild(seagullIconB);

  menu.textContent = "Menu";
  about.textContent = "About";
  contact.textContent = "Contact";

  //dropdown box
  const dropDownBox = document.createElement("div");
  dropDownBox.id = "dropdown-box";

  left.appendChild(home);
  right.appendChild(menu);
  right.appendChild(about);
  right.appendChild(contact);

  header.appendChild(left);
  header.appendChild(right);
  header.appendChild(menuButton);
  header.appendChild(dropDownBox);
  headerContainer.appendChild(header);

  /*     home.addEventListener('click', ()=>{
        if(menuButton.classList.contains('active'))
            toggleDropbox();
    }) */

  //add eventlisteners to all links
  //to reset page position
  let headerLinks = [...header.querySelectorAll("a")];
  headerLinks.forEach((el) => {
    el.addEventListener("click", () => {
      window.scrollTo(0, 0);
    });
  });

  menuButton.addEventListener("click", () => {
    toggleDropbox();
  });

  dropDownBox.addEventListener("click", () => {
    toggleDropbox();
  });

  const toggleDropbox = () => {
    dropDownBox.classList.toggle("active");
    menuButton.classList.toggle("active");

    toggleHomeLinkDisplay(dropDownBox.classList.contains("active"));

    if (dropDownBox.classList.contains("active")) {
      dropDownBox.appendChild(home);
      dropDownBox.appendChild(menu);
      dropDownBox.appendChild(about);
      dropDownBox.appendChild(contact);
    } else {
      dropDownBox.removeChild(home);
      dropDownBox.removeChild(menu);
      dropDownBox.removeChild(about);
      dropDownBox.removeChild(contact);
      left.appendChild(home);
      right.appendChild(menu);
      right.appendChild(about);
      right.appendChild(contact);
    }
  };

  const toggleHomeLinkDisplay = (inDropbox) => {
    if (inDropbox) {
      homeHeading.textContent = "Home";
      homeSubHeading.style.display = "none";
    } else {
      homeHeading.textContent = "Ferryhill";
      homeSubHeading.style.display = "block";
    }
  };

  return headerContainer;
})();

export default buildHeader;
