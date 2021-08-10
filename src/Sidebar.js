import React from "react"
import "./Sidebar.css"
import SidebarRow from "./SidebarRow"
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useStateValue } from './StateProvider'

const Sidebar =()=>
{
    const [{user},dispatch]=useStateValue()
    return(
   <div className="sidebar">
       <SidebarRow src={user.photoURL} title={user.displayName}/>
    <SidebarRow Icon= {LocalHospitalIcon} title="Covid 19 Information center"/>
   <SidebarRow Icon={EmojiFlagsIcon} title="pages"/>
    <SidebarRow Icon={PeopleIcon} title="friend"/>
    <SidebarRow Icon={ChatIcon} title ="messenger"/>
    <SidebarRow Icon ={StorefrontIcon} title="Marketplace"/>
      <SidebarRow Icon ={VideoLibraryIcon} title="videos"/>
      <SidebarRow Icon={ ExpandMoreIcon} title="marketpalce"/>
   </div>

    )

}
export default Sidebar