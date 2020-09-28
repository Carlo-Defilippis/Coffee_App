const createNode = (elem) => {
    return document.createElement(elem);
    
};
const appendNode = (parent, elem) => {
    // console.log(elem)
    parent.appendChild(elem);
};

var idNo = 0;
    
// Appending promo items with fetch and map
const promo = document.querySelector('.promo');
const promou = 'https://coffeeproducts.herokuapp.com/api/products/promo';
fetch(promou)
    .then(res => res.json(promou))
    .then(data => {
        data.map((coffee) => {
            console.log(coffee);
            let li = createNode('li'),
                h2 = createNode('h2'),
                btn = createNode('button'),
                btn2 = createNode('button'),
                br = createNode('br'),
                spanH = createNode('span');
                span = createNode('span');
            spanH.innerText = coffee.product;
            spanH.id = coffee._id;
            spanH.setAttribute('class', 'add');
            btn.innerText = "Add";
            btn.setAttribute('class', 'add');
            btn.setAttribute('id', 'add[' + (idNo += 1) + ']');
            btn2.innerText = "More";
            btn2.setAttribute('id', 'more[' + (idNo += 1) + ']');
            span.innerText = ("$" + coffee.price);
             appendNode(li, spanH);
             appendNode(li, span);
             appendNode(li, br);
             appendNode(li, btn);
             appendNode(li, btn2);
             appendNode(promo, li);
        })
    .catch(err => {
        console.error('Error: ', err);
    })
    })

    // Appending coffee using fetch and map
    const elCoffee = document.querySelector('.coffee');
    const uCoffee = 'https://coffeeproducts.herokuapp.com/api/products/coffee';
    fetch(uCoffee)
        .then(res => res.json(uCoffee))
        .then(data => {
            data.map((d) => {
                console.log(d);
                let liCoffee = createNode('li');
                   
                    btnCoffee = createNode('button');
                    btn2Coffee = createNode('button');
                    brCoffee = createNode('br'),
                    spanHCoffee = createNode('span');
                    spanCoffee = createNode('span');
                spanHCoffee.innerText = d.product;
                spanHCoffee.id = d._id;
                spanHCoffee.setAttribute('class', 'add');
                btnCoffee.innerText = "Add", 
                btnCoffee.setAttribute('class', 'add');
                btn2Coffee.innerText = "More";
                spanCoffee.innerText = ("$" + d.price);
                appendNode(liCoffee, spanHCoffee);
                appendNode(liCoffee, spanCoffee);
                appendNode(liCoffee, brCoffee);
                appendNode(liCoffee, btnCoffee);
                appendNode(liCoffee, btn2Coffee);
                appendNode(elCoffee, liCoffee);
            })
        .catch(err => {
            console.error('Error: ', err);
        })
    })

    // Appending Tea using fetch and map 
    const elTea = document.querySelector('.tea');
    const uTea = 'https://coffeeproducts.herokuapp.com/api/products/tea';
    fetch(uTea)
        .then(res => res.json(uTea))
        .then(data => {
            data.map((d) => {
                console.log(d);
                let liTea = createNode('li');
                   
                    btnTea = createNode('button');
                    btn2Tea = createNode('button');
                    brTea = createNode('br'),
                    spanHTea = createNode('span');
                    spanTea = createNode('span');
                spanHTea.innerText = d.product;
                spanHTea.id = d._id;
                spanHTea.setAttribute('class', 'add');
                btnTea.innerText = "Add", 
                btnTea.setAttribute('class', 'add');
                btn2Tea.innerText = "More";
                spanTea.innerText = ("$" + d.price);
                appendNode(liTea, spanHTea);
                appendNode(liTea, spanTea);
                appendNode(liTea, brTea);
                appendNode(liTea, btnTea);
                appendNode(liTea, btn2Tea);
                appendNode(elTea, liTea);
            })
        .catch(err => {
            console.error('Error: ', err);
        })
    })

    // Appending pastries using fetch and map 
    const elPastry = document.querySelector('.pastry');
    const uPastry = 'https://coffeeproducts.herokuapp.com/api/products/pastry';
    fetch(uPastry)
        .then(res => res.json(uPastry))
        .then(data => {
            data.map((d) => {
                console.log(d);
                let liPastry = createNode('li');
                   
                    btnPastry = createNode('button');
                    btn2Pastry = createNode('button');
                    brPastry = createNode('br'),
                    spanHPastry = createNode('span');
                    spanPastry = createNode('span');
                spanHPastry.innerText = d.product;
                spanHPastry.id = d._id;
                spanHPastry.setAttribute('class', 'add');
                btnPastry.innerText = "Add", 
                btnPastry.setAttribute('class', 'add');
                btn2Pastry.innerText = "More";
                spanPastry.innerText = ("$" + d.price);
                appendNode(liPastry, spanHPastry);
                appendNode(liPastry, spanPastry);
                appendNode(liPastry, brPastry);
                appendNode(liPastry, btnPastry);
                appendNode(liPastry, btn2Pastry);
                appendNode(elPastry, liPastry);
            })
        .catch(err => {
            console.error('Error: ', err);
        })
    })
    
     // Appending sandwiches using fetch and map 
     const elSandwiches = document.querySelector('.sandwiches');
    const uSandwiches = 'https://coffeeproducts.herokuapp.com/api/products/sandwiches';
    fetch(uSandwiches)
        .then(res => res.json(uSandwiches))
        .then(data => {
            data.map((d) => {
                console.log(d);
                let liSandwiches = createNode('li');
                   
                    btnSandwiches = createNode('button');
                    btn2Sandwiches = createNode('button');
                    brSandwiches = createNode('br'),
                    spanHSandwiches = createNode('span');
                    spanSandwiches = createNode('span');
                spanHSandwiches.innerText = d.product;
                spanHSandwiches.id = d._id;
                spanHSandwiches.setAttribute('class', 'add');
                btnSandwiches.innerText = "Add", 
                btnSandwiches.setAttribute('class', 'add');
                btn2Sandwiches.innerText = "More";
                spanSandwiches.innerText = ("$" + d.price);
                appendNode(liSandwiches, spanHSandwiches);
                appendNode(liSandwiches, spanSandwiches);
                appendNode(liSandwiches, brSandwiches);
                appendNode(liSandwiches, btnSandwiches);
                appendNode(liSandwiches, btn2Sandwiches);
                appendNode(elSandwiches, liSandwiches);
            })
        .catch(err => {
            console.error('Error: ', err);
        })
    })
    
    // Appending breakfast using fetch and map 
    const elBreakfast = document.querySelector('.breakfast');
    const uBreakfast = 'https://coffeeproducts.herokuapp.com/api/products/breakfast';
    fetch(uBreakfast)
        .then(res => res.json(uBreakfast))
        .then(data => {
            data.map((d) => {
                console.log(d);
                let liBreakfast = createNode('li');
                   
                    btnBreakfast = createNode('button');
                    btn2Breakfast = createNode('button');
                    brBreakfast = createNode('br'),
                    spanHBreakfast = createNode('span');
                    spanBreakfast = createNode('span');
                spanHBreakfast.innerText = d.product;
                spanHBreakfast.id = d._id;
                spanHBreakfast.setAttribute('class', 'add');
                btnBreakfast.innerText = "Add", 
                btnBreakfast.setAttribute('class', 'add');
                btn2Breakfast.innerText = "More";
                spanBreakfast.innerText = ("$" + d.price);
                appendNode(liBreakfast, spanHBreakfast);
                appendNode(liBreakfast, spanBreakfast);
                appendNode(liBreakfast, brBreakfast);
                appendNode(liBreakfast, btnBreakfast);
                appendNode(liBreakfast, btn2Breakfast);
                appendNode(elBreakfast, liBreakfast);
            })
        .catch(err => {
            console.error('Error: ', err);
        })
    })
    
    // Appending breakfast using fetch and map 
    const elSides = document.querySelector('.sides');
    const uSides = 'https://coffeeproducts.herokuapp.com/api/products/sides';
    fetch(uSides)
        .then(res => res.json(uSides))
        .then(data => {
            data.map((d) => {
                console.log(d);
                let liSides = createNode('li');
                   
                    btnSides = createNode('button');
                    btn2Sides = createNode('button');
                    brSides = createNode('br'),
                    spanHSides = createNode('span');
                    spanSides = createNode('span');
                spanHSides.innerText = d.product;
                spanHSides.id = d._id;
                spanHSides.setAttribute('class', 'add');
                btnSides.innerText = "Add", 
                btnSides.setAttribute('class', 'add');
                btn2Sides.innerText = "More";
                spanSides.innerText = ("$" + d.price);
                appendNode(liSides, spanHSides);
                appendNode(liSides, spanSides);
                appendNode(liSides, brSides);
                appendNode(liSides, btnSides);
                appendNode(liSides, btn2Sides);
                appendNode(elSides, liSides);
            })
        .catch(err => {
            console.error('Error: ', err);
        })
    })
