//sirve para pintar dentro de si, todos los componentes del dashboard
import { Route, Routes } from "react-router-dom";
import {Channels} from '../channel/Channels'
import { Settings } from "../settings/Settings";
import { ChannelView } from "../channel/ChannelView";

export const Content = ({channels,getChannels})=>{
    //channels de route, es la ruta, lo que ira en la URL
    return (
        <div className="content-container">
            <Routes>
                <Route path='settings' element={<Settings/>}/>
                <Route path="channels" element={<Channels channels={channels}/>}/>
                <Route path='channel/:id' element={<ChannelView getChannels={getChannels}/>}/>
            </Routes>
        </div>
    )
}