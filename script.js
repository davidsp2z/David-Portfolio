// MOBILE MENU TOGGLE
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


// DARK / LIGHT MODE TOGGLE
const modeToggle = document.getElementById("modeToggle");

modeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  modeToggle.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Loading Screen
window.onload = () => {
  setTimeout(() => {
    document.getElementById("loader").classList.add("hide");
  }, 600);
};

// Show button when scrolled
window.addEventListener("scroll", () => {
  const btn = document.getElementById("backToTop");
  if (window.scrollY > 300) {
    btn.style.display = "flex";
  } else {
    btn.style.display = "none";
  }
});

// Scroll to top
document.getElementById("backToTop").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const navLinksItems = document.querySelectorAll('.nav-links a');

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");

  navLinksItems.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.2}s`;
    }
  });
});

// Add keyframes for the animation
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes navLinkFade {
  from { opacity: 0; transform: translateX(50px); }
  to { opacity: 1; transform: translateX(0); }
}
`, styleSheet.cssRules.length);


