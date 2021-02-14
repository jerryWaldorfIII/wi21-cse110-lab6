// Script.js

window.addEventListener("DOMContentLoaded", () => {
  const storage = window.localStorage.getItem("products");
  let cart = window.localStorage.getItem("cart");
  if( cart == undefined ) {
    cart = [];
  } else {
    cart = JSON.parse(cart);
  }
  document.getElementById("cart-count").innerHTML = cart.length;

  if (storage == undefined) {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => {
        window.localStorage.setItem("products", JSON.stringify(data));
        let products = window.localStorage.getItem("products");
        products = JSON.parse(products);

        let element = document.getElementById("product-list");

        for (let product of products) {
          let template = document.createElement("product-item");
          element.appendChild(template);

          let image = template.children.item(0).children.item(0);
          image.src = product.image;

          let title = template.children.item(0).children.item(1);
          title.innerHTML = product.title;

          let price = template.children.item(0).children.item(2);
          price.innerHTML = "$" + product.price;

          let button = template.children.item(0).children.item(3);
          button.setAttribute("id", product.id);
          if( cart.find(item => item == product.id) ) {
            button.innerHTML = "Remove from Cart";
          }
        }
      });
  } else {
    let products = window.localStorage.getItem("products");
    products = JSON.parse(products);

    let element = document.getElementById("product-list");

    for (let product of products) {
      let template = document.createElement("product-item");
      element.appendChild(template);

      let image = template.children.item(0).children.item(0);
      image.src = product.image;

      let title = template.children.item(0).children.item(1);
      title.innerHTML = product.title;

      let price = template.children.item(0).children.item(2);
      price.innerHTML = "$" + product.price;

      let button = template.children.item(0).children.item(3);
      button.setAttribute("id", product.id);
      if( cart.find(item => item == product.id) ) {
        button.innerHTML = "Remove from Cart";
      }
    }
  }
});
