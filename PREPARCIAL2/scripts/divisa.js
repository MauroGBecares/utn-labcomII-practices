var monedas = []

function agregarMoneda() {
    let nombre = document.getElementById('nombre-moneda').value
    let costo = document.getElementById('costo-conversion').value
    let mensaje = document.getElementsByClassName('mensaje')
    
    if(!(validar(nombre, costo))){
        return
    }

    localStorage.setItem(nombre, costo)
    
    mensaje[0].style.display = "flex"
    setTimeout(() => {
        mensaje[0].style.display = "none"
    }, 3000);
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
    if (nombre == "dolar" || nombre == "euro"){
        alert("Las divisas dolar y euro ya estan agregadas")
        return false
    }
    return true
}