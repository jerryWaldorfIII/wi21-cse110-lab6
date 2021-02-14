// Script.js

window.addEventListener("DOMContentLoaded", () => {
  const storage = window.localStorage.getItem("products");

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
    }
  }
});

// window.("", () => {

// });
