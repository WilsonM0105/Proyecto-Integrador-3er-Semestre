import { productos } from "../models/productoModel.js";
import { crearCardProducto } from "../views/productoView.js";

export function mostrarProductos() {
  const contenedor = document.getElementById("contenedor-productos");
  productos.forEach(producto => {
    contenedor.innerHTML += crearCardProducto(producto);
  });
}
