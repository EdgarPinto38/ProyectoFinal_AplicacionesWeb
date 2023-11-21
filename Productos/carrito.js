import { showMessage } from "../JavaScript/showMessage.js";


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

function mostrarPopup() {
  var popup = document.getElementById("popup1");
  popup.style.display = "block";
  showMessage(productoId + " Agregado al carrito ", "success")
}

function cerrarPopup() {
  var popup = document.getElementById("popup1");
  popup.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function () {
  // Agregar evento al hacer clic en "Agregar al Carrito"
  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('btn-agregar-carrito')) {
      const productoId = parseInt(event.target.getAttribute('data-producto-id'));
      agregarAlCarrito(productoId);
    } else if (event.target.id === 'carrito-imagen') {
      mostrarPopup();
    } else if (event.target.classList.contains('btn-eliminar-producto')) {
      const productoId = parseInt(event.target.getAttribute('data-producto-id'));
      eliminarDelCarrito(productoId);
    }
  });

  // Agregar evento al hacer clic en "Cerrar" en el pop-up
  document.getElementById('cerrarPopup').addEventListener('click', cerrarPopup);
});
