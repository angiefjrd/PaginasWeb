// Instancia el árbol rojo-negro
const arbolInventario = new ArbolRojo_Negro();

// Referencias a elementos del DOM
const formAgregar = document.getElementById("agregar");
const formBuscar = document.getElementById("buscar");
const tablaInventario = document.getElementById("tablaInventario");
const resultadoBuscar = document.getElementById("resultado");

// Función para actualizar la tabla del inventario
function actualizarTabla() {
    tablaInventario.innerHTML = ""; // Limpiar la tabla
    arbolInventario.recorrer((nodo) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
            <td>${nodo.codigo}</td>
            <td>${nodo.nombre}</td>
        `;
        tablaInventario.appendChild(fila); // Agregar fila a la tabla
    });
}

// Agregar productos al árbol
formAgregar.addEventListener("submit", (e) => {
    e.preventDefault();
    const codigo = parseInt(document.getElementById("codigo").value, 10);
    const nombre = document.getElementById("nombre").value.trim();

    if (!isNaN(codigo) && nombre) {
        arbolInventario.insertar(codigo, nombre);
        formAgregar.reset(); // Limpiar el formulario
        actualizarTabla(); // Actualizar la tabla
    } 
});

// Buscar productos por código
formBuscar.addEventListener("submit", (e) => {
    e.preventDefault();

    const codigo = parseInt(document.getElementById("buscarCodigo").value, 10);

    if (!isNaN(codigo)) {
        const nodo = arbolInventario.buscar(codigo);
        if (nodo) {
            resultadoBuscar.textContent = `Producto encontrado: ${nodo.nombre}`;
        } else {
            resultadoBuscar.textContent = "Producto no encontrado.";
        }
    } 
});