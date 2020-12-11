import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Divider from '@material-ui/core/Divider';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';


export default function Footer() {
    return (
        <div class="footer">
            <div class="box">
                <div className="topText">Company</div><br />
                    About<br/>
                    Support<br/>
                    Forum
            </div>
            <div class="box">
                <div class="topText">Subscribe</div><br/>
               GitHub: iskrenpetrov
            </div>
            <div class="box">
                <div className="topText">Contacts</div>
                <br/>
                <textarea class="pillInput" placeholder="Enter your message"></textarea><br/>
                <button className="pillButton">Subscribe</button>
            </div>
        </div>
        );
}