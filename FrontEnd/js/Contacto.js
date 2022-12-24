const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');
const textareas = document.querySelectorAll('#formulario textarea');

const expresiones = {
	mensaje: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
  nombre: false,
  telefono: false,
  mail: false,
  mensaje: false
}


const validarFormulario = (e) => {
  switch (e.target.name) {
    case "nombre":  
       validarCampo(expresiones.nombre, e.target, 'nombre')
    break;
    case "telefono":
      validarCampo(expresiones.telefono, e.target, 'telefono')
    break;
    case "mail":
      validarCampo(expresiones.mail, e.target, 'mail')
    break;
    case "mensaje":
      validarCampo(expresiones.mensaje, e.target, 'mensaje')

    break;
  }
  

}

const validarCampo = (expresion, input, campo) => {
  if (expresion.test(input.value)){
    document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto')
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto')
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo')
    campos[campo] = true;
  } else {
    document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto')
    document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo')
    campos[campo] = false;
  }
}

inputs.forEach((input) => {
  input.addEventListener('keyup', validarFormulario);
  input.addEventListener('blur', validarFormulario);
})

textareas.forEach((textarea) => {
  textarea.addEventListener('keyup', validarFormulario);
  textarea.addEventListener('blur', validarFormulario);
})

formulario.addEventListener('submit', (e) => {
  e.preventDefault();
    
  if(campos.nombre && campos.telefono && campos.mail && campos.mensaje) {
    formulario.reset();

    document.getElementById('formulario__mensaje-exito').classList.add('formulario__mensaje-exito-activo')
    setTimeout(() => {
      document.getElementById('formulario__mensaje-exito').classList.remove('formulario__mensaje-exito-activo')
    }, 5000)
  }
  
 })




