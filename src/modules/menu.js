import "../styles/menu.scss";

const menuiteams = {
  fish: {
    haddock: "",
    "- large": "5.80",
    "- small": "3.80",
    cod: "",
    "- large ": "5.80",
    "- small ": "3.80",
    plaice: "6.00",
    "homemade fishcake": "1.90",
    "breaded fishcake": "2.20",
    "salmon & dill": "2.20",
    "calamari rings": "5.50",
    "salt & pepper squid": "5.50",
    "breaded scampi": "4.50",
    "fish barm": "",
    "- large  ": "6.20",
    "- small  ": "4.20",
    "fish bites": "3.00",
    "- 5 pieces": "",
  },
  "chips & more": {
    chips: "",
    "- large": "3.50",
    "- regular": "2.50",
    "- small": "2.10",
    "- cheesy chips add £1": "",
    "chip barm": "2.70",
    scallops: "2.30",
    "- or 50p each": "",
    sausage: "",
    "- large ": "1.85",
    "- small ": "0.95",
  },
  "original holland pies": {
    meat: "2.40",
    "meat & potato": "2.40",
    "cheese & onion": "2.40",
    "chicken & mushroom": "2.40",
    pasty: "2.40",
    "steak & kidney pie": "2.40",
    "steak & kidney pudding": "2.40",
    "peppered steak": "2.40",
    "": "",
    "vegan pies": "",
    "- chicken & mushroom": "3.20",
    "- minced steak & onion": "3.20",
  },
  chicken: {
    "chicken breast": "4.50",
    "100% chicken fillet burger": "3.80",
    "chicken nuggets": "3.80",
    "- portion of 8 or 50p each": "",
  },
  extras: {
    "chicken curry": "6.20",
    "- served with rice/chips or half & half": "",
    "chilli con carne": "6.20",
    "- served with rice/chips or half & half ": "",
    "": "",
    "half rice / half chips & curry": "3.70",
    "sausage dinner": "6.10",
    "- sausage, chips, peas and gravy": "",
    "pie dinner": "6.60",
    "- any pie, chips, peas and gravy": "",
    haggis: "3.00",
    "black pudding": "3.00",
    "minted pea fritters": "2.00",
    "spam fritters": "2.00",
    "spring rolls": "3.50",
    "- 4 in a portion": "",
  },
  "sides & sauces": {
    "peas / gravy / spicy curry / fruity curry / beans": "",
    "- large": "1.50",
    "- small": "1.20",
    rice: "2.50",
    "salt & pepper seasoning": "0.50",
  },
  burgers: {
    plain: "2.70",
    double: "3.70",
    cheese: "3.00",
    "double cheese": "4.50",
    veggie: "3.20",
  },
  "kids menu": {
    "- each meal includes chips, drink, ketchup and toy": "",
    "chicken nuggets": "4.00",
    "breaded fishcake": "4.00",
    "fish bites": "4.00",
    sausage: "4.00",
  },
  "gluten free monday & tuesday": {
    fish: "",
    "- large": "6.00",
    "- small": "4.00",
    "homemade fishcake": "2.10",
    scallops: "2.70",
    "- or 60p each": "",
    "onion rings": "2.70",
    "- or 60p each ": "",
    sausage: "2.10",
    "- battered": "2.30",
    "bottle of vinegar": "1.50",
  },
  "vegan options": {
    burgers: "3.00",
    "southern style goujons": "3.20",
    "- with chips": "4.00",
    nuggets: "4.00",
    "- or 55p each": "",
    pies: "3.20",
    "- chicken & mushroom or minced steak & onion": "",
    "small sausage": "1.00",
  },
  specials: {
    "chip barm special": "4.60",
    "battered chip barm": "3.00",
    "large spring rolls": "2.00",
    "minced beef & onion pie": "2.40",
    "halloumi fries": "3.40",
    "sweet potato fries": "3.40",
    "homemade chicken sticks": "3.00",
    "mozzarella sticks": "2.50",
    "- with sweet chilli dip": "",
  },
  "lunchtime special": {
    "small fish, chips & peas": "6.20",
    "- served in a tray": "",
  },
  drinks: {
    cans: "1.30",
    bottles: "1.90",
    water: "0.90",
    cartons: "0.50",
    "tea & coffee": "1.50",
  },
};

const helper = (() => {
  const isSizeOrOption = (value) => {
    if (value.includes("-")) return true;
    else return false;
  };

  const isEmptyPrice = (price) => {
    if (price.length === 0) {
      return true;
    } else return false;
  };

  return {
    isSizeOrOption,
    isEmptyPrice,
  };
})();

const buildMenu = (() => {
  const container = document.createElement("div");
  container.id = "menu-container";

  let sections = Object.keys(menuiteams);

  sections.forEach((sectionHeading) => {
    //create a menu section
    let menuSection = document.createElement("div");
    menuSection.classList.add("menu-section");

    //each section has a heading
    let headingDiv = document.createElement("div");
    headingDiv.classList.add("section-heading");
    headingDiv.innerText = sectionHeading;

    menuSection.appendChild(headingDiv);

    let items = Object.keys(menuiteams[sectionHeading]);
    items.forEach((item) => {
      //create a div for each menu item
      let itemDiv = document.createElement("div");
      itemDiv.classList.add("menu-item");

      let itemName = document.createElement("div");
      //check if the item is an item or an option/size
      if (helper.isSizeOrOption(item)) {
        itemDiv.classList.add("item-option");
        itemName.classList.add("item-option-text");
      }
      itemName.classList.add("menu-item-name");
      itemName.innerText = item;

      let itemPrice = document.createElement("div");
      let price = menuiteams[sectionHeading][item];

      //if the price is empty, we wont add the pound symbol
      if (!helper.isEmptyPrice(price)) {
        itemPrice.classList.add("menu-item-price");
      }
      itemPrice.innerText = price;

      itemDiv.append(itemName, itemPrice);

      menuSection.appendChild(itemDiv);
    });

    container.appendChild(menuSection);
  });

  return container;
})();

export default buildMenu;
