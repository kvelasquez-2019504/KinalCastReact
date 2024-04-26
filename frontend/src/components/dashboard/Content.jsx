//sirve para pintar dentro de si, todos los componentes del dashboard
import { Route, Routes } from "react-router-dom";
import {Channels} from '../channel/Channels'
import { Settings } from "../settings/Settings";

export const Content = ({channels})=>{
    //channels de route, es la ruta, lo que ira en la URL
    return (
        <div className="content-container">
            <Routes>
                <Route path='settings' element={<Settings/>}/>
                <Route path="channels" element={<Channels channels={channels}/>}/>
            </Routes>
        </div>
    )
}