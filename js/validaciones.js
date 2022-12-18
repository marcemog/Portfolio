export function valida(input) {
    const tipoDeInput = input.dataset.tipo
    if (validadores[tipoDeInput]) {
        validadores[tipoDeInput](input);
    }

    //agrega o quita la clase input-container--invalid para poner el input en rojo de ser necesario por error
    if(input.validity.valid){
        input.parentElement.classList.remove("input-group--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = ""
    } else {
        input.parentElement.classList.add("input-group--invalid");
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
]

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío",
        customError: "El campo nombre no debe superar los 50 caracteres"
    },
    email: {
        valueMissing: "El campo correo no puede estar vacío",
        patternMismatch: "El correo no es válido"
    },
    asunto: {
        valueMissing: "El campo contraseña no puede estar vacío",
        customError: "El campo asunto no debe superar los 50 caracteres"
    },
    mensaje: {
        valueMissing: "El campo fecha de nacimiento no puede estar vacío",
        customError: "El campo asunto no debe superar los 300 caracteres"
    },
}

function mostrarMensajeDeError(tipoDeInput, input) {
    let mensaje = " "

    tipoDeErrores.forEach (error => {
        if(input.validity[error]) {
            mensaje = mensajesDeError[tipoDeInput][error];
        }
    })

    return mensaje;
}
