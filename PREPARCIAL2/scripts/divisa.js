var monedas = []

function agregarMoneda() {
    let nombre = document.getElementById('nombre-moneda').value
    let costo = document.getElementById('costo-conversion').value

    if(!(validar(nombre, costo))){
        return
    }

    localStorage.setItem(nombre, costo)
}

function validar(nombre, costo) {
    if(nombre == ""){
        alert("Debe ingresar el nombre de la moneda")
        return false
    }
    if(costo <= 0){
        alert("Debe ingresar el costo de conversion de la moneda y que sea mayor a 0")
        return false
    }
}