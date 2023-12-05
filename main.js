// declaramos las variables en la busqueda de producto

const Producto = function(nombre, precio, stock) {
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}

let producto1 = new Producto("Paracetamol", 700, 20)
let producto2 = new Producto("Alikal", 650, 130)
let producto3 = new Producto("Ibuprofeno 600mg", 1200, 300)

let listado = [producto1, producto2, producto3]

// Función para guardar la lista en localStorage
function guardarListaEnLocalStorage() {
    localStorage.setItem('productos', JSON.stringify(listado))
}

// Función para cargar la lista desde localStorage al cargar la página
function cargarListaDesdeLocalStorage() {
    const storedListado = localStorage.getItem('productos')
    if (storedListado) {
        listado = JSON.parse(storedListado).map(item => new Producto(item.nombre, item.precio, item.stock))
    }
}

// Cargar lista desde localStorage al cargar la página
cargarListaDesdeLocalStorage();

let valorIngresado = document.getElementById("input")
let boton = document.getElementById("boton")
let mostrarDato = document.getElementById("mostrarInput")

boton.addEventListener("click", () => {
    let dato = valorIngresado.value.toUpperCase();

    let resultado = listado.filter((x) => x.nombre.toUpperCase().includes(dato))

    if (resultado.length > 0) {
        mostrarDato.innerHTML = resultado.map((x) => x.nombre).join(', ')
    } else {
        mostrarDato.innerHTML = "No se encontraron resultados"
    }
})
// declaramos las variables para guardar productos

let inputNombre = document.getElementById("inputNombre")
let inputPrecio = document.getElementById("inputPrecio")
let inputStock = document.getElementById("inputStock")
let botonGuardar = document.getElementById("botonGuardar")
let mostrardato2 = document.getElementById("mostrardato2")

botonGuardar.addEventListener("click", () => {
    let nuevoNombre = inputNombre.value;
    let nuevoPrecio = parseFloat(inputPrecio.value);
    let nuevoStock = parseInt(inputStock.value);

    if (nuevoNombre && !isNaN(nuevoPrecio) && !isNaN(nuevoStock)) {
        let nuevoProducto = new Producto(nuevoNombre, nuevoPrecio, nuevoStock)
        listado.push(nuevoProducto)
        inputNombre.value = ""
        inputPrecio.value = ""
        inputStock.value = ""
        alert("Producto agregado correctamente")
        mostrardato2.innerHTML = ""
        mostrarDato.innerHTML = ""

        // Guardar lista actualizada en localStorage
        guardarListaEnLocalStorage()

    } else {
        mostrardato2.innerHTML = "Por favor, ingrese valores válidos para agregar un producto."
    }
})