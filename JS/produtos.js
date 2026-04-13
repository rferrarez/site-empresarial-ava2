// variáveis 

let carrinho = 0, timerNotificacao;

// ativado ao clicar num botão de filtro

function setFiltro(filtro, btn) {
  document.querySelectorAll('.btn-filtro').forEach(b => b.classList.remove('ativo'));
  btn?.classList.add('ativo');

  // mostra e esconde os cards pelo atributo data-tipo
  document.querySelectorAll('.card').forEach(card => {
    card.style.display = (filtro === 'todos' || card.dataset.tipo === filtro) ? '' : 'none';
  });
}

// ativado ao clicar em "Comprar"

function adicionarAoCarrinho(e, id, nome) {
  const badge = document.getElementById('contador-sacola');
  badge.textContent = ++carrinho;
  badge.classList.add('visivel');
  exibirNotificacao(`Adicionado: ${nome}`);
}

// exibe a notificação

function exibirNotificacao(msg) {
  const notificacao = document.getElementById('notificacao');
  notificacao.textContent = msg;
  notificacao.classList.add('visivel');
  clearTimeout(timerNotificacao);
  timerNotificacao = setTimeout(() => notificacao.classList.remove('visivel'), 3000);
}

// aguarda a página carregar

document.addEventListener('DOMContentLoaded', () => {

  // muda a aparência do navbar ao rolar a página
  window.addEventListener('scroll', () =>
    document.getElementById('navbar').classList.toggle('rolado', scrollY > 60)
  );
});

// anima os cards ao aparecerem na tela

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

document.querySelectorAll(".reveal")
  .forEach((el) => revealObserver.observe(el));
