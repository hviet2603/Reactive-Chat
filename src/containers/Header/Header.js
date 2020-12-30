import React from 'react';
import classes from './Header.module.css';
import Logo from '../../assets/images/logo.png';
import { connect } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faWindowClose, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
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
    );

    let cancelBtnStyle = [classes.CancelChatBtn];
    if (!props.showCancelButton) cancelBtnStyle.push(classes.HiddenOnMobile); 
    
    let mobileButtonList = (
        <ul className={classes.MobileButtons}>

            <li 
                className={cancelBtnStyle.join(" ")}
                onClick={props.switchModeMobile}
            >
                <FontAwesomeIcon icon={faWindowClose} />
            </li>

            <li
                onClick={props.onLogOut}
            >
                <FontAwesomeIcon icon={faSignOutAlt} />
            </li>

            <li
                onClick={props.onCreateNewChat}
            >
                <FontAwesomeIcon icon={faPlus} />
            </li>

        </ul>
    );

    let appButtons = props.isAuthenticated ? buttons : null;
    let mobileButtons = props.isAuthenticated ? mobileButtonList : null;

    return (
        <header>
            <div className={classes.AppLogo}>
                <img src={Logo} alt="Logo"></img>
                <span className={classes.Banner}>REACTIVE CHAT</span>
            </div>

            {mobileButtons}
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