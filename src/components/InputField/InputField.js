import React from 'react';
import classes from './InputField.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

const InputField = props => {
    return (
        <form className={classes.InputFieldBlock}>
            <input type="textarea"></input>
            <button className={classes.SendButton}><FontAwesomeIcon icon={faShare}/></button>
        </form>
    )
}

export default InputField;