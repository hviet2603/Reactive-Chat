import React from 'react';
import classes from './Header.module.css';
import Logo from '../../assets/images/logo.png';

const header = props => { 

    return (
        <header>
            <div className={classes.AppLogo}>
                <img src={Logo} alt="Logo"></img>
                REACTIVE CHAT
            </div>

            <ul className={classes.AppButtons}>
                <li className={classes.AppButton}><div>Create New Chat</div></li>
                <li className={classes.AppButton}><div>Logout</div></li>
            </ul>
        </header>
    )
};

export default header;