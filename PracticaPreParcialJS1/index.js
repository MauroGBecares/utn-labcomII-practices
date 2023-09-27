function calculatePrice(){
    let resultado = document.getElementById('result');
    let capacidad = document.getElementById('capacidad-gb').value;
    let cantidad = document.getElementById('cantidad-celulares').value;
    switch (capacidad) {
        case "128gb":
            resultado.innerHTML = `<p>Cotización: $ ${150000 * cantidad}</p>`
            break;
        case "256gb":
            resultado.innerHTML = `<p>Cotización: $ ${165000 * cantidad}</p>`
            break;
        default:
            resultado.innerHTML = `<p>Cotización: $ ${180000 * cantidad}</p>`
            break;
    }
}

function changeProductImage(){
    let color = document.getElementById('color-celular').value;
    let mostrarImagen = document.getElementById('imagen-iphone');
    switch (color) {
        case "grafito":
            mostrarImagen.src = "https://tienda.personal.com.ar/images/i_Phone_12_Pro_Max_Grafito_II_min_e247017ff9.png";
            break;
        case "sierra":
            mostrarImagen.src = "https://tienda.personal.com.ar/images/i_Phone_13_pro_sierra_blue_min_7a139db599.png";
            break;
        case "silver":
            mostrarImagen.src = "https://tienda.personal.com.ar/images/Iphone13_pro_Silver_min_5d9348c156.png";
            break;
        default:
            mostrarImagen.src = "https://tienda.personal.com.ar/images/i_Phone_13_Pro_256_GB_Gold2_fbd8557725.png";
            break;
    }
}