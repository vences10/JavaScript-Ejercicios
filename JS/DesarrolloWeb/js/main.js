import { cambiarTema } from "./tema.js";
import { fetchData, renderizarTarjetas } from "./fetch.js";

cambiarTema();

const productosBtn = document.getElementById("productosBtn");
productosBtn.addEventListener("click", async () => {
  const data = await fetchData();
  renderizarTarjetas(data);
});
