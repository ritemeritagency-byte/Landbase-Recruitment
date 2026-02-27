const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const yearEl = document.getElementById("year");
const applyForm = document.getElementById("applyForm");
const formStatus = document.getElementById("formStatus");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (applyForm) {
  applyForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (formStatus) {
      formStatus.innerHTML = "Thank you. Your application has been received. <a href=\"https://wa.me/639171234567?text=Hello%20Landbase%20Recruitment%2C%20I%20have%20submitted%20my%20application%20and%20would%20like%20to%20follow%20up.\" target=\"_blank\" rel=\"noopener noreferrer\">Follow up on WhatsApp</a>.";
    }

    applyForm.reset();
  });
}

const observer = "IntersectionObserver" in window
  ? new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    )
  : null;

document.querySelectorAll(".section, .hero-visual-card, .country-card, .job-card, .team-gallery-card, .team-summary, .apply-form, .apply-copy, .process-step, .map-card, .office-card").forEach((el) => {
  el.classList.add("reveal");
  if (observer) {
    observer.observe(el);
  } else {
    el.classList.add("is-visible");
  }
});
