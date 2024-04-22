//Como este componente, no se pinta como tal, solo es reutilizable para mostrar algo

export const validateAvatarUrl=(url)=> {
  //Regex= regulate expresion
  const regex=/^(ftp|http|https):\/\/[^ "]+$/;

  return regex.test(url)
}

export const avatarUrlValidationMessage='Esta no es una URL valida'