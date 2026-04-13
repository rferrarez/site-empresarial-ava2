document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () =>
    document.getElementById("navbar").classList.toggle("rolado", scrollY > 60),
  );
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 80);
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);
