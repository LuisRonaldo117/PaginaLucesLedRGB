const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById('lista-1');
const lista = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners(){
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
}

function comprarElemento(e){
    e.preventDefault();
    if (e.target.classList.contains('agregar-carrito')) {
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(elemento);
    }
}

function leerDatosElemento(elemento) {
    const imgElement = elemento.querySelector('img');
    const tituloElement = elemento.querySelector('h3');
    const precioElement = elemento.querySelector('.precio');
    const aElement = elemento.querySelector('a');

    if (imgElement && tituloElement && precioElement && aElement) {
        const infoElemento = {
            imagen: imgElement.src,
            titulo: tituloElement.textContent,
            precio: precioElement.textContent,
            id: aElement.getAttribute('data-id')
        };
        insertarCarrito(infoElemento);
    } else {
        console.error('Alguno de los elementos no se encontró.');
    }
}


function insertarCarrito(elemento) {
    console.log('Insertando elemento en el carrito:', elemento); 
    
    const lista = document.querySelector('#lista-carrito'); // Referencia directa a la tabla

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>
            <img src="${elemento.imagen}" width="100" />
        </td>
        <td>
            ${elemento.titulo}
        </td>
        <td>
            ${elemento.precio}
        </td>
        <td>
            <a href='#' class="borrar" data-id="${elemento.id}">X</a>
        </td>
    `;

    lista.appendChild(row);
}


function eliminarElemento(e){
    e.preventDefault();
    let elemento,
        elementoId;
    if(e.target.classList.contains('borrar')){
        e.target.parentElement.parentElement.remove();
        elemento = e.target.parentElement.parentElement;
        elementoId = elemento.querySelector('a').getAttribute('data-id');
    }
}

function vaciarCarrito(){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    return false;
}
function cargarEventListeners() {
    elementos1.addEventListener('click', comprarElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarCarrito);
    
    // Asignar lista dentro de cargarEventListeners
    const lista = document.querySelector('#lista-carrito tbody');
    
    function insertarCarrito(elemento) {
        // Resto del código para insertar elementos en el carrito
    }
}
