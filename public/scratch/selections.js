const createNode = (elem) => {
  return document.createElement(elem);
};
const appendNode = (parent, elem) => {
  // console.log(elem)
  parent.appendChild(elem);
};

var idNo = 0;

products();


function products() {
  // Appending promo items with fetch and map
  const promo = document.querySelector(".promo");
  const promou = "https://coffeeproducts.herokuapp.com/api/products/promo";
  fetch(promou)
    .then((res) => res.json(promou))
    .then((data) => {
      data
        .map((d) => {
          let li = createNode("li");
          btn = createNode("button");
          btn2 = createNode("button");
          (br = createNode("br")), (spanH = createNode("div"));
          span = createNode("span");
          p = createNode("div");
          image = createNode("img");

          spanH.innerText = d.product + " " + " $" + d.price;
          spanH.id = d._id;
          spanH.setAttribute("class", "add");
          p.innerText = d.description;
          (btn.innerText = "Add"), btn.setAttribute("class", "add");
          btn.setAttribute("id", d.category + (idNo += 1));
          btn2.innerText = "More";
          image.setAttribute("src", d.image);
          image.setAttribute(
            "style",
            "width: 150px; height: auto; border-radius: 15px;"
          );

          appendNode(li, image);
          appendNode(li, spanH);
          appendNode(li, span);
          appendNode(li, p);
          appendNode(li, btn);
          appendNode(li, btn2);
          appendNode(promo, li);
        })
        .catch((err) => {
          console.error("Error: ", err);
        });
    });

  // Appending coffee using fetch and map
  const elCoffee = document.querySelector(".coffee");
  const uCoffee = "https://coffeeproducts.herokuapp.com/api/products/coffee";
  fetch(uCoffee)
    .then((res) => res.json(uCoffee))
    .then((data) => {
      data
        .map((d) => {
          console.log(d);
          let li = createNode("li");
          btn = createNode("button");
          btn2 = createNode("button");
          (br = createNode("br")), (spanH = createNode("div"));
          span = createNode("span");
          p = createNode("div");
          image = createNode("img");

          spanH.innerText = d.product + " " + " $" + d.price;
          spanH.id = d._id;
          spanH.setAttribute("class", "add");
          p.innerText = d.description;
          (btn.innerText = "Add"), btn.setAttribute("class", "add");
          btn.setAttribute("id", d.category + "[" + (idNo += idNo) + "]");
          btn2.innerText = "More";
          image.setAttribute("src", d.image);
          image.setAttribute(
            "style",
            "width: 150px; height: auto; border-radius: 15px;"
          );

          appendNode(li, image);
          appendNode(li, spanH);
          appendNode(li, span);
          appendNode(li, p);
          appendNode(li, btn);
          appendNode(li, btn2);
          appendNode(elCoffee, li);
        })
        .catch((err) => {
          console.error("Error: ", err);
        });
    });

  // Appending Tea using fetch and map
  const elTea = document.querySelector(".tea");
  const uTea = "https://coffeeproducts.herokuapp.com/api/products/tea";
  fetch(uTea)
    .then((res) => res.json(uTea))
    .then((data) => {
      data
        .map((d) => {
          console.log(d);
          let li = createNode("li");
          btn = createNode("button");
          btn2 = createNode("button");
          (br = createNode("br")), (spanH = createNode("div"));
          span = createNode("span");
          p = createNode("div");
          image = createNode("img");

          spanH.innerText = d.product + " " + " $" + d.price;
          spanH.id = d._id;
          spanH.setAttribute("class", "add");
          p.innerText = d.description;
          (btn.innerText = "Add"), btn.setAttribute("class", "add");
          btn.setAttribute("id", d.category + "[" + (idNo += idNo) + "]");
          btn2.innerText = "More";
          image.setAttribute("src", d.image);
          image.setAttribute(
            "style",
            "width: 150px; height: auto; border-radius: 15px;"
          );

          appendNode(li, image);
          appendNode(li, spanH);
          appendNode(li, span);
          appendNode(li, p);
          appendNode(li, btn);
          appendNode(li, btn2);
          appendNode(elTea, li);
        })
        .catch((err) => {
          console.error("Error: ", err);
        });
    });

  // Appending pastries using fetch and map
  const elPastry = document.querySelector(".pastry");
  const uPastry = "https://coffeeproducts.herokuapp.com/api/products/pastry";
  fetch(uPastry)
    .then((res) => res.json(uPastry))
    .then((data) => {
      data
        .map((d) => {
          console.log(d);
          let li = createNode("li");
          btn = createNode("button");
          btn2 = createNode("button");
          (br = createNode("br")), (spanH = createNode("div"));
          span = createNode("span");
          p = createNode("div");
          image = createNode("img");

          spanH.innerText = d.product + " " + " $" + d.price;
          spanH.id = d._id;
          spanH.setAttribute("class", "add");
          p.innerText = d.description;
          (btn.innerText = "Add"), btn.setAttribute("class", "add");
          btn.setAttribute("id", d.category + "[" + (idNo += idNo) + "]");
          btn2.innerText = "More";
          image.setAttribute("src", d.image);
          image.setAttribute(
            "style",
            "width: 150px; height: auto; border-radius: 15px;"
          );

          appendNode(li, image);
          appendNode(li, spanH);
          appendNode(li, span);
          appendNode(li, p);
          appendNode(li, btn);
          appendNode(li, btn2);
          appendNode(elPastry, li);
        })
        .catch((err) => {
          console.error("Error: ", err);
        });
    });

  // Appending sandwiches using fetch and map
  const elSandwiches = document.querySelector(".sandwiches");
  const uSandwiches =
    "https://coffeeproducts.herokuapp.com/api/products/sandwiches";
  fetch(uSandwiches)
    .then((res) => res.json(uSandwiches))
    .then((data) => {
      data
        .map((d) => {
          console.log(d);
          let li = createNode("li");
          btn = createNode("button");
          btn2 = createNode("button");
          (br = createNode("br")), (spanH = createNode("div"));
          span = createNode("span");
          p = createNode("div");
          image = createNode("img");

          spanH.innerText = d.product + " " + " $" + d.price;
          spanH.id = d._id;
          spanH.setAttribute("class", "add");
          p.innerText = d.description;
          (btn.innerText = "Add"), btn.setAttribute("class", "add");
          btn.setAttribute("id", d.category + "[" + (idNo += idNo) + "]");
          btn2.innerText = "More";
          image.setAttribute("src", d.image);
          image.setAttribute(
            "style",
            "width: 150px; height: auto; border-radius: 15px;"
          );

          appendNode(li, image);
          appendNode(li, spanH);
          appendNode(li, span);
          appendNode(li, p);
          appendNode(li, btn);
          appendNode(li, btn2);
          appendNode(elSandwiches, li);
        })
        .catch((err) => {
          console.error("Error: ", err);
        });
    });

  // Appending breakfast using fetch and map
  const elBreakfast = document.querySelector(".breakfast");
  const uBreakfast =
    "https://coffeeproducts.herokuapp.com/api/products/breakfast";
  fetch(uBreakfast)
    .then((res) => res.json(uBreakfast))
    .then((data) => {
      data
        .map((d) => {
          console.log(d);
          let li = createNode("li");
          btn = createNode("button");
          btn2 = createNode("button");
          (br = createNode("br")), (spanH = createNode("div"));
          span = createNode("span");
          p = createNode("div");
          image = createNode("img");

          spanH.innerText = d.product + " " + " $" + d.price;
          spanH.id = d._id;
          spanH.setAttribute("class", "add");
          p.innerText = d.description;
          (btn.innerText = "Add"), btn.setAttribute("class", "add");
          btn.setAttribute("id", d.category + "[" + (idNo += idNo) + "]");
          btn2.innerText = "More";
          image.setAttribute("src", d.image);
          image.setAttribute(
            "style",
            "width: 150px; height: auto; border-radius: 15px;"
          );

          appendNode(li, image);
          appendNode(li, spanH);
          appendNode(li, span);
          appendNode(li, p);
          appendNode(li, btn);
          appendNode(li, btn2);
          appendNode(elBreakfast, li);
        })
        .catch((err) => {
          console.error("Error: ", err);
        });
    });

  // Appending breakfast using fetch and map
  const elSides = document.querySelector(".sides");
  const uSides = "https://coffeeproducts.herokuapp.com/api/products/sides";
  fetch(uSides)
    .then((res) => res.json(uSides))
    .then((data) => {
      data
        .map((d) => {
          console.log(d);
          let li = createNode("li");
          btn = createNode("button");
          btn2 = createNode("button");
          (br = createNode("br")), (spanH = createNode("div"));
          span = createNode("span");
          p = createNode("div");
          image = createNode("img");

          spanH.innerText = d.product + " " + " $" + d.price;
          spanH.id = d._id;
          spanH.setAttribute("class", "add");
          p.innerText = d.description;
          (btn.innerText = "Add"), btn.setAttribute("class", "add");
          btn.setAttribute("id", d.category + "[" + (idNo += idNo) + "]");
          btn2.innerText = "More";
          image.setAttribute("src", d.image);
          image.setAttribute(
            "style",
            "width: 150px; height: auto; border-radius: 15px;"
          );

          appendNode(li, image);
          appendNode(li, spanH);
          appendNode(li, span);
          appendNode(li, p);
          appendNode(li, btn);
          appendNode(li, btn2);
          appendNode(elSides, li);
        })
        .catch((err) => {
          console.error("Error: ", err);
        });
    });
}


