let carrito = [];

function agregarCarrito(producto){
    carrito.push(producto);
    mostrarCarrito();
}

function mostrarCarrito(){
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    carrito.forEach((item, index) => {
        let li = document.createElement("li");
        li.textContent = (index + 1) + ". " + item;
        lista.appendChild(li);
    });
}

function vaciarCarrito(){
    carrito = [];
    mostrarCarrito();
}