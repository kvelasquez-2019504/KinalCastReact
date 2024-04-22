import { useEffect } from "react";
import { Navbar } from "../../components/navbars/Navbar"
import {LoadingSpinner} from '../../components/LoginSpinner';
import { Content } from '../../components/dashboard/Content';
import { SideBar } from "../../components/navbars/Sidebar";
import { useUserDetails ,useChannels } from "../../shared/hooks";
import './dashboardPage.css';
//import de reat, dependencias de 3ros, componentes mios, helpers o hooks personalizados y hojas de estilos
export const DashboardPage =()=> {
  const {getChannels, allChannels, isFetching,followedChannels}=useChannels();
  const {isLogged} = useUserDetails();

  //Evalua el componente padre, para ver como se comportara el hijo
  useEffect(()=>{
    getChannels(isLogged);
  },[]);

  if(isFetching){
    return <LoadingSpinner/>
  }
  
  return (
    <div>
      <Navbar/>
      <SideBar channels={followedChannels}/>
      <Content channels={allChannels} getChannels={getChannels}/>
    </div>
  )
}