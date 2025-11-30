// ** ----- imports ----- **//
window.bootstrap = require("bootstrap/dist/js/bootstrap.bundle.js");
// import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
import "@fortawesome/fontawesome-free/js/all.min.js";

document
  .querySelectorAll('[data-bs-toggle="tooltip"]')
  .forEach((item) => new bootstrap.Tooltip(item));

// ** ----- start Code ----- **//
document.querySelectorAll(".add-to-cart-btn").forEach((item) => {
  item.addEventListener("click", () => {
    alert("اضيف منتج الى عربة الشراء");
  });
});

document
  .querySelectorAll('.size-option input[type="radio"]')
  .forEach((item) => {
    item.addEventListener("change", () => {
      document.querySelectorAll(".size-option").forEach((i) => {
        i.classList.remove("active");
      });
      item.parentNode.parentNode.classList.add("active");
    });
  });

document
  .querySelectorAll('.color-option input[type="radio"]')
  .forEach((item) => {
    item.addEventListener("change", () => {
      document.querySelectorAll(".color-option").forEach((i) => {
        i.classList.remove("active");
      });
      item.parentNode.parentNode.classList.add("active");
    });
  });
// * حساب سعر اجمالي للمنتج

document.querySelectorAll("[data-product-quantity]").forEach((item) => {
  item.addEventListener("change", () => {
    const newQuantity = item.value;
    const parent = item.closest("[data-product-info]");
    const pricePerUnit = parent.getAttribute("data-product-price");
    const totalPriceForProduct = newQuantity * pricePerUnit;
    parent.querySelector(".total-price-for-product").innerHTML =
      totalPriceForProduct + "$";
    // **
    calculateTotalPrice();
  });
});
// * حذف المنتجات

document.querySelectorAll("[data-remove-from-card]").forEach((item) => {
  item.addEventListener("click", () => {
    item.closest("[data-product-info]").remove();
    // **
    calculateTotalPrice();
  });
});

function calculateTotalPrice() {
  let totalPriceForAllProduct = 0;
  document.querySelectorAll("[data-product-info]").forEach((product) => {
    const pricePerUnit = product.getAttribute("data-product-price");
    const quantity = product.querySelector("[data-product-quantity]").value;
    const totalPriceForProduct = pricePerUnit * quantity;

    totalPriceForAllProduct = totalPriceForAllProduct + totalPriceForProduct;
  });
  document.getElementById("total-price-for-all-product").innerHTML =
    totalPriceForAllProduct + "$";
}

// ** ___________________________________________

const sitiesByCountry = {
  sa: ["الجدة", "الرياض"],
  eg: ["القاهرة", "الاسكرندرية"],
  jo: ["عمان", "الزرقاء"],
  sy: ["دمشق", "حلب", "حماء"],
};

document.querySelectorAll('select[name="country"]').forEach((item) => {
  item.addEventListener("change", () => {
    const country = item.value;

    const cities = sitiesByCountry[country];

    document
      .querySelectorAll("#paymentcities option")
      .forEach((option) => option.remove());

    const firstOption = document.createElement("option");
    const optionText = document.createTextNode("اختر المدينة");
    firstOption.appendChild(optionText);
    firstOption.setAttribute("value");
    firstOption.setAttribute("disabled", "true");
    firstOption.setAttribute("selected", "true");

    const city_options = document.getElementById("paymentcities");
    city_options.appendChild(firstOption);

    cities.forEach((city) => {
      const newOption = document.createElement("option");
      const optionText = document.createTextNode(city);
      newOption.appendChild(optionText);
      newOption.setAttribute("value", city);
      city_options.appendChild(newOption);
    });
  });
});

/** اخفاء و اضهار حقوق ادخال البطاقة الائتمانية */
// ** ___________________________________________
document
  .querySelectorAll('#form-checkout input[name="payment-method"]')
  .forEach((item) => {
    item.addEventListener("change", () => {
      const paymentMethod = item.value;
      const creditCardInputs = document.querySelectorAll(
        "#credit-card-info input"
      );

      if (paymentMethod === "on_delivery") {
        creditCardInputs.forEach((input) => {
          input.style.display = "none";
        });
      } else {
        creditCardInputs.forEach((input) => {
          input.style.display = "block";
        });
      }
    });
  });

document.getElementById("copyright").innerHTML =
  "جميع الحقوق محفوضة سنة " + new Date().getFullYear();
