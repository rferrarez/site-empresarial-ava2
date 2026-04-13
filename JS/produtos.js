let carrinho = 0,
  timerNotificacao;

function setFiltro(filtro, btn) {
  document
    .querySelectorAll(".btn-filtro")
    .forEach((b) => b.classList.remove("ativo"));
  btn?.classList.add("ativo");

  const cards = document.querySelectorAll(".card");
  let visiveis = 0;
  cards.forEach((card) => {
    const mostrar = filtro === "todos" || card.dataset.tipo === filtro;
    card.style.display = mostrar ? "" : "none";
    if (mostrar) visiveis++;
  });

  const label = document.getElementById("label-contagem");
  if (label)
    label.textContent = `${visiveis} ${visiveis === 1 ? "item" : "itens"}`;
}

function adicionarAoCarrinho(e, id, nome) {
  const badge = document.getElementById("contador-sacola");
  if (badge) {
    badge.textContent = ++carrinho;
    badge.classList.add("visivel");
  }
  exibirNotificacao(`Adicionado: ${nome}`);
}

function exibirNotificacao(msg) {
  const n = document.getElementById("notificacao");
  if (!n) return;
  n.textContent = msg;
  n.classList.add("visivel");
  clearTimeout(timerNotificacao);
  timerNotificacao = setTimeout(() => n.classList.remove("visivel"), 3000);
}

window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (navbar) navbar.classList.toggle("scrolled", window.scrollY > 40);
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
  { threshold: 0.12 },
);

document
  .querySelectorAll(".reveal")
  .forEach((el) => revealObserver.observe(el));
