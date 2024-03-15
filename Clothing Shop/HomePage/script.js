let menuButton = document.getElementById("menu-item");
let shoppingBag = document.querySelector(".fa-shopping-bag");
let menuList = document.querySelector(".menu-list");
let productNumber = document.querySelectorAll(".shopping-cart-product-number");
let productPrice = document.querySelectorAll(".shopping-cart-product-price");
let productTrash = document.querySelectorAll(".shopping-cart-product-trash");
let shoppingCart = document.querySelector(".shopping-cart");
let shoppingCartBox = document.querySelector(".shopping-cart-box");
let increaseInput = document.querySelectorAll(".increase");
let reduceInput = document.querySelectorAll(".reduce");
let totalPrice = document.querySelector(".total-price");

// Bu kodun tekrar tekrar çalışması gerekecek
for (let child of shoppingCart.childNodes) {
  if (child.nodeType === 3) {
    shoppingCart.removeChild(child);
  }
}
window.addEventListener("load", (e) => {
  TotalPriceCalculation();
});

menuButton.addEventListener("click", (e) => {
  menuList.classList.toggle("closed");
  menuList.classList.remove("animation");
});

shoppingBag.addEventListener("click", (e) => {
  shoppingCartBox.classList.toggle("closed");
  shoppingCartBox.classList.remove("animation");
});

window.addEventListener("resize", (e) => {
  if (window.outerWidth <= 1100) {
    menuList.classList.remove("animation");
  } else {
    menuList.classList.add("animation");
    menuList.classList.add("closed");
  }
});

for (let i = 0; i < productTrash.length; i++) {
  productTrash[i].addEventListener("click", (e) => {
    shoppingCart.removeChild(productTrash[i].parentElement);
    TotalPriceCalculation();
  });
  increaseInput[i].addEventListener("click", (e) => {
    if (Number(productNumber[i].textContent) !== 1) {
      productNumber[i].innerHTML = Number(productNumber[i].textContent) - 1;
      productPrice[i].innerHTML =
        Number(productNumber[i].textContent) *
        Number(productPrice[i].attributes.getNamedItem("data-price").value);
      TotalPriceCalculation();
    }
  });
  reduceInput[i].addEventListener("click", (e) => {
    if (Number(productNumber[i].textContent) !== 9) {
      productNumber[i].innerHTML = Number(productNumber[i].textContent) + 1;
      productPrice[i].innerHTML =
        Number(productNumber[i].textContent) *
        Number(productPrice[i].attributes.getNamedItem("data-price").value);
      TotalPriceCalculation();
    }
  });
}

function TotalPriceCalculation() {
  let prices = document.querySelectorAll(".shopping-cart-product-price");
  let total = 0;
  for (let price of prices) {
    total += Number(price.textContent);
  }
  totalPrice.innerHTML = total;
}
