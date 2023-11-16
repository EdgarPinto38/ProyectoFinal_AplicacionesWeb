function buscarPorNombre() {
    const filtroNombre = document.getElementById('barraBusqueda').value.toLowerCase().trim();

    // Filtrar productos por nombre
    const productosFiltrados = productos.filter(producto =>
        producto.nombre.toLowerCase().includes(filtroNombre)
    );

    // Mostrar productos filtrados
    mostrarProductosPorNombre(productosFiltrados);

    // Actualizar paginación si es necesario
    mostrarPaginacion();
}

function mostrarProductosPorNombre(productosFiltrados) {
    const catalogoDiv = document.getElementById('catalogo');
    catalogoDiv.innerHTML = '';

    productosFiltrados.forEach(producto => {
        catalogoDiv.innerHTML += `
            <div class="producto-container">
                <h2>${producto.nombre}</h2>
                <img src="${producto.imagen}" alt="${producto.nombre}" class="img-fluid">
                <br> 
                <br>
                <button class="btn btn-success" onclick="mostrarPopup(${producto.id})">Ver más</button>
                <button class="btn btn-success btn-agregar-carrito" data-producto-id="${producto.id}">🛒</button>
            </div>
        `;
    });
}
