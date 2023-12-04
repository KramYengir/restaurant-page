import "../styles/footer.scss";
/* import ship from "../assets/ship-logo.png";
import seagull from "../assets/seagull_2.png"; */

// copyright icon
// <i class="fa-regular fa-copyright"></i>;

const buildFooter = (() => {
  const footer = document.createElement("footer");
  const text = document.createElement("p");
  /*   const imgShip = document.createElement("img");
  const imgSeagull = document.createElement("img"); */

  /*   imgShip.src = ship;
  imgShip.alt = "ship outline";
  imgShip.classList.add("ship-img");

  imgSeagull.src = seagull;
  imgSeagull.alt = "seagull shape";
  imgSeagull.classList.add("seagull-img");
  
  /* footer.appendChild(imgSeagull);
  footer.appendChild(imgShip); */
  text.innerText = `Made by Rigney 2023`;
  footer.appendChild(text);

  return footer;
})();

export default buildFooter;
