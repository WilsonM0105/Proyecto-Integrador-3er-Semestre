export function crearCardProducto(producto) {
  return `
    <div class="card">
      <img src="${producto.imagen}" alt="${producto.nombre}">
      <h3>${producto.nombre}</h3>
      <p>${producto.descripcion}</p>
      <p><strong>$${producto.precio}</strong></p>
      <button onclick="alert('Funcionalidad ver producto')">Ver más</button>
    </div>
  `;
}
