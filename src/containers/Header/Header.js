import React from 'react';
import classes from './Header.module.css';
import Logo from '../../assets/images/logo.png';
import { connect } from 'react-redux';
import * as authActions from '../../store/actions/authActions';

const header = props => {

    let buttons = (
        <ul className={classes.AppButtons}>
            <li
                className={classes.AppButton}
                onClick={props.onCreateNewChat}
            >
                <div>Create New Chat</div>
            </li>
            <li
                className={classes.AppButton}
                onClick={props.onLogOut}
            >
                <div>Logout</div>
            </li>
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

/*const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.token !== null
    }
}*/

const mapDispatchToProps = dispatch => {
    return {
        onLogOut: () => dispatch(authActions.logout())
    }
}

export default connect(null, mapDispatchToProps)(header);