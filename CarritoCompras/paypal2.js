document.addEventListener("DOMContentLoaded", function () {
    var cart = [];
    var productos = [];
  
    function agregarAlCarrito(producto) {
        cart.push(producto);
        actualizarCarritoNavbar();
        actualizarCarritoEnPagina();
    }
  
    function actualizarCarritoNavbar() {
        const carritoNavbar = document.getElementById('carritoNavbar');
        if (carritoNavbar) {
            carritoNavbar.textContent = `Carrito (${cart.length} productos)`;
        }
    }
  
    function actualizarCarritoEnPagina() {
        const carritoProductosContainer = document.getElementById('carrito-productos');
        if (carritoProductosContainer) {
            carritoProductosContainer.innerHTML = '';
  
            cart.forEach(producto => {
                carritoProductosContainer.innerHTML += `
                    <div class="producto-en-carrito">
                        <span>${producto.nombre}</span>
                        <span>Precio: $${producto.precio.toFixed(2)}</span>
                        <button class="btn-eliminar-producto" data-producto-id="${producto.id}">Eliminar</button>
                    </div>
                `;
            });
  
            const botonesEliminar = document.querySelectorAll('.btn-eliminar-producto');
            botonesEliminar.forEach(boton => {
                boton.addEventListener('click', function () {
                    const productoId = parseInt(boton.dataset.productoId);
                    eliminarProductoDelCarrito(productoId);
                });
            });
        }
    }
  
    function eliminarProductoDelCarrito(id) {
        cart = cart.filter(producto => producto.id !== id);
        actualizarCarritoNavbar();
        actualizarCarritoEnPagina();
    }
  
    document.body.addEventListener('click', function (event) {
        const botonAgregar = event.target.closest('.btn-agregar-carrito');
        if (botonAgregar) {
            const productoId = parseInt(botonAgregar.dataset.productoId);
            const producto = obtenerProductoPorId(productoId);
  
            if (producto) {
                agregarAlCarrito(producto);
            } else {
                console.error('Producto no encontrado en el carrito');
            }
        }
    });
  
    function obtenerProductoPorId(id) {
        const productoEncontrado = productos.find(producto => producto.id === id);
        if (productoEncontrado) {
            return productoEncontrado;
        } else {
            console.error('Producto no encontrado para el ID:', id);
            return null;
        }
    }
  
    
    fetch('productos.json')
        .then(response => response.json())
        .then(data => {
            productos = data;
            console.log('Productos cargados:', productos);
            mostrarProductos(paginaActual);
            mostrarPaginacion();
        })
        .catch(error => console.error('Error al cargar el archivo JSON:', error));
  
    
  });
  