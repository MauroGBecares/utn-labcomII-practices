const dolar = 900
const euro = 500


function cargarDivisas() {
    let desplegable = document.getElementById("select-moneda");
    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            let option = document.createElement('option')
            let moneda = localStorage.key(i)
            option.value = moneda
            option.textContent = moneda.charAt(0).toUpperCase() + moneda.slice(1).toLowerCase()
            desplegable.appendChild(option)
        }
    }
}

function calcularDivisa() {
    let monto = document.getElementById('txt-cantidad').value
    let divisa = document.getElementById('select-moneda').value
    let parrafo = document.getElementById('resultado')

    if (!(validar(monto, divisa))) {
        return
    }

    switch (divisa) {
        case "dolar":
            parrafo.innerHTML = `La cotización del ${divisa.charAt(0).toUpperCase() + divisa.slice(1).toLowerCase()} es: ${monto * dolar}`
            break;
        case "euro":
            parrafo.innerHTML = `La cotización del ${divisa.charAt(0).toUpperCase() + divisa.slice(1).toLowerCase()} es: ${monto * euro}`
            break;
        default:
            parrafo.innerHTML = `La cotización del ${divisa.charAt(0).toUpperCase() + divisa.slice(1).toLowerCase()} es: ${monto * localStorage.getItem(divisa)}`
            break;
    }
}

function validar(monto, divisa) {
    if (monto <= 0) {
        alert("Debe ingresar un número mayor que 0")
        return false
    }
    if (divisa == "") {
        alert("Debe ingresar una divisa para convertir")
        return false
    }
    return true
}