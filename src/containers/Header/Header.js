import React from 'react';
import classes from './Header.module.css';
import Logo from '../../assets/images/logo.png';
import { connect } from 'react-redux';

const header = props => {

    let buttons = (
        <ul className={classes.AppButtons}>
            <li className={classes.AppButton}><div>Create New Chat</div></li>
            <li className={classes.AppButton}><div>Logout</div></li>
        </ul>
    )
    let appButtons = props.isAuthenticated ? buttons : null;

    return (
        <header>
            <div className={classes.AppLogo}>
                <img src={Logo} alt="Logo"></img>
                REACTIVE CHAT
            </div>

            {appButtons}
        </header>
    )
};

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}

export default connect(mapStateToProps, null)(header);