document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById("menuBtn");
    const navLinks = document.querySelector(".nav-links");
    const barsIcon = menuBtn.querySelector(".fa-bars");
    const closeIcon = menuBtn.querySelector(".fa-xmark");
  
    menuBtn.addEventListener("click", function () {
      navLinks.classList.toggle("active");
  
      if (navLinks.classList.contains("active")) {
        barsIcon.style.display = "none";
        closeIcon.style.display = "block";
      } else {
        barsIcon.style.display = "block";
        closeIcon.style.display = "none";
      }
    });
  });