function enviarFormulario() {
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const assunto = document.getElementById("assunto").value;
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !assunto || !mensagem) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  const btn = document.getElementById("btn-enviar");
  btn.style.pointerEvents = "none";
  btn.style.opacity = "0.6";

  setTimeout(() => {
    document.getElementById("form-sucesso").classList.add("visivel");
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("assunto").value = "";
    document.getElementById("mensagem").value = "";
    btn.style.pointerEvents = "";
    btn.style.opacity = "";
  }, 600);
}
