//Agrega a pantalla el tocón que toquemos

let agregar = (valor) => {
    document.getElementById('pantalla').value += valor
}

let borrar = () => {
    document.getElementById('pantalla').value = ''
}

let calcular =() => {
    const valorPantalla = document.getElementById('pantalla').value
    const resultado = eval(valorPantalla)
    document.getElementById('pantalla').value = resultado
}