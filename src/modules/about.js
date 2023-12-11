import "../styles/about.scss";
import communityImg from "../assets/FH_christos-pitchside-cropped.jpg";
import christosImg from "../assets/FH_christos-cropped.jpeg";
import painting from "../assets/painting.jpg";
import foodImg from "../assets/FH_fish-meal-1.jpeg";

const buildAboutpage = (() => {
  const images = [painting, christosImg, foodImg, communityImg];
  const altMsgs = [
    "A painting of the front fo the chip shop, with customers sitting outside",
    "The owner and head fryer, Christos, proudly standing beside his station",
    "Some tasty looking fish and chips resting on some paper before they get wrapped up",
    "The owner and head fryer, Christos, proudly posing beside a pitchside ad board for his chip shop",
  ];

  const headings = [
    "Our Beginnings...",
    "Our Standards...",
    "Our Food...",
    "Our Community...",
  ];

  const textContent = [];
  textContent[0] = `Ferryhill Fish and Chips, a family-run establishment since 2013, 
            leverages over 30 years of industry expertise. Our commitment is to bring
             a blend of knowledge and passion, ensuring our customers experience
              top-notch food and warm, friendly service.`;
  textContent[1] = `Under the stewardship of Christos since 2020, our shop has 
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
    img.alt = altMsgs[i];

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
