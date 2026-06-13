const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, {
  threshold: 0.15
});

reveals.forEach(el => observer.observe(el));

// Hamburger Menu Logic
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("nav");

// Open/Close menu when clicking the hamburger
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// Automatically close the menu when a user clicks a link
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  });
});