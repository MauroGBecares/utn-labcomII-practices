const ivaIndustrial = 0.27
const ivaResidencial = 0.21
const distritoCentro = 5.80
const distritoSur = 5.40
const distritoOeste = 5.35
const distritoEste = 5.60
const costoServicio = 102

function calcularCosto(){
    let resultado = document.getElementById('resultado')
    let tipoUsuario = document.getElementsByName('opcion-usuario')
    let distrito = document.getElementById('distritos').value
    let cantidadKwh = document.getElementById('cantidadKwh').value
    let iva = 0

    if(!(validar(tipoUsuario, distrito, cantidadKwh))){
        return
    }

    if (tipoUsuario[0].checked){
        iva = ivaIndustrial
    }
    else{
        iva = ivaResidencial
    }

    switch (distrito) {
        case "centro":
            resultado.innerHTML = `El resultado es ${costoServicio + cantidadKwh * distritoCentro * (1 + iva)}`     
            break;
        case "sur":
            resultado.innerHTML = `El resultado es ${costoServicio + cantidadKwh * distritoSur * (1 + iva)}`     
            break;
        case "oeste":
            resultado.innerHTML = `El resultado es ${costoServicio + cantidadKwh * distritoOeste * (1 + iva)}`     
            break;
        default:
            resultado.innerHTML = `El resultado es ${costoServicio + cantidadKwh * distritoEste * (1 + iva)}`     
            break;
    }
}

function validar(tipoUsuario, distrito, cantidadKwh) {
    if (!(tipoUsuario[0].checked || tipoUsuario[1].checked)){
        alert("Debe seleccionar el tipo de Usuario")
        return false
    }
    if (distrito == ""){
        alert("Debe seleccionar el distrito")
        return false
    }
    if (cantidadKwh <= 0){
        alert("La cantidad de KWH debe ser mayor que 0")
        return false
    }
    return true
}