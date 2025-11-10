
const pergunta = document.getElementById("pergunta");
const resposta = document.getElementById("resposta");

pergunta.addEventListener("click", function() {
  resposta.classList.toggle("escondido");
});
