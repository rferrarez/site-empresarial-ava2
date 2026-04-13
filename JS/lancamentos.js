document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("scroll", () =>
    document.getElementById("navbar").classList.toggle("rolado", scrollY > 60),
  );
});
