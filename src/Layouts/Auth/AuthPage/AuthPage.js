import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as authActions from '../../../store/actions/authActions';
import classes from './AuthPage.module.css';

const AuthPage = props => {

    let [authType, setAuthType] = useState('LOGIN');
    let [isSignup, setIsSignup] = useState(false);
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let { isAuthenticated } = props;

    let authErrorMessage = props.error !== null ? <div className={[classes.errorMessage, classes.FormRow].join(' ')}>{props.error.message.split(' ')[0]}</div> : null;
    
    useEffect(() => {
        // Switch to Main App when authenticated
        if (isAuthenticated) {
            props.history.push("/");
            console.log("Is Authenticated");
        }
    }, [isAuthenticated, props.history]);

    let switchAuthType = (event) => {
        event.preventDefault();
        setEmail('');
        setPassword('');
        switch (authType) {
            case 'LOGIN':
                setAuthType('SIGNUP');
                setIsSignup(true);
                break;
            default:
                setAuthType('LOGIN');
                setIsSignup(false);
                break;
        }
    };

    let submitHandler = (event) => {
        event.preventDefault();
        props.onAuth(email, password, isSignup);
    }

    let inputChangedHandler = (event, identifier) => {
        switch (identifier) {
            case 'email':
                setEmail(event.target.value);
                //email = event.target.value;
                break;

            default:
                setPassword(event.target.value);
                //password = event.target.value;
                break;
        }
    }

    console.log("Render");

    return (
        <form
            className={classes.AuthForm}
            onSubmit={submitHandler}
        >
            <div className={classes.FormRow}>
                <label for="email">Email</label>
                <input type="email" className="email" value={email} onChange={(event) => inputChangedHandler(event, 'email')}></input>
            </div>

            <div className={classes.FormRow}>
                <label for="password">Password</label>
                <input type="password" className="password" value={password} onChange={(event) => inputChangedHandler(event, 'password')}></input>
            </div>

            {authErrorMessage}
            
            <div className={classes.FormRow}>
                <div>
                    <button
                        className={classes.AuthFormButton}
                    >
                        {authType}
                    </button>

                    <button
                        className={classes.AuthFormButton}
                        onClick={switchAuthType}
                    >
                        SWITCH TO {authType === 'LOGIN' ? 'SIGNUP' : 'LOGIN'}
                    </button>
                </div>
            </div>            
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loading: state.auth.loading,
        error: state.auth.error,
        isAuthenticated: state.auth.token !== null
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password, isSignup) => dispatch(authActions.auth(email, password, isSignup))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);