import '../styles/menu.scss';

const menuiteams = {
    fish:{
        'large haddock': '5',
        'small haddock': '3.20',
        'large cod': '5',
        'small cod': '3.20',
        'plaice': '5.20',
        'homemade fishcake': '1.70',
        'breaded fishcake': '2',

    },
    chips:{
        large: '2.5',
        small: '2.00'
    }
}

const buildMenu = (()=>{
    const container = document.createElement('div');
    container.id = 'menu-container';

    let headings = Object.keys(menuiteams);

    headings.forEach( heading =>{
        console.log('title = '+heading);
        let headingDiv = document.createElement('div');
        headingDiv.innerText = heading.toUpperCase();
        container.appendChild(headingDiv);
        
        let items = Object.keys(menuiteams[heading]);
        items.forEach(item =>{
            console.log(item);
            let itemDiv = document.createElement('div');
            let itemName = document.createElement('div');
            itemName.innerText = item;
            let itemPrice = document.createElement('div');
            itemPrice.innerText = menuiteams[heading][item];

            itemDiv.append(itemName, itemPrice);
            
            headingDiv.appendChild(itemDiv);
        })

    })


    return container;

})();

export default buildMenu;