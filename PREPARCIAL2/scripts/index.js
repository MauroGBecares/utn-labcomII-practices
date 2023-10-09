var monedas = [{ nombre: "dolar", valor: 900 }, { nombre: "euro", valor: 500 }]


function cargarDivisas() {
    let desplegable = document.getElementById('select-moneda')
    for (let i = 0; i < monedas.length; i++) {
        if (monedas[i].nombre != localStorage.key(i)) {
            monedas.push({ nombre: localStorage.key(i), valor: parseFloat(localStorage.getItem(localStorage.key(i))) })
        }
    }
    console.log(monedas)
    if (localStorage.length > 0) {
        for (let i = 0; i < localStorage.length; i++) {
            monedas.forEach(moneda => {
                if (localStorage.key(i) == moneda.nombre) {
                    let option = document.createElement('option')
                    option.value = moneda.nombre
                    option.textContent = moneda.nombre.charAt(0).toUpperCase() + moneda.nombre.slice(1).toLowerCase()
                    desplegable.appendChild(option)
                }
            });
        }
    }
}

function calcularDivisa() {
    let monto = document.getElementById('txt-cantidad').value
    let divisa = document.getElementById('select-moneda').value
    let parrafo = document.getElementById('resultado')
    
    if (!(validar(monto, divisa))){
        return
    }

    monedas.forEach(moneda => {
        if (divisa == moneda.nombre) {
            parrafo.innerHTML = `La cotización del ${divisa.charAt(0).toUpperCase() + divisa.slice(1).toLowerCase()} es: ${monto * moneda.valor}`
            return
        }
    });
}

function validar(monto, divisa){
    if (monto <= 0){
        alert("Debe ingresar un número mayor que 0")
        return false
    }
    if (divisa == ""){
        alert("Debe ingresar una divisa para convertir")
        return false
    }
}