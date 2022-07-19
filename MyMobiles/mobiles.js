let carts = document.querySelectorAll(".add_cart");

let products = [
  {
    name: "OnePlus Nord CE",
    price: 19900,
    incart: 0,
  },
];
for (i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers();
  });
}

function loading_Cart() {
  let productNumbers = Number(localStorage.getItem("cartNumbers"));
  if (productNumbers) {
    document.querySelector("#cartItems").textContent = productNumbers;
  }
}

function cartNumbers() {
  let productNumbers = Number(localStorage.getItem("cartNumbers"));

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector("#cartItems").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector("#cartItems").textContent = 1;
  }
}
loading_Cart();
