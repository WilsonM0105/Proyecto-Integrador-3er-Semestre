import { mostrarProductos } from "./controllers/productoController.js";

document.addEventListener("DOMContentLoaded", () => {
  mostrarProductos();

  const select = document.getElementById("filtro-categoria");
  if (select) {
    select.addEventListener("change", () => {
      const categoriaSeleccionada = select.value;
      mostrarProductos(categoriaSeleccionada);
    });
  }
});
