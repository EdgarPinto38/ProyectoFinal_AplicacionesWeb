import { showMessage } from "./showMessage.js"
function agregarAlCarrito(id) {
  const producto = obtenerProductoPorId(id);

  if (producto) {
    carrito.push({
      id: producto.id,
      nombre: producto.nombre,
      precio: producto.precio
    });

  
    mostrarMensajePopup('Producto agregado al carrito: ' + producto.nombre);

  
    actualizarInterfazCarrito();

    console.log('Producto agregado al carrito:', producto);
  } else {
    console.error('Producto no encontrado');
  }
}
function mostrarMensajePopup(mensaje) {
  var mensajeGlobalElement = document.getElementById("mensaje-global");

  // Verifica si el elemento existe antes de actualizar el contenido
  if (mensajeGlobalElement) {
    // Actualizar el contenido del mensaje
    mensajeGlobalElement.textContent = mensaje;

    // Mostrar el mensaje
    alert("Producto agregado al carrito")
    mensajeGlobalElement.style.display = "block";
    

    // Ocultar el mensaje después de 3 segundos (puedes ajustar el tiempo según tus necesidades)
    setTimeout(function () {
      mensajeGlobalElement.style.display = "none";
    }, 3000);
  } else {
    console.error('Elemento #mensaje-global no encontrado en el DOM');
  }
}


function mostrarPopup() {
  var popup = document.getElementById("popup1");
  popup.style.display = "block";
}

function cerrarPopup() {
  var popup = document.getElementById("popup1");
  popup.style.display = "none";
}

document.addEventListener('DOMContentLoaded', function () {

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

  
  document.getElementById('cerrarPopup').addEventListener('click', cerrarPopup);
});
