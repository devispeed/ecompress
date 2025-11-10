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

document.getElementById('copyright').innerHTML = "جميع الحقوق محفوضة سنة " + new Date().getFullYear()