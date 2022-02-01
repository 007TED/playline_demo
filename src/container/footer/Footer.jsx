import React from 'react';
import './footer.css';
import {MoreVert} from '@material-ui/icons';

const Footer = () => {
    return(
        <div className="footer">
            <div className="footer_xl">
            <a href="#" > <p> ABOUT</p></a> <MoreVert />
            <a href="#" > <p> BONUS</p></a> <MoreVert />
            <a href="#" > <p> CONTACT</p> </a> <MoreVert />
            <a href="#" > <p> SECURITY</p></a> <MoreVert />
            <a href="#" > <p> RESPONSIBLE&nbsp;PLAY</p></a> <MoreVert />
            <a href="#" > <p> PRIVACY</p></a> <MoreVert />
            <a href="#" > <p> TERMS </p></a>
            </div>
            <div className="footer_mob">
                <a href="#" ><p>KNOW MORE</p></a>
            </div>
        </div>
    )
}

export default Footer;
