import { productos } from "./models/productoModel.js";

document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  const producto = productos.find((p) => p.id === id);
  const contenedor = document.getElementById("detalle-producto");

  if (!producto) {
    contenedor.innerHTML = "<p>Producto no encontrado.</p>";
    return;
  }

  const vendido = producto.estado === "vendido";

  contenedor.innerHTML = `
    <img src="${producto.imagen}" alt="${
    producto.nombre
  }" style="width:100%;max-height:300px;object-fit:cover" />
    <h2>${producto.nombre}</h2>
    <p><strong>Descripción:</strong> ${producto.descripcion}</p>
    <p><strong>Precio:</strong> $${producto.precio}</p>
    <p><strong>Categoría:</strong> ${producto.categoria}</p>
    <p><strong>Estado:</strong> <span id="estado">${producto.estado}</span></p>
    <button id="venderBtn" ${vendido ? "disabled" : ""}>
      ${vendido ? "Ya vendido" : "Marcar como vendido"}
    </button>
  `;

  const btn = document.getElementById("venderBtn");
  btn.addEventListener("click", () => {
    producto.estado = "vendido";
    document.getElementById("estado").textContent = "vendido";
    btn.textContent = "Ya vendido";
    btn.disabled = true;
    alert("Producto marcado como vendido (simulado)");
  });
});
