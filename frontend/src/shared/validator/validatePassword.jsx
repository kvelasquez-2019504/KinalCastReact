export const validatePassword =(password)=>{
    const regex=/^\S{6,12}$/;
    return regex.test(password);
}

export const validatePasswordMessage='Por favor ingrese una clave entre 6 y 12 caracteres sin espacios'