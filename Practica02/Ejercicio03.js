let decision = confirm("¿Quieres continuar?");
if (decision) {
    alert("Valiente");
} else {
    alert("Cagao");
}

let decision2 = confirm("¿Desea borrar los datos?");
if (decision2) {
    alert("Borrado");
} else {
    alert("Cancelado");
}


let decision3 = confirm("¿Quieres entrar?");
if (decision3) {
    let decision3 = confirm("¿Recordar credenciales?");
    if (decision3) {
        alert("Sesión iniciada y credenciales guardadas");
    } else {
        alert("Sesión iniciada PERO credenciales no guardadas");
    }
} else {
    alert("No se ha entrado")
}