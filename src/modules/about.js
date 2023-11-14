import "../styles/about.scss";
import mikeAmeliaImg from "../assets/mike-amelia.jpg";
import christosImg from "../assets/christos.png";
import painting from "../assets/painting.jpg";
import wrappedFoodImg from "../assets/wrapped-food.png";

const buildAboutpage = (() => {
  const images = [mikeAmeliaImg, christosImg, wrappedFoodImg, painting];
  const headings = [
    "Our Beginnings...",
    "Our Standards...",
    "Our Food...",
    "Our Community...",
  ];

  const textContent = [];
  textContent[0] = `Ferryhill Fish and Chips is a family-run business established in 
        2013 by husband and wife, Mike and Amelia.
        With over 30 years working within the industry, 
        we bring our knowledge and passion to provide quality food and 
        good friendly service to our customers.`;
  textContent[1] = `Under the stewardship of nephew Christos since 2020, our shop has 
        flourished, garnering consistent 5-star reviews on Google. 
        Our menu continues to evolve, and we are proud to have been voted 
        the best chippy in Manchester by readers of salfordnow.co.uk in 2023.`;
  textContent[2] = `Our ever-expanding menu continues to add a 
        diverse selection of vegan, vegetarian, and gluten-free options, 
        catering to a wide range of dietary preferences. Crafted with care and the 
        finest ingredients, our dishes maintain the high standards our 
        customers have come to expect.`;
  textContent[3] = `We're deeply rooted in our local community, actively supporting 
        charitable causes through fundraisers, participating in local events, and 
        proudly backing our local football team.`;

  const container = document.createElement("div");
  container.id = "about-container";

  for (let i = 0; i < textContent.length; i++) {
    let img = document.createElement("img");
    img.classList.add("img");
    img.id = `img-${i}`;
    img.src = images[i];

    let textContainer = document.createElement("div");
    textContainer.classList.add("text-container");
    textContainer.id = `text-${i}`;
    let heading = document.createElement("h3");
    heading.textContent = headings[i];
    let paragraph = document.createElement("p");
    paragraph.textContent = `${textContent[i]}`;
    textContainer.appendChild(heading);
    textContainer.appendChild(paragraph);

    let section = document.createElement("div");
    section.classList.add("section");

    section.appendChild(img);
    section.appendChild(textContainer);

    section.id = `section-${i}`;

    container.appendChild(section);
  }

  return container;
})();

export default buildAboutpage;
