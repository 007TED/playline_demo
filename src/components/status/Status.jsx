import React from 'react';
import './status.css';
import {Avatar, Button, Chip} from '@material-ui/core';
import {SportsBasketballTwoTone , Notifications, AttachMoney } from "@material-ui/icons";
import AvatarGroup  from  '@material-ui/lab/AvatarGroup';
import GooglePlayLogo from '../../assets/icons/google-play@3x.png';
import AppStoreLogo from '../../assets/icons/ios-app@3x.png';

import Gordon from '../../assets/headshots/Aaron Gordon -PLP59D7092156491v2.png';
import Davis from  '../../assets/headshots/Anthony-Davis-PLP59D70938C0B3Ev2.png';
import Russell from '../../assets/headshots/Dangelo Russell PLP59D709255D994v4.png';
import Leonard from '../../assets/headshots/Kawhi-Leonard-PLP59D7093A107E7v2.png';
import Lowry from '../../assets/headshots/Kyle-Lowry-PLP59D70927DF104.png';
import James from '../../assets/headshots/Lebron-James-PLP59D7092A6F6CEv2.png';
import Siakam from '../../assets/headshots/Pascal-Siakam-PLP59D70927CC6DD.png';


const Status = ({current_status,message,protip,selectedPlayer}) => {
    return(
        <div className="playline_status-container">
            <div className="playline_status-container-currentstatus">
                <p>{current_status}</p>
            </div>
            <div className="playline__status-container-message">
                <p>{message}</p>
            </div>
            <hr />
            <div className="playline_status-container-protip">
                <p><small>{protip}</small></p>
            </div>

            <AvatarGroup max={7} spacing={2} className="Avtar-container">
                <Avatar alt="Lebron James" src={James}/>
                <Avatar alt="Anthony Davis" src={Davis}/>
                <Avatar alt="Aaron Gordon" src={Gordon} />
                <Avatar alt="Pascal Siakam" src={Siakam}/>
                <Avatar alt="Kawhi Leonard" src={Leonard}/>
                <Avatar alt="kyle Lowry" src={Lowry}/>
                <Avatar alt="Dangelo Russell" src={Russell}/>
            </AvatarGroup>
            <table className="status_selected_players-table">
                <tbody>
                <tr>
            {selectedPlayer.map(({last_name, points}, i) =>(
                <td key={i} className="status_selected_players-points" >
                    {last_name} <br/><Chip label= {points} size="small" variant="outlined" />
                    <br /><SportsBasketballTwoTone />
                </td>
            ))}
                </tr>
                </tbody>
            </table>
            <br/>
            <br/>
            <div className="status_cta">
                <Button variant="outlined" startIcon={<Notifications color="secondary"/>} className="status_cta-notify"> NOTIFY ME</Button>
                &nbsp;
                <Button variant="outlined" startIcon={<AttachMoney color="secondary"/>} className="status_cta-deposit"> DEPOSIT</Button>
            </div>
            <br/>
            <hr/>
            <br/>
            <div className="app_link-container">
                <p>
                    <b>DOWNLOAD THE APP</b>
                </p>
            </div>
            <br />
            <div className="app_link-container_links">
                <a href="#"><img src={GooglePlayLogo} alt="play store"  /> </a>
                <a href="https://apps.apple.com/ca/app/playline/id1265657853"><img src={AppStoreLogo} alt="app store" /> </a>
            </div>

        </div>
    )
}

export default Status;