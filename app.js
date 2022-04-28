


let carritoDeCompras = []

const contenedorProductos = document.getElementById('contenedor-productos');
const contenedorCarrito = document.getElementById('contenedorCarrito');

const botonTerminar = document.getElementById('terminar');
const finCompra = document.getElementById('fin-compra');

const contadorCarrito = document.getElementById('contadorCarrito');
const precioTotal = document.getElementById('precioTotal');

let id = 0;

class Producto {
    constructor (nombre, unidades, precio, imagen){
        this.id = id++;
        this.nombre = nombre.toUpperCase();
        this.unidades = unidades.toUpperCase();
        this.precio = precio.toUpperCase();
        this.imagen = imagen;
    }
}

// Array

let CrearProductos = [
    new Producto(
        "Arroz",
        "20",
        "$100",
        "/C:\Users\matia\OneDrive\Desktop\Coder\JavaScript\Pre entregas\Proyecto final Coder\Img\Arroz-Amarillo-Gallo-Oro-1kg-1-13401.jpg"
    ),
    new Producto(
        "Aceite de Oliva",
        "12",
        "$300",
    ),
    new Producto(
        "Fideos Matarazzo",
        "30",
        "$90",
        "/Fideos-spaghetti-Matarazzo-500-Gr-1-819"
    ),
    new Producto(
        "Coca Cola",
        "24",
        "$115",
    ),
    new Producto(
        "Azucar",
        "40",
        "$60",
    ),
    new Producto(
        "Leche",
        "20",
        "$60",
    ),
]

console.log(CrearProductos)


// Funciones

const crearProducto = function() {
    id++;
    let productoNuevo = new Producto (
     id,
     nombre,
     cantidad,
     precio,
    );

     // Pushear productos

    return nuevoProducto
}




console.log(JSON.stringify(CrearProductos));

const agregarProductos = () =>{
    CrearProductos.push(crearProducto())
}



// Manipulacion del DOM

for (let i = 0; i < CrearProductos.length; i++) {
    const element = CrearProductos[i];
    const {id, nombre, unidades, precio} = element 
    const card = `<div class="col mb-3 mt-3 prod" id="${id}">
        <span class="clearfix"></span>
        <div data-aos="fade-up" class="card mx-auto">
          <img src="" class="card-img-top" alt="producto">
          <div class="card-body">
            <h5 class="card-title">${nombre} </h5>   
            <p class="card-text">${precio}</p>
            
            <button class="btn btn-success stretched-link btnComprar">Agregar al carrito</button>
          </div>
        </div>
      </div>`
    const container = document.getElementById("productos")
    container.innerHTML += card
    
}

const botonComprar = document.getElementsByClassName("btnComprar")

for (let i = 0; i < botonComprar.length; i++) {
    const element = botonComprar[i];
    element.addEventListener("click", agregarAlCarrito)
}



// carrito de clase de juani 




// function agregarAlCarrito(id) {

//     let productoAgregar = CrearProductos.find(elemento => elemento.id == id)
    
//     carritoDeCompras.push(productoAgregar)

//     mostrarCarrito(productoAgregar)
    
//     }
    
    function mostrarCarrito(){
          
         let div = document.createElement('div')
         div.className = 'productosEnCarrito'
          div.innerHTML= `
                      <p>hola${productoAgregar.nombre}</p>
                     <p>Precio: ${productoAgregar.precio}</p>
                      <button class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
          `
    contenedorCarrito.appendChild(div)
    //     console.log(mostrarCarrito)
    }

    function actualizarCarrito (){
    
    }
    
    function recuperar(){
    
    }
    
    recuperar()
    

// hasta aca carrito de clase de juani

function agregarAlCarrito(e) {
    const container = (e.target).parentNode.parentNode.parentNode
    const id = container.getAttribute("id")
    const encontrado = CrearProductos.find((producto) => producto.id == id)
    console.log(encontrado)
}

const crearCardProducto = function(){
    if(localStorage.length === 0){
        for(let producto of CrearProductos){
        agregarProductos(producto)
    }
  } else {
      CrearProductos = [];
      Object.keys(localStorage).forEach(function(key){
          let producto = JSON.parse(localStorage.getItem(key));
          CrearProductos.push(producto);
      })
  }
}
  
 