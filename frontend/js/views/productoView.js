export function crearCardProducto(producto) {
  return `
    <div class="card">
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <p><strong>$${producto.precio}</strong></p>
      <a href="producto.html?id=${producto.id}">
        <button>Ver más</button>
      </a>
    </div>
  `;
}
