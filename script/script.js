//fech

fetch("./productos.json")
    .then(respuesta => respuesta.json())
    .then(productos => principal(productos))

let carrito = []

// funcion principal

function principal(productos) {

    //renderizo el carrito y verifico si existen productos en el storage

    let carritoEnStorage = localStorage.getItem("carrito")

    if (carritoEnStorage) {
        carrito = JSON.parse(carritoEnStorage)
        mostrarCarrito(carrito)
    }
    

    mostrarPorductos(productos)

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
            Swal.fire(
                'El carrito esta vacio',
                'click para continuar',
                'error'
            )
        } else {
            let carritoDeCompras = document.getElementsByClassName("ocultar")
            carritoDeCompras[0].className = "carrito-de-compras"
            mostrarCarrito(carrito)
            mostrarTotalDelCarrito(carrito)
        }
    })

    // botones en el carrito

    let botonesCarrito = document.getElementsByClassName("btn-en-carrito")

    for (let i = 0; i < botonesCarrito.length; i++) {
        let carritoDeCompras = document.getElementsByClassName("carrito-de-compras")
        if (i === 0) {
            botonesCarrito[0].addEventListener("click", () => {
                carrito = []
                localStorage.clear()
                Swal.fire(
                    'Compra realizada exitosamente!',
                    'Click para continuar',
                    'success'
                )
                carritoDeCompras[0].className = "ocultar"
            })
        } else if (i === 1) {
            botonesCarrito[1].addEventListener("click", () => {
                carritoDeCompras[0].className = "ocultar"
            })
        } else {
            botonesCarrito[2].addEventListener("click", () => {
                carrito = []
                localStorage.clear()
                Toastify({
                    text: "Carrito de compras limpiado",
                    className: "info",
                    gravity: "top",
                    duration: 1500,
                    style: {
                        background: "linear-gradient(to bottom right, #006eff, #0045a0)",
                    }
                }).showToast();
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
        } else if (i == 3) {
            botonesOrden[3].addEventListener("click", () => {
                ordenar(productos, "precio", "asc")
                mostrarPorductos(productos)
            })
        } else if (i == 4) {
            botonesOrden[4].addEventListener("click", () => {
                ordenar(productos, "precio", "des")
                mostrarPorductos(productos)
            })
        } else if (i == 5) {
            botonesOrden[5].addEventListener("click", () => {
                ordenar(productos, "nombre", "asc")
                mostrarPorductos(productos)
            })
        } else {
            botonesOrden[6].addEventListener("click", () => {
                ordenar(productos, "nombre", "dec")
                mostrarPorductos(productos)
            })
        }
    }
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

//funcion para agregar productos al carrito

function agregarProductoAlCarrito(productos, carrito, e) {
    let productoEncontrado = productos.find(producto => producto.id === Number(e.target.id))
    let productoEnCarrito = carrito.find(producto => producto.id === productoEncontrado.id)

    if (productoEncontrado.stock > 0) {
        if (productoEnCarrito) {
            if (productoEnCarrito.stock > 0) {
                productoEnCarrito.unidades++
                productoEnCarrito.precioTotal += productoEncontrado.precio
                productoEnCarrito.stock--
                Toastify({
                    text: "Producto agregado exitosamente!",
                    className: "info",
                    gravity: "bottom",
                    duration: 1500,
                    style: {
                        background: "linear-gradient(to bottom right, #00f155, #208041)",
                    }
                }).showToast();
            } else {
                Toastify({
                    text: "Producto sin stock!",
                    className: "info",
                    gravity: "bottom",
                    duration: 1500,
                    style: {
                        background: "linear-gradient(to bottom right, #f10000, #b60000)",
                    }
                }).showToast();
            }
        } else {
            carrito.push({
                id: productoEncontrado.id,
                nombre: productoEncontrado.nombre,
                precioUnitario: productoEncontrado.precio,
                unidades: 1,
                ruta: productoEncontrado.ruta,
                precio: productoEncontrado.precio,
                precioTotal: productoEncontrado.precio,
                stock: productoEncontrado.stock - 1
            })
            Toastify({
                text: "Producto agregado exitosamente!",
                className: "info",
                gravity: "bottom",
                duration: 1500,
                style: {
                    background: "linear-gradient(to bottom right, #00f155, #208041)",
                }
            }).showToast();
        }
        localStorage.setItem("carrito", JSON.stringify(carrito))
    } else {
        Toastify({
            text: "Producto sin stock!",
            className: "info",
            gravity: "bottom",
            duration: 1500,
            style: {
                background: "linear-gradient(to bottom right, #f10000, #b60000)",
            }
        }).showToast();
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

// funcion para mostrar el total del carrito

function mostrarTotalDelCarrito(carrito) {
    let totalCarrito = document.getElementById("total-del-carrito")
    totalCarrito.innerHTML = []
    let total = document.createElement("div")
    let totalAPagar = carrito.reduce((acumulador, producto) => acumulador + producto.precioTotal, 0)
    total.innerHTML = `
        <h2>El Total a pagar es: $${totalAPagar}<h2/>
    `
    totalCarrito.appendChild(total)
}

