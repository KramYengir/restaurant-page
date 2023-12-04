import "../styles/homepage.scss";

import Slider from "./slider";
import { loadContent } from "../index";

const WELCOME_TITLE = "Welcome to Ferryhill!";
const WELCOME_MSG =
  "Voted Salford's Best Chippy in 2023 by Salfordnow.co.uk readers";
const HOURS_MSG =
  "Be sure to check our social media pages or get in touch with us for up-to-date changes";
const HOURS_INFO = `<div class='heading' id='title'>Opening Hours</div>
                    <div class='heading days'>Mon - Sat</div>
                    <div class='times'>11:30am  -  1:45pm</div>
                    <div class='times'>4:30pm  -  8:30pm</div>
                    <div class='heading days'>Fri</div>
                    <div class='times'>11:30am  -  2:00pm</div>
                    <div class='times'>4:30pm  -  8:30pm</div>
                    <div class='heading days'>Sunday</div>
                    <div class='times'>--closed--</div>
                    `;
const buildHomepage = (() => {
  const container = document.createElement("div");
  container.id = "homepage-container";

  //welcome section
  const welcomeDiv = document.createElement("div");
  welcomeDiv.id = "welcome";

  const welcomeTitle = document.createElement("div");
  welcomeTitle.innerText = WELCOME_TITLE;
  welcomeTitle.id = "welcome-title";

  const welcomeMsg = document.createElement("div");
  welcomeMsg.innerText = WELCOME_MSG;
  welcomeMsg.id = "welcome-msg";

  welcomeDiv.appendChild(welcomeTitle);
  welcomeDiv.appendChild(welcomeMsg);

  //opening hours section
  const openingHoursDiv = document.createElement("div");
  openingHoursDiv.id = "hours";

  const msgAndBtnContainer = document.createElement("div");
  msgAndBtnContainer.classList.add("msg-and-btn-container");

  const hoursMsg = document.createElement("div");
  hoursMsg.id = "hours-msg";
  hoursMsg.innerText = HOURS_MSG;

  const hoursDiv = document.createElement("div");
  hoursDiv.id = "hours-div";

  const hoursInfo = document.createElement("div");
  hoursInfo.id = "hours-info";
  hoursInfo.innerHTML = HOURS_INFO;

  const contactBtn = document.createElement("button");
  contactBtn.innerText = "Find Out More";
  contactBtn.addEventListener("click", () => {
    loadContent(3);
  });

  hoursDiv.appendChild(hoursInfo);

  msgAndBtnContainer.appendChild(hoursMsg);
  msgAndBtnContainer.appendChild(contactBtn);

  openingHoursDiv.appendChild(msgAndBtnContainer);
  openingHoursDiv.appendChild(hoursDiv);

  container.appendChild(welcomeDiv);
  container.appendChild(Slider);
  container.appendChild(openingHoursDiv);

  return container;
})();

export default buildHomepage;
