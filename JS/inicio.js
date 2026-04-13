window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (navbar) {
    navbar.classList.toggle("scrolled", window.scrollY > 40);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.getElementById("navbar");
  if (!navbar) return;

  const btn = document.createElement("button");
  btn.className = "nav-hamburger";
  btn.setAttribute("aria-label", "Abrir menu");
  btn.setAttribute("aria-expanded", "false");
  btn.innerHTML = `<span></span><span></span><span></span>`;
  navbar.appendChild(btn);

  const navLinks = navbar.querySelector(".nav-links");

  btn.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("menu-open");
    btn.setAttribute("aria-expanded", isOpen);
    btn.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    document.body.style.overflow = isOpen ? "hidden" : "";
  });

  navLinks?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("menu-open");
      btn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    });
  });

  document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target) && navbar.classList.contains("menu-open")) {
      navbar.classList.remove("menu-open");
      btn.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
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
});
