import logo from '../assets/img/EscudoPeque.svg';

export const Logo=({text})=>{
    //props: poder heredar de un componente padre hacia un componente hijo
    //se podria decir como un estado dentro de un componente
    return (
        <div className='auth-form-logo-container'>
            <img src={logo} alt='Escudo kinal'/>
            <span>{text}</span>
        </div>
    )
}