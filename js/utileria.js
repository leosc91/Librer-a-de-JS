
function validarCorreo(correo) {
    let formato = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return formato.test(correo);
}

function soloLetras(texto) {
    let formato = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/;
    return formato.test(texto);
}

function validarLongitud(numero, maxLongitud) {
    let texto = numero.toString();
    if (texto.length <= maxLongitud) {
        return true;
    } else {
        return false;
    }
}

function calcularEdad(fechaNacimiento) {
    let fechaN = new Date(fechaNacimiento);
    let hoy = new Date();
    
    let edad = hoy.getFullYear() - fechaN.getFullYear();
    let mes = hoy.getMonth() - fechaN.getMonth();
    
    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaN.getDate())) {
        edad = edad - 1;
    }
    return edad;
}

function esMayorDeEdad(fechaNacimiento) {
    let edadCalculada = calcularEdad(fechaNacimiento);
    if (edadCalculada >= 18) {
        return true;
    } else {
        return false;
    }
}

function validarPassword(password) {
    if (password.length < 8) {
        return false;
    }

    let tieneMayuscula = false;
    let tieneMinuscula = false;
    let tieneNumero = false;
    let tieneEspecial = false;
    
    let especial = "!@#$%^&*()_+-=[]{}|;':\",./<>?";

    for (let i = 0; i < password.length; i++) {
        let caracter = password[i];

        if (caracter >= 'A' && caracter <= 'Z') {
            tieneMayuscula = true;
        } else if (caracter >= 'a' && caracter <= 'z') {
            tieneMinuscula = true;
        } else if (caracter >= '0' && caracter <= '9') {
            tieneNumero = true;
        } else if (especial.indexOf(caracter) !== -1) {
            tieneEspecial = true;
        }
    }

    if (tieneMayuscula && tieneMinuscula && tieneNumero && tieneEspecial) {
        return true;
    } else {
        return false;
    }
}

function validarCURP(curp) {
    if (curp.length !== 18) {
        return false;
    }
    let formato = /^[A-Z]{4}\d{6}[HM][A-Z]{5}[A-Z\d]\d$/;
    return formato.test(curp.toUpperCase());
}

function validarTarjetaBancaria(numeroTarjeta) {
    let tarjeta = numeroTarjeta.toString().replace(/ /g, "");
    
    if (tarjeta.length !== 16) {
        return false;
    }
    
    let formato = /^\d{16}$/;
    return formato.test(tarjeta);
}















function ejecutarValidacion() {
    let nombre = document.getElementById("campoNombre").value;
    let fecha = document.getElementById("campoFecha").value;
    let curp = document.getElementById("campoCurp").value;
    let tarjeta = document.getElementById("campoTarjeta").value;

    let errNombre = document.getElementById("errorNombre");
    let errCurp = document.getElementById("errorCurp");
    let errTarjeta = document.getElementById("errorTarjeta");

    let formularioCorrecto = true;

    if (soloLetras(nombre)) {
        errNombre.style.display = "none";
    } else {
        errNombre.style.display = "block";
        formularioCorrecto = false;
    }

    if (validarCURP(curp) && validarLongitud(curp, 18)) {
        errCurp.style.display = "none";
    } else {
        errCurp.style.display = "block";
        formularioCorrecto = false;
    }

    if (validarTarjetaBancaria(tarjeta)) {
        errTarjeta.style.display = "none";
    } else {
        errTarjeta.style.display = "block";
        formularioCorrecto = false;
    }

    if (formularioCorrecto && fecha !== "") {
        document.getElementById("textoEdad").innerText = "Tienes " + calcularEdad(fecha) + " años de edad.";
        
        if (esMayorDeEdad(fecha)) {
            document.getElementById("textoMayoría").innerText = "Eres mayor de edad.";
        } else {
            document.getElementById("textoMayoría").innerText = "Eres menor de edad.";
        }

        document.getElementById("miModal").style.display = "flex";
    }
}

function cerrarModal() {
    document.getElementById("miModal").style.display = "none";
}

function Login() {
    let correo = document.getElementById("campoCorreo").value;
    let clave = document.getElementById("campoPass").value;

    let errCorreo = document.getElementById("errorCorreo");
    let errPass = document.getElementById("errorPass");

    let correoValido = validarCorreo(correo);
    let claveValida = validarPassword(clave);

    if (correoValido) {
        errCorreo.style.display = "none";
    } else {
        errCorreo.style.display = "block";
    }

    if (claveValida) {
        errPass.style.display = "none";
    } else {
        errPass.style.display = "block";
    }

    if (correoValido && claveValida) {
        alert("Iniciando sesión");
    }
}