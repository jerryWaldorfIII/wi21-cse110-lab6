// product-item.js

class ProductItem extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<li class="product"> <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg" alt="Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops" width=200> <p class="title">Fjallraven - Foldstack No. 1 Backpack, Fits 15 Laptops</p> <p class="price">$109.95</p> <button id="0" onclick="addCart(this)">Add to Cart</button> </li>`;
  }
}

customElements.define('product-item', ProductItem);

function addCart(button) {

  let storage = window.localStorage.getItem("cart");
  if(storage == undefined ) {
    storage = [];
  } else {
    storage = JSON.parse(storage);
  }

  let text = button.innerHTML;
  if( text == "Add to Cart" ) {
    let cartCount = document.getElementById("cart-count").innerHTML;
    cartCount++;
    document.getElementById("cart-count").innerHTML = cartCount;
    button.innerHTML = "Remove from Cart";
    storage.push(button.id);
    window.localStorage.setItem("cart", JSON.stringify(storage));
  } else {
    let cartCount = document.getElementById("cart-count").innerHTML;
    cartCount--;
    document.getElementById("cart-count").innerHTML = cartCount;
    button.innerHTML = "Add to Cart";
    storage = storage.filter( item => item !== button.id);
    window.localStorage.setItem("cart", JSON.stringify(storage));
  }
}