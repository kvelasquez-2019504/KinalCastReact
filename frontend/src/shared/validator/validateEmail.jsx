export const validateEmail =(email)=>{
    const regex = /\S+@\S+\.\S+/;
    //text sirve para evaluar si el valor cumple con los requerimientos
    return regex.test(email);
}

export const emailValidationMessage='Por favor ingresar una direccion de correo electronico'