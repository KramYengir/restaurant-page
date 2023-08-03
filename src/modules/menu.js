import '../styles/menu.scss';

const menuiteams = {
    fish:{
        'haddock': '',
        'large': '5.00',
        'small': '3.20',
        'cod': '',
        'large': '5.00',
        'small': '3.20',
        'plaice': '5.20',
        'homemade fishcake': '1.70',
        'breaded fishcake': '2.00',
        'salmon & dill': '2.00',
        'calamari rings': '4.80',
        'salt & peppr squid': '4.80',
        'breaded scampi': '4.20',
        'fish barm': '',
        'large': '5.40',
        'small': '3.60',
        'fish bites': '2.20',
        '5 pieces': '',

    },
    'chips & more':{
        'chips': '',
        'large': '3.40',
        'regular': '2.30',
        'small': '1.95'
    }
}

const helper = (()=>{
    const isSizeOrOption = (value)=>{

        let numRegex = /\d/;

        if(value.includes('large') || value.includes('small') 
            || value.includes('regular') || numRegex.test(value))
        {
            return true;                   
        }
        else return false;
    }

    const isEmptyPrice = (price)=>{
        if(price.length === 0){
            return true
        }
        else return false;
    }

    return{
        isSizeOrOption,
        isEmptyPrice,
    }
})();

const buildMenu = (()=>{
    const container = document.createElement('div');
    container.id = 'menu-container';

    let sections = Object.keys(menuiteams);

    sections.forEach( sectionHeading =>{

        //create a menu section
        let menuSection = document.createElement('div');
        menuSection.classList.add('menu-section');

        //each section has a heading
        let headingDiv = document.createElement('div');
        headingDiv.classList.add('section-heading');
        headingDiv.innerText = sectionHeading;

        menuSection.appendChild(headingDiv);
        
        let items = Object.keys(menuiteams[sectionHeading]);
        items.forEach(item =>{
            //create a div for each menu item
            let itemDiv = document.createElement('div');
            itemDiv.classList.add('menu-item');

            let itemName = document.createElement('div');
            //check if the item is an item or an option/size
            if(helper.isSizeOrOption(item)){
                itemName.classList.add('menu-option');
            }
            itemName.classList.add('menu-item-name');
            itemName.innerText = item;

            let itemPrice = document.createElement('div');
            let price = menuiteams[sectionHeading][item];

            //if the price is empty, we wont add the pound symbol
            if(!helper.isEmptyPrice(price)){
                itemPrice.classList.add('menu-item-price');
            }
            itemPrice.innerText = price;

            itemDiv.append(itemName, itemPrice);
            
            menuSection.appendChild(itemDiv);
        })

        container.appendChild(menuSection);

    })


    return container;

})();

export default buildMenu;