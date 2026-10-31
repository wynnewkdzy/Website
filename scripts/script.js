document.addEventListener("DOMContentLoaded", function () {

  document.getElementById("year").textContent = new Date().getFullYear();


  const menuButton = document.getElementById("menuButton");
  const navbar = document.getElementById("navbar");


  menuButton.addEventListener("click", function () {
    navbar.classList.toggle("open");

  
    if (navbar.classList.contains("open")) {
      menuButton.textContent = "✕";
    } else {
      menuButton.textContent = "☰";
    }
  });

  
  const links = navbar.querySelectorAll("a");

  links.forEach(function (link) {
    link.addEventListener("click", function () {
      navbar.classList.remove("open");
      menuButton.textContent = "☰";
    });
  });
});