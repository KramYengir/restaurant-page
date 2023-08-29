import '../styles/menu.scss';

const menuiteams = {
    fish:{
        'haddock': '',
        '- large': '5.00',
        '- small': '3.20',
        'cod': '',
        '- large ': '5.00',
        '- small ': '3.20',
        'plaice': '5.20',
        'homemade fishcake': '1.70',
        'breaded fishcake': '2.00',
        'salmon & dill': '2.00',
        'calamari rings': '4.80',
        'salt & pepper squid': '4.80',
        'breaded scampi': '4.20',
        'fish barm': '',
        '- large  ': '5.40',
        '- small  ': '3.60',
        'fish bites': '2.20',
        '- 5 pieces': '',

    },
    'chips & more':{
        'chips': '',
        '- large': '3.40',
        '- regular': '2.30',
        '- small': '1.95',
        '- cheesy chips add £1': '',
        'chip barm': '2.50',
        'scallops': '2.30',
        '- or 50p each': '',
        'sausage': '',
        '- large ': '1.80',
        '- small ': '0.90',
    },
    'original holland pies':{
        'meat': '2.20',
        'meat & potato': '2.20',
        'cheese & onion': '2.20',
        'chicken & mushroom': '2.20',
        'pasty': '2.20',
        'steak & kidney pie': '2.20',
        'steak & kidney pudding': '2.20',
        'peppered steak': '2.20',
        '':'',
        'vegan pies': '',
        '- chicken & mushroom': '3.20',
        '- minced steak & onion': '3.20',
    },
    'chicken':{
        'chicken breast': '4.50',
        '100% chicken fillet burger': '3.50',
        'chicken nuggets': '3.80',
        '- portion of 8 or 50p each': '',
    },
    'extras':{
        'chicken curry': '5.20',
        '- served with rice/chips or half & half':'',
        'chilli con carne': '5.20',
        '- served with rice/chips or half & half ':'',
        '':'',
        'half rice / half chips & curry': '3.20',
        'sausage dinner':'5.80',
        '- sausage, chips, peas and gravy':'',
        'pie dinner': '6.20',
        '- any pie, chips, peas and gravy':'',
        'haggis': '3.00',
        'black pudding': '3.00',
        'minted pea fritters': '2.00',
        'spam fritters': '2.00',
        'haggis': '3.00',
        '- 4 in a portion': '',     
    },
    'sides & sauces':{
    'peas / gravy / spicy curry / fruity curry / beans':'',
    '- large':'1.40',
    '- small':'1.10',
    'rice': '2.50',
    'salt & pepper seasoning':'0.50',
    },
    'burgers':{
        'plain':'2.50',
        'double':'3.50',
        'cheese':'2.70',
        'double cheese':'4.20',
        'veggie':'3.00',
    },
    'kids menu':{
        '- each meal includes chips, drink, ketchup and toy':'',
        'chicken nuggets':'3.90',
        'breaded fishcake':'3.90',
        'fish bites':'3.90',
        'sausage':'3.90',
    },
    'gluten free monday & tuesday':{
        'fish':'',
        '- large':'5.20',
        '- small':'3.40',
        'homemade fishcake':'2.10',
        'scallops':'2.70',
        '- or 60p each':'',
        'onion rings':'2.70',
        '- or 60p each ':'',
        'sausage':'2.00',
        '- battered':'2.20',
        'bottle of vinegar':'1.50',
    },
    'vegan options':{
        'burgers':'3.00',
        'southern style goujons':'3.00',
        '- with chips':'3.50',
        'nuggets':'4.00',
        '- or 55p each':'',
        'pies':'',
        '- chicken & mushroom or minced steak & onion':'',
        'small sausage':'1.00',
    },
    'specials':{
        'sausage roll':'1.00',
        'chip barm special':'4.30',
        'battered chip barm':'3.00',
        'large spring rolls':'2.00',
        'minced beef & onion pie':'2.20',
        'halloumi fries':'3.40',
        'sweet potato fries':'3.20',
        'homemade chicken sticks':'3.00',

    },
    'lunchtime special':{
        'small fish, chips & peas':'5.50',
        '- served in a tray':'',
    }
}

const helper = (()=>{
    const isSizeOrOption = (value)=>{

        /* let numRegex = /\d/;

        if(value.includes('large') || value.includes('small') 
            || value.includes('regular') || (numRegex.test(value) && !(value.includes('%'))))
        {
            return true;                   
        }
        else return false; */

        if(value.includes('-')) return true;
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
                itemDiv.classList.add('item-option')
                itemName.classList.add('item-option-text');
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