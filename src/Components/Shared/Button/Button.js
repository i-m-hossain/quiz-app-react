import React from "react";
import classes from "./Button.module.css";
const Button = ({ children, className, ...rest }) => {
    return (
        <button className={`${className} ${classes.button}`} {...rest}>
            {children}
        </button>
    );
};

export default Button;
