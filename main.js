
//* basicamente es la estructura de un control de productos en los que se incorpora un cartel de bienvenida
//*con opciones a elegir.
//* se pueden ver en consola los productos q hay, buscar productos, y de no encontrarlos agregarlos si asi lo desea

const Producto = function(nombre,precio,stock){
    this.nombre = nombre
    this.precio = precio
    this.stock = stock
}

let producto1 = new Producto("Paracetamol", 700, 20)
let producto2 = new Producto("alikal", 650, 130)
let producto3 = new Producto("ibuprofeno 600mg", 1200, 300)

let listado = [producto1,producto2,producto3]

function buscarProducto(){
    let queBuscas = prompt("Ingresar el nombre del articulo que buscas").toUpperCase()
    let resultado = listado.filter((x)=>x.nombre.toUpperCase().includes(queBuscas))

    if(resultado.length >0){
        console.table(resultado)
    }
    else{
        alert ("no se encontro resultado de " + queBuscas)
        let respuesta= confirm("Desea agregarlo al listado?")

        if (respuesta == true){
            crearProducto()
        }     
    }         
} 

function crearProducto(){
    let nombre = prompt ("nombre del nuevo producto")
    let precio = parseFloat(prompt("cual es el precio del producto?"))
    let stock = parseInt (prompt("ingrese la cantidad de unidades a registrar"))

    if(nombre === null || isNaN(stock)|| isNaN(precio)|| nombre == null){
        alert("Datos invalidos")
        let respuesta= confirm("desa volver a ingresarlos?")
        if(respuesta== true){
            return crearProducto()
        }  
    }
    
let producto = new Producto( nombre,precio, stock)
    listado.push(producto)
    console.table(listado) 
   
} 

function mostrarMenu() {
    alert("¡Bienvenido al sistema de gestión de productos!\n\nSeleccione una opción:\n\n1. Buscar Producto\n2. Agregar Producto\n3. Mostrar Listado");

    let opcion = prompt("Ingrese el número de la opción que desea:");

    switch (opcion) {
        case "1":
            buscarProducto();
            break;
        case "2":
            crearProducto();
            break;
        case "3":
            mostrarListado();
            break;
        default:
            alert("Opción no válida. Por favor, elija 1, 2 o 3.");
            mostrarMenu();
            break;
    }
}

function mostrarListado() {
    console.table(listado);
}

mostrarMenu();
    