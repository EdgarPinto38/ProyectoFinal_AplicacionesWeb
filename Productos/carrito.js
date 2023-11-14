let carrito = [];

function agregarAlCarrito(id) {
  const producto = obtenerProductoPorId(id);

  if (producto) {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio
    });
    actualizarInterfazCarrito();
    console.log('Producto agregado al carrito:', producto);
  } else {
    console.error('Producto no encontrado');
  }
}

function eliminarDelCarrito(id) {
  carrito = carrito.filter(producto => producto.id !== id);
  actualizarInterfazCarrito();
  console.log('Producto eliminado del carrito:', id);
}

function actualizarInterfazCarrito() {
  const carritoProductosDiv = document.getElementById('carrito-productos');
  const totalDiv = document.getElementById('total-carrito');
  let total = 0;

  carritoProductosDiv.innerHTML = '';

  carrito.forEach(producto => {
    total += producto.precio;
    carritoProductosDiv.innerHTML += `
      <p>${producto.nombre} - $${producto.precio.toFixed(2)}
        <button class="btn btn-danger btn-eliminar-producto" data-producto-id="${producto.id}">Eliminar</button>
      </p>
    `;
  });

  totalDiv.textContent = `Total: $${total.toFixed(2)}`;
}

document.addEventListener('DOMContentLoaded', function () {
  // Agregar evento al hacer clic en "Agregar al Carrito"
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-agregar-carrito')) {
      const productoId = parseInt(event.target.getAttribute('data-producto-id'));
      agregarAlCarrito(productoId);
    } else if (event.target.classList.contains('btn-eliminar-producto')) {
      const productoId = parseInt(event.target.getAttribute('data-producto-id'));
      eliminarDelCarrito(productoId);
    }
  });
});
