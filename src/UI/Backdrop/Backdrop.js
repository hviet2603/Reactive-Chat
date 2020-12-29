import React from 'react';
import classes from './Backdrop.module.css';


const Backdrop = props => {

    let backdropStyles = props.show ? classes.Backdrop : classes.HiddenBackdrop;

    return (
        <div 
            className={backdropStyles}
            onClick={props.clicked}
        >

        </div>
    )
}

export default Backdrop;