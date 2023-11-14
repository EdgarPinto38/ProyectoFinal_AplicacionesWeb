productosFiltrados.forEach(producto => {
    catalogoDiv.innerHTML += `
      <div class="producto-container">
        <h2>${producto.nombre}</h2>
        <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid">
        <br> 
        <br>
        <button class="btn btn-success" onclick="mostrarPopup(${producto.id})">Ver más</button>
        <button class="btn btn-success btn-agregar-carrito" data-producto-id="${producto.id}">Agregar al Carrito</button>
      </div>
    `;
  });
  document.addEventListener('DOMContentLoaded', function () {
    fetch('productos.json')
      .then(response => response.json())
      .then(data => {
        productos = data;
        mostrarProductos(paginaActual);
        mostrarPaginacion();
        // Agrega el manejador de eventos después de cargar los productos
        agregarManejadorCarrito();
      })
      .catch(error => console.error('Error al cargar el archivo JSON:', error));
  });
  
  function agregarManejadorCarrito() {
    document.body.addEventListener('click', function (event) {
      if (event.target.classList.contains('btn-agregar-carrito')) {
        const productId = event.target.getAttribute('data-producto-id');
        agregarAlCarrito(productId);
      }
    });
  }