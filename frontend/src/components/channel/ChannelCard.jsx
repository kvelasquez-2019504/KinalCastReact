//La carpeta de este archivo, separa los componentes del área de channel
const imageUrl='https://static-cdn.jtvnw.net/user-default-pictures-uv/294c98b5-e34d-42cd-a8f0-140b72fba9b0-profile_image-300x300.png'

const ChannelAvatar=({url})=>{
    return (
        <div className="channels-avatar-container">
            <img src={url || imageUrl} width="100%" height='100%' alt="default avatar" />
        </div>
    )
}

export const ChannelCard =({
    title,
    id,
    username,
    isOnline,
    avatarUrl,
    navigateToChannelHandler
})=>{
    //funcion que me permite hacer cambio del dashboard
    const handleNavigate=()=>{
        navigateToChannelHandler(id)
    }
    //cuando pinte el componente en channel, leera la del prop, de lo contrario carga una por defecto
    //en style, tengo 2 {{}}, porque uno es de la propiedad de react y la otra es de stilos
    return (
        <div className="channels-card" onClick={handleNavigate}>
            <ChannelAvatar url={avatarUrl}/>
            <span className="channels-card-title">{title}</span>
            <span className="channels-card-title">{username}</span>
            <span className="channels-card-title" style={{color:isOnline?'green':'red'}}>
                {isOnline?'Online':'Offline'}
            </span>
        </div>
    )
}