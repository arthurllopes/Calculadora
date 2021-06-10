const display = document.querySelector('.display')
const numbers = document.querySelectorAll('.number')
const operators = document.querySelectorAll('.operator')

//Criando a função de poder clicar em cada botão
numbers.forEach((number) => {
    number.addEventListener('click', insert)
})
operators.forEach((operator) => {
    operator.addEventListener('click', insert)
})

//Adicionando na tela
function insert(event) {
    let button = event.target.value
    return display.value += button
}

//Limpar
const clean = document.querySelector('.clean')
clean.addEventListener('click', clear)
function clear() {
    display.value = "";
}

//Apagar
const backSpace = document.getElementById('delete')
backSpace.addEventListener('click', del)
function del(){
    display.value = display.value.substring(display.value.length-1, 0)
}

//Mostrar resposta/Calcular
const equal = document.querySelector('#equal')
equal.addEventListener('click', calculate)
function calculate(){

    if(display.value.length == 0){
        display.value = ''
     } else{
        let multiply = display.value.replace(/x/g, '*')
        let elevate = multiply.replace(/°/g, '**')
        const result = eval(elevate)
        display.value = result  
    }
}
