let $divCaja = document.getElementById('caja');

fetch('https://rickandmortyapi.com/api/location')
.then( (data) => {
    return data.json();
})
.then( (data)=> {
    let lugares = data.results;
    for (let i=0; i<lugares.length; i++){
        $divCaja.innerHTML += `<div class="lugar">
                                    <h2>Nombre: ${lugares[i].name}</h2>
                                    <p>Tipo: ${lugares[i].type}</p>
                                    <p>Dimensión: ${lugares[i].dimension}</p>
                                </div>`
    };
})
.catch((error)=>{
    console.log(error)
});

let $h1 = document.querySelector('h1');
let $boton = document.getElementById('boton');

function cambiarColor () {
    $h1.classList.toggle('verde');
};

$boton.addEventListener('click', cambiarColor);
