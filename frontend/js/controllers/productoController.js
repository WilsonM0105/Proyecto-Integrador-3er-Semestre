import { productos } from "../models/productoModel.js";
import { crearCardProducto } from "../views/productoView.js";

export function mostrarProductos(categoria = "todos") {
  const contenedor = document.getElementById("contenedor-productos");
  contenedor.innerHTML = ""; // Limpiar productos previos

  const productosFiltrados =
    categoria === "todos"
      ? productos
      : productos.filter((prod) => prod.categoria === categoria);

  productosFiltrados.forEach((producto) => {
    contenedor.innerHTML += crearCardProducto(producto);
  });
}
