import "./styles/main.scss";
import header from "./modules/header.js";
import homepage from "./modules/homepage.js";
import menu from "./modules/menu.js";
import contact from "./modules/contact.js";
import about from "./modules/about.js";
import footer from "./modules/footer.js";

const pages = [homepage, menu, about, contact];
const pageNames = ["", "menu", "about", "contact"];

const content = document.getElementById("content");
const contentMain = document.createElement("div");
let currentPage = homepage;

// keep current page after reload
let lastPageIndex = sessionStorage.getItem("lastPageIndex");

if (lastPageIndex) {
  currentPage = pages[lastPageIndex];
}

contentMain.id = "content-main";
contentMain.appendChild(currentPage);
content.appendChild(header);
content.appendChild(contentMain);
content.appendChild(footer);

const tabLinks = document.querySelectorAll(".link");

const loadContent = (index) => {
  contentMain.removeChild(currentPage);
  contentMain.appendChild(pages[index]);
  toggleActiveTab(index);
  currentPage = pages[index];
  lastPageIndex = index;
  sessionStorage.setItem("lastPageIndex", index);
  window.scrollTo(0, 0);

  //amend the url
  amendUrlPath(pageNames[index]);
};

const toggleActiveTab = (index) => {
  tabLinks.forEach((el, i) => {
    if (i == index) {
      tabLinks[index].classList.add("active");
    } else {
      tabLinks[i].classList.remove("active");
    }
  });
};

tabLinks.forEach((el, i) => {
  el.addEventListener("click", () => {
    loadContent(el.dataset.index);
  });
});

window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
  loadContent(lastPageIndex);
});

function amendUrlPath(page) {
  const currentUrl = window.location.href;

  // Get the base URL without any path
  const baseUrl = window.location.origin;

  // For homepage
  if (currentPage == pages[0]) {
    history.pushState({}, page, baseUrl);
    return;
  }

  // Check if the page is already in the URL
  if (currentUrl.includes("/" + page)) {
    // Replace the existing occurrence of the page in the URL
    history.pushState({}, page, currentUrl);
  } else {
    // Update the URL without triggering a page reload
    history.pushState({}, page, baseUrl + "/" + page);
  }
}

// to process links to menu, about us and contact page
document.addEventListener("DOMContentLoaded", function () {
  // Check for the path on page load
  const path = window.location.pathname;

  // Load the corresponding module
  if (path === "/home") {
    // Load the menu module
    loadContent(0);
  } else if (path === "/menu") {
    // Load the menu module
    loadContent(1);
  } else if (path === "/about") {
    // Load the contact module
    loadContent(2);
  } else if (path === "/contact") {
    // Load the contact module
    loadContent(3);
  }
});

export { loadContent };
