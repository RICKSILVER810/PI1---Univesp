document.addEventListener("DOMContentLoaded", () => {
  const select = document.getElementById("select");
  const pai = document.getElementById("pai");

  const atualizarExibicao = () => {
    const selectValor = "#" + select.value;

    pai.querySelectorAll("div").forEach(div => div.style.display = "none");

    const selectedDiv = pai.querySelector(selectValor);
    if (selectedDiv) selectedDiv.style.display = "block";
  };

  select.addEventListener("change", atualizarExibicao);// CHAMADA IMEDIATA ao carregar a página

  
  atualizarExibicao();
});
