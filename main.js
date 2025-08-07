const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "re-menu-line");
});

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".client_slide");
  const bullets = document.querySelectorAll(".client_bullet");

  let currentSlide = 0;
  function showSlide(index) {
    const slidesContainer = document.querySelector(".client_slides");
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;

    bullets.forEach((bullet) => bullet.classList.remove("active"));
    bullets[index].classList.add("active");
  }

  bullets.forEach((bullet, index) => {
    bullet.addEventListener("click", () => {
      currentSlide = index;
      showSlide(currentSlide);
    });
  });
  showSlide(currentSlide);
});
