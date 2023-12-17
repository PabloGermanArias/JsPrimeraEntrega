
const Producto = function(nombre, precio, stock) {
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}

let producto1 = new Producto("Paracetamol", 700, 20)
let producto2 = new Producto("Alikal", 650, 130)
let producto3 = new Producto("Ibuprofeno 600mg", 1200, 300)

let listado = [producto1, producto2, producto3]

function guardarListaEnLocalStorage() {
    localStorage.setItem('productos', JSON.stringify(listado))
}

function cargarListaDesdeLocalStorage() {
    const storedListado = localStorage.getItem('productos')
    if (storedListado) {
        listado = JSON.parse(storedListado).map(item => new Producto(item.nombre, item.precio, item.stock))
    }
}

cargarListaDesdeLocalStorage();

let valorIngresado = document.getElementById("input")
let boton = document.getElementById("boton")
let mostrarDato = document.getElementById("mostrarInput")

boton.addEventListener("click", () => {
    let dato = valorIngresado.value.toUpperCase();

    let resultados = listado.filter((x) => x.nombre.toUpperCase().includes(dato));

    if (resultados.length > 0) {
        mostrarDato.innerHTML = resultados.map((producto) => {
            return `<div>
                        <p>Nombre: ${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p>
                        <p>Stock: ${producto.stock}</p>
                    </div>`
        }).join('')
    } else {
        mostrarDato.innerHTML = "No se encontraron resultados"
    }
})

let inputNombre = document.getElementById("inputNombre")
let inputPrecio = document.getElementById("inputPrecio")
let inputStock = document.getElementById("inputStock")
let botonGuardar = document.getElementById("botonGuardar")
let mostrardato2 = document.getElementById("mostrardato2")

botonGuardar.addEventListener("click", () => {
    let nuevoNombre = inputNombre.value;
    let nuevoPrecio = parseFloat(inputPrecio.value)
    let nuevoStock = parseInt(inputStock.value)

    if (nuevoNombre && !isNaN(nuevoPrecio) && !isNaN(nuevoStock)) {
        let nuevoProducto = new Producto(nuevoNombre, nuevoPrecio, nuevoStock)
        listado.push(nuevoProducto)
        inputNombre.value = ""
        inputPrecio.value = ""
        inputStock.value = ""
        Swal.fire("Producto " + nuevoProducto.nombre + " agregado correctamente")
        mostrardato2.innerHTML = ""
        mostrarDato.innerHTML = ""

        guardarListaEnLocalStorage()

    } else {
        mostrardato2.innerHTML = "Por favor, ingrese valores válidos para agregar un producto."
    }
}) 

function mostrarHoraActual() {
    const mostrarHora = document.getElementById("mostrarHora");

    function actualizarHora() {
        fetch("http://worldtimeapi.org/api/ip")
            .then(response => response.json())
            .then(data => {
                const hora = data.datetime.slice(11, 19)
                mostrarHora.innerHTML = `<p>Hora actual: ${hora}</p>`
            })
            .catch(error => {
                console.error("Error al obtener la hora:", error)
            });
    }  
    actualizarHora()
    setInterval(actualizarHora, 1000)
}

mostrarHoraActual()



