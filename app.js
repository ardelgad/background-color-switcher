// Recuperamos TODOS los elementos HTML que cumplen con la condición class="button"
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

//Cada boton va a actuar por separado
buttons.forEach(cambiarColor);//forEach(FUNCION que tengo que crear luego)

//Esta función se va a ejecutar tantas veces como elementos contenga el array 'buttons'.
function cambiarColor(button) {
    console.log("funciono? Si!");
    //Al clickar un boton
    button.addEventListener('click', function (event){
        //Cambio el color a el mismo que los botones
        body.style.backgroundColor = event.target.id
    });
};