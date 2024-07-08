// 1 Capturar el H1, mediante un ID, en una variable llamada "titulo". 
let titulo = document.getElementById("title")

// 2 Crean una variable "tituloPrincipal" cuyo valor sea "Frutas" y cambiar el contenido del título por el de esta variable.
let tituloPrincipal = "Frutas"
titulo.innerHTML = tituloPrincipal
//otra opcion -> let tituloPrincipal = titulo.innerHTML = "Frutas"

// 3 Capturar el header y el footer, mediante la misma clase, y cambiarles el color a naranja.
let header = document.querySelector('header')
let footer = document.querySelector('footer')
header.classList.add('hF', 'bg-orange-500')
footer.classList.add('hF', 'bg-orange-500')

// 4 Capturar y modificar el p del footer, agregarle tu nombre completo y cohort.*
let p = document.querySelector('footer p')
p.innerHTML += ` Mariano Busello - Cohort 055`

// 5 Crear un div dentro del main y agregarle el id "contenedor". Capturar ese div por medio de su id. 

let div = document.createElement('div') //creamos el div 
div.setAttribute('id', 'contenedor') //le damos un id al div 
document.querySelector('main').appendChild(div)//agregamos el div al main 
let contenedor = document.getElementById('contenedor') //capturamos el div por medio de su id
div.classList.add('flex', 'flex-wrap', 'justify-center')

// 6 Crear una función que devuelva la estructura de una card. La función debe devolver un string para más adelante utilizar innerHTML. (La card debe contener los siguientes datos: nombre, foto y descripción). 
const card = (fruta) => {
    return `
    <div class="card bg-gray-500 text-white p-4 m-4 w-1/3 text-center rounded-xl">
    <h3>${fruta.nombre}</h3>
    <img src="${fruta.foto}" alt="${fruta.nombre}">
    <p>${fruta.descripcion}</p>
    </div>
    `
}
// 7 Con el archivo data que se encuentra en la carpeta, realizar un bucle para crear cards con los datos de las frutas, utilizando la función del punto 6. (Este bucle podría meterse en otra función y recibir el array por parámetro).

const objFrutas = (frutas) => {
    let htmlCards = ''
    // for (let i = 0; i < frutas.length; i++) {
    //     htmlCards += card(frutas[i])
    // }
    frutas.forEach(cadaFrutaDelArrayFrutasEnElArchivoData => {
        htmlCards += card(cadaFrutaDelArrayFrutasEnElArchivoData)
    });
    contenedor.innerHTML = htmlCards
}

// 8. Mostrar las cards con los datos pedidos en el div "#contenedor". 
objFrutas(frutas)

// 9. Crear otro div dentro del main, agregarle el id "lista" y capturarlo mediante ese id. Agregar al div el título "Frutas Dulces".

let otroDiv = document.createElement('div')
otroDiv.setAttribute('id', 'lista')
document.querySelector('main').appendChild(otroDiv)
let lista = document.getElementById('lista')

let tituloDivLista = document.createElement('h3')
tituloDivLista.textContent = 'Frutas Dulces'
otroDiv.appendChild(tituloDivLista)

// 10. Crear una función que reciba un array y devuelva una lista desordenada utilizando nodos (createElement). Cada elemento de la lista será el nombre de una fruta. Para esta lista usar las frutas cuya propiedad "esDulce" sea true. 
const listaFrutasDulces = (frutas) => {
    const frutasDulces = frutas.filter(fruta => fruta.esDulce)
    const lista = document.createElement('ul')
    for (let i = 0; i < frutasDulces.length; i++) {
        const fruta = frutasDulces[i]
        const listItem = document.createElement('li')// crea un elemento de lista desordenada 
        listItem.textContent = fruta.nombre// agrega el nombre de la fruta a la lista 
        lista.appendChild(listItem)
    }
    return lista
}

// 11. Mostrar la lista de frutas dulces en el div "#lista". 
let frutasDulces = listaFrutasDulces(frutas)
otroDiv.appendChild(frutasDulces)





