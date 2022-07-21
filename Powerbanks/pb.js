if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
function ready() {
  let removeCartItem = document.getElementsByClassName("btn-danger");
  for (let i = 0; i < removeCartItem.length; i++) {
    let button = removeCartItem[i];
    button.addEventListener("click", removeItem);
  }
  let quantityInput = document.getElementsByClassName("cart-quantity-input");
  for (let i = 0; i < quantityInput.length; i++) {
    let input = quantityInput[i];
    input.addEventListener("change", quantityChanged);
  }
  let addToCart = document.getElementsByClassName("add_cart");
  for (let i = 0; i < addToCart.length; i++) {
    let button = addToCart[i];
    button.addEventListener("click", addToCartClicked);
  }
}
function addToCartClicked(event) {
  let button = event.target;
  let shopItem = button.parentElement;
  let title = shopItem.getElementsByClassName("text")[0].innerText;
  let price = Number(shopItem.getElementsByClassName("price")[0].innerHTML);
  let image = shopItem.getElementsByClassName("product")[0].src;
  console.log(shopItem, title, price, image);
  addItemToCart(title, price, image);
  updateTotal();
}

function addItemToCart(title, price, image) {
  let cartRow = document.createElement("div");
  cartRow.classList.add("cart-row");
  let cartItems = document.getElementsByClassName("cart-items")[0];
  let cartItemNames = cartItems.getElementsByClassName("cart-item-title");
  for (let i = 0; i < cartItemNames.length; i++) {
    if (cartItemNames[i].innerText == title) {
      alert("already in your cart");
      return;
    }
  }
  let cartRowContent = `<div class="cart-item cart-column">
    <img class="cart-item-image" src="${image}" width="100" height="100">
    <span class="cart-item-title">${title}</span>
  </div>
  <span class="cart-price cart-column">₹${price}</span>
  <div class="cart-quantity cart-column">
    <input class="cart-quantity-input" type="number" value="1">
    <button class="btn btn-danger" type="button">REMOVE</button>
  </div>`;
  cartRow.innerHTML = cartRowContent;
  cartItems.append(cartRow);
  cartRow
    .getElementsByClassName("btn-danger")[0]
    .addEventListener("click", removeItem);
  cartRow
    .getElementsByClassName("cart-quantity-input")[0]
    .addEventListener("change", quantityChanged);
}

function removeItem(event) {
  let buttonClicked = event.target;
  buttonClicked.parentElement.parentElement.remove();
  updateTotal();
}

function quantityChanged(event) {
  let input = event.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateTotal();
}

const products = [
  {
    name: "OnePlus Nord CE",
    price: 19900,
    incart: 0,
  },
  {
    name: "OnePlus Nord 2T",
    price: 28900,
    incart: 0,
  },
  {
    name: "iQOO Neo 6 5G",
    price: 29999,
    incart: 0,
  },
  {
    name: "Samsung Galaxy M33 5G ",
    price: 19499,
    incart: 0,
  },
  {
    name: "vivo iQOO Z6 5G",
    price: 17999,
    incart: 0,
  },
  {
    name: "Oppo A54",
    price: 11990,
    incart: 0,
  },
  {
    name: "LavaAgni5G",
    price: 17990,
    incart: 0,
  },
  {
    name: "Apple iPhone 13",
    price: 69900,
    incart: 0,
  },
  { name: ",Apple iPhone 12", price: 54999, incart: 0 },
];

let carts = document.querySelectorAll(".add_cart");
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    handleIncrement(products[i]);
  });
}
//to toggle cart
function Myfunction() {
  var x = document.querySelector(".cart_box");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
// to increment cartItems
const cart_count = document.querySelector("#cartItems");
var count = 0;
cart_count.innerHTML = count;

const handleIncrement = () => {
  count++;
  cart_count.innerHTML = count;
};
const inc = document.querySelector(".add_cart");
inc.addEventListener("click", handleIncrement);

//cart box

function updateTotal() {
  var cartItemContainer = document.getElementsByClassName("cart-items")[0];
  var cartRows = cartItemContainer.getElementsByClassName("cart-row");
  var total = 0;
  for (var i = 0; i < cartRows.length; i++) {
    var cartRow = cartRows[i];
    var price = cartRow.getElementsByClassName("cart-price")[0];
    var quantity = cartRow.getElementsByClassName("cart-quantity-input")[0];
    var price = parseFloat(price.innerText.replace("₹", ""));
    var quantity = quantity.value;
    total = total + price * quantity;
  }
  document.getElementsByClassName("cart-total-price")[0].innerText =
    "₹" + total;
}
