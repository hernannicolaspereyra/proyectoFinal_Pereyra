let productos = [
    { id: 39, nombre: "Audio video ps2", categoria: "Accesorios", precio: 3240, stock: 3, ruta: "audio video ps2.jpg" },
    { id: 3, nombre: "Auriculares gamer pc", categoria: "Accesorios", precio: 11200, stock: 1, ruta: "auriculares gamer pc.png" },
    { id: 13, nombre: "Auriculares Xbox", categoria: "Accesorios", precio: 15700, stock: 2, ruta: "auriculares xbox.jpg" },
    { id: 43, nombre: "Auriculares con cable Xbox", categoria: "Accesorios", precio: 12800, stock: 2, ruta: "auriculates con cable xbox.jpg" },
    { id: 11, nombre: "Call of duty", categoria: "Juegos", precio: 5500, stock: 3, ruta: "call of duty.avif" },
    { id: 60, nombre: "Cargador mando ps3", categoria: "Accesorios", precio: 2100, stock: 4, ruta: "cargador mando ps3.webp" },
    { id: 44, nombre: "Convertidor Xbox", categoria: "Accesorios", precio: 10000, stock: 1, ruta: "convertidor xbox.jpg" },
    { id: 81, nombre: "Crash mind over mutant", categoria: "Juegos", precio: 3600, stock: 3, ruta: "crash.jpg" },
    { id: 66, nombre: "Dota 2", categoria: "Juegos", precio: 21000, stock: 4, ruta: "dota 2.jfif" },
    { id: 64, nombre: "Dragon Ball Z KAKAROT", categoria: "Juegos", precio: 4100, stock: 1, ruta: "dragon ball z.jpg" },
    { id: 100, nombre: "Family game", categoria: "Consolas", precio: 34000, stock: 3, ruta: "family game.jpg" },
    { id: 41, nombre: "Fornite", categoria: "Juegos", precio: 13900, stock: 1, ruta: "fornite.webp" },
    { id: 59, nombre: "Nintendo Game cube", categoria: "Consolas", precio: 22000, stock: 2, ruta: "game cube.webp" },
    { id: 65, nombre: "Tom Clancy Ghost recon", categoria: "Juegos", precio: 6200, stock: 0, ruta: "ghost recon.webp" },
    { id: 22, nombre: "Kit move Ps3", categoria: "Accesorios", precio: 16000, stock: 1, ruta: "kit move ps3.webp" },
    { id: 96, nombre: "Mando ps2", categoria: "Accesorios", precio: 5000, stock: 5, ruta: "mando ps2.jpg" },
    { id: 19, nombre: "Mando Ps3", categoria: "Accesorios", precio: 7000, stock: 2, ruta: "mando ps3.jpg" },
    { id: 82, nombre: "Mando Xbox", categoria: "Accesorios", precio: 6700, stock: 2, ruta: "mando xbox.jpg" },
    { id: 32, nombre: "Super Mario Party", categoria: "Juegos", precio: 7000, stock: 3, ruta: "mario party.jpg" },
    { id: 55, nombre: "Mause Gamer", categoria: "Accesorios", precio: 9400, stock: 3, ruta: "mause gamer.jpg" },
    { id: 51, nombre: "Xbox one", categoria: "Consolas", precio: 400000, stock: 2, ruta: "xbox one.jpg" },
    { id: 45, nombre: "Volante Ps2", categoria: "Accesorios", precio: 45000, stock: 0, ruta: "volante ps2.webp" },
    { id: 30, nombre: "Volante Xbox", categoria: "Accesorios", precio: 28000, stock: 2, ruta: "voalnte xbox.jpg" },
    { id: 28, nombre: "Uncharted Collection", categoria: "Juegos", precio: 11000, stock: 4, ruta: "uncharted collection.jpg" },
    { id: 94, nombre: "Uncharted 4", categoria: "Juegos", precio: 11000, stock: 2, ruta: "uncharted 4.webp" },
    { id: 76, nombre: "The las of us", categoria: "Juegos", precio: 31000, stock: 5, ruta: "the last of us.jpg" },
    { id: 99, nombre: "Teclado mecanico", categoria: "Accesorios", precio: 15000, stock: 2, ruta: "teclado mecanico pc.jfif" },
    { id: 37, nombre: "Super nintendo", categoria: "Consolas", precio: 71000, stock: 4, ruta: "super nintendo.webp" },
    { id: 67, nombre: "Super Mario 3d word", categoria: "Juegos", precio: 13000, stock: 4, ruta: "super mario.jpg" },
    { id: 8, nombre: "Spider Man Miles morales", categoria: "Juegos", precio: 9000, stock: 0, ruta: "spider man.jpg" },
    { id: 70, nombre: "Sonic Superstar", categoria: "Juegos", precio: 2000, stock: 1, ruta: "sonic superstar.webp" },
    { id: 31, nombre: "Sega Genesis", categoria: "Consolas", precio: 30000, stock: 1, ruta: "sega genesis.jpg" },
    { id: 92, nombre: "Resident Evil code veronica", categoria: "Juegos", precio: 10000, stock: 3, ruta: "resident evil.webp" },
    { id: 53, nombre: "Ratchet Clank", categoria: "Juegos", precio: 21000, stock: 2, ruta: "ratchet.jfif" },
    { id: 75, nombre: "Ps5", categoria: "Consolas", precio: 510000, stock: 4, ruta: "ps5.jpg" },
    { id: 35, nombre: "Ps3", categoria: "Consolas", precio: 120000, stock: 2, ruta: "ps3.webp" },
    { id: 23, nombre: "Ps2", categoria: "Consolas", precio: 90000, stock: 1, ruta: "ps2.webp" },
    { id: 2, nombre: "Ps1", categoria: "Consolas", precio: 50000, stock: 1, ruta: "ps1.jfif" },
    { id: 56, nombre: "Mause Hx", categoria: "Accesorios", precio: 50000, stock: 2, ruta: "mause hx.avif" },
    { id: 10, nombre: "Memori card ps2", categoria: "Accesorios", precio: 2000, stock: 1, ruta: "memory ps2.webp" },
    { id: 93, nombre: "Minecraft", categoria: "Juegos", precio: 9000, stock: 3, ruta: "minecraft.jpg" },
    { id: 54, nombre: "Monitor 75hz", categoria: "Accesorios", precio: 50000, stock: 2, ruta: "monitor 75hz pc.jpg" },
    { id: 40, nombre: "Monitor gamer", categoria: "Accesorios", precio: 45000, stock: 1, ruta: "monitor gamer pc.jpeg" },
    { id: 78, nombre: "Multitap ps2", categoria: "Accesorios", precio: 4000, stock: 3, ruta: "multitap ps2.jpg" },
    { id: 87, nombre: "Need For Speed Most Wanted", categoria: "Juegos", precio: 6000, stock: 3, ruta: "need for speed most wanted.jpg" },
    { id: 5, nombre: "Need for Speed Pro Street", categoria: "Juegos", precio: 2000, stock: 2, ruta: "need for speed pro street.webp" },
    { id: 9, nombre: "Nintendo 64", categoria: "Consolas", precio: 70000, stock: 2, ruta: "nintendo 64.jpg" },
    { id: 1, nombre: "Nintendo Switch", categoria: "Consolas", precio: 450000, stock: 3, ruta: "nintendo switch.avif" },
    { id: 7, nombre: "Nintendo Wii", categoria: "Consolas", precio: 300000, stock: 3, ruta: "nintendo wii.jpg" },
    { id: 98, nombre: "Parlantes Gamer", categoria: "Accesorios", precio: 10000, stock: 2, ruta: "parlantes gamer pc.jpg" },
    { id: 69, nombre: "Pc Gamer", categoria: "Consolas", precio: 900000, stock: 2, ruta: "pc gamer.png" },
    { id: 24, nombre: "Plataforma Ps3", categoria: "Accesorios", precio: 10000, stock: 1, ruta: "plataforma ps3.jpg" }
]

//renderizo el carrito y verifico si existen productos en el storage

let carrito = []
let carritoEnStorage = localStorage.getItem("carrito")

if (carritoEnStorage){
    carrito = JSON.parse(carritoEnStorage)
    mostrarCarrito(carrito)
}

// funcion para mostrar productos

function mostrarPorductos(productos) {
    let tarjetas = document.getElementById("tarjetas")
    tarjetas.innerHTML = []
    productos.forEach(producto => {
        let tarjeta = document.createElement("div")
        tarjeta.className = "tarjeta-producto"
        tarjeta.innerHTML = `
            <img src="./img/${producto.ruta}" alt="imagen-producto">
            <h2>${producto.nombre}</h2>
            <p>$${producto.precio}</p>
            <button id=${producto.id}>agregar al carrito</button>
        `
        tarjetas.appendChild(tarjeta)

        let btnAgregarAlCarrito = document.getElementById(producto.id)
        btnAgregarAlCarrito.addEventListener("click", (e) => agregarProductoAlCarrito(productos, carrito, e))
    })
}
mostrarPorductos(productos)

//funcion para agregar productos al carrito

function agregarProductoAlCarrito(productos, carrito, e){
    let productoEncontrado = productos.find(producto => producto.id === Number(e.target.id))
    let productoEnCarrito = carrito.find(producto => producto.id === productoEncontrado.id)

    if (productoEncontrado.stock > 0){
        if(productoEnCarrito){
            if (productoEnCarrito.stock > 0){
                productoEnCarrito.unidades++
                productoEnCarrito.precioTotal += productoEncontrado.precio
                productoEnCarrito.stock--
                alert("Producto agregado exitosamente")
            }else{
                alert("Ya no queda stock de este producto!")
            }    
        }else{
            carrito.push({
                id: productoEncontrado.id,
                nombre: productoEncontrado.nombre,
                precioUnitario: productoEncontrado.precio,
                unidades: 1,
                ruta: productoEncontrado.ruta,
                precio: productoEncontrado.precio,
                precioTotal: productoEncontrado.precio,
                stock: productoEncontrado.stock -1    
            })
            alert("Producto agregado exitosamente")
        }
        localStorage.setItem("carrito", JSON.stringify(carrito))
    }else{
        alert("No hay stock de este producto")
    }
}

//Funcion para filtrar productos por categoria

function filtrarPorCategoria(productos, categoriaSeleccionada) {
    return productos.filter(producto => producto.categoria === categoriaSeleccionada)
}

//Funcion ordenar recibe como parametros un array,propiedad a ordenar,y forma(asc = ascendente,des = descendente)

function ordenar(productos, propiedad, forma) {

    if (forma == "asc") {
        productos.sort((a, b) => {
            if (a[propiedad] > b[propiedad]) {
                return 1
            }
            if (a[propiedad] < b[propiedad]) {
                return -1
            }
            return 0
        })
    } else {
        productos.sort((a, b) => {
            if (a[propiedad] < b[propiedad]) {
                return 1
            }
            if (a[propiedad] > b[propiedad]) {
                return -1
            }
            return 0
        })
    }
}

//Buscador

let buscador = document.getElementById("buscador-input")
let btnBuscador = document.getElementById("boton-buscar")

buscador.addEventListener("change", () => {
    let productoEncontrado = productos.filter(producto => producto.nombre.includes(buscador.value))
    mostrarPorductos(productoEncontrado)
    if (productoEncontrado.length === 0) {
        let productoNoEncontrado = document.createElement("H2")
        productoNoEncontrado.innerText = "Lo siento,no encontramos el producto que deseas buscar"
        productoNoEncontrado.className = ""
        tarjetas.appendChild(productoNoEncontrado)
    }
})

// boton carrito

let botonCarrito = document.getElementById("btn-carrito")

botonCarrito.addEventListener("click", () => {
    if (carrito.length <= 0) {
        alert("El carrito esta vacio")
    } else {
        let carritoDeCompras = document.getElementsByClassName("ocultar")
        carritoDeCompras[0].className = "carrito-de-compras"
        mostrarCarrito(carrito)
        mostrarTotalDelCarrito(carrito)
    }
})

// funcion para mostrar el carrito

function mostrarCarrito(carrito) {
    let tarjetas = document.getElementById("tarjetas-carrito")
    
    tarjetas.innerHTML = ""
    carrito.forEach(producto => {
        let tarjeta = document.createElement("div")
        tarjeta.className = "productos-carrito"
        tarjeta.innerHTML = `
            <img src= "./img/${producto.ruta}" alt="imagen-producto">
            <h2>${producto.nombre}</h2>
            <p>Unidades: ${producto.unidades}</p>
            <p>Precio Unitario: $${producto.precio}</p>
            <p>Precio Total: $${producto.precioTotal}</p>
        `
        tarjetas.appendChild(tarjeta)    
    })
}

// botones en el carrito

let botonesCarrito = document.getElementsByClassName("btn-en-carrito")

for(let i = 0; i < botonesCarrito.length; i++){
    let carritoDeCompras = document.getElementsByClassName("carrito-de-compras")
    if ( i === 0){
            botonesCarrito[0].addEventListener("click", () => {
            carrito = []
            localStorage.clear()
            alert("Compra realizada exitosamente!!")
            carritoDeCompras[0].className = "ocultar"
       }) 
    }else if (i === 1){
            botonesCarrito[1].addEventListener("click", () => {
            carritoDeCompras[0].className = "ocultar"
        })
    }else{
        botonesCarrito[2].addEventListener("click", () => {
            carrito = []
            localStorage.clear()
            alert("Se vacio el carrito de compras")
            carritoDeCompras[0].className = "ocultar"
        })
    }
}

// botones de orden

let botonesOrden = document.getElementsByClassName("btn-filtros")
for (let i = 0; i < botonesOrden.length; i++) {
    if (i == 0) {
        botonesOrden[0].addEventListener("click", () => {
            let productoFiltrado = filtrarPorCategoria(productos, "Juegos")
            mostrarPorductos(productoFiltrado)
        })
    } else if (i == 1) {
        botonesOrden[1].addEventListener("click", () => {
            let productoFiltrado = filtrarPorCategoria(productos, "Consolas")
            mostrarPorductos(productoFiltrado)
        })
    } else if (i == 2) {
        botonesOrden[2].addEventListener("click", () => {
            let productoFiltrado = filtrarPorCategoria(productos, "Accesorios")
            mostrarPorductos(productoFiltrado)
        })
    } else if (i == 3){
        botonesOrden[3].addEventListener("click", () => {
            ordenar(productos, "precio", "asc")
            mostrarPorductos(productos)
        })
    } else if (i == 4){
        botonesOrden[4].addEventListener("click", () => {
            ordenar(productos, "precio", "des")
            mostrarPorductos(productos)
        })
    } else if (i == 5){
        botonesOrden[5].addEventListener("click", () => {
            ordenar(productos, "nombre", "asc")
            mostrarPorductos(productos)
        })
    }else{
        botonesOrden[6].addEventListener("click", () => {
            ordenar(productos, "nombre", "dec")
            mostrarPorductos(productos)
        })
    }
}