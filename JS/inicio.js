window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  }
});

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, index * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

revealElements.forEach((el) => revealObserver.observe(el));
