import React from "react";
import Account from "./Account/Account";
import Brand from "./Brand/Brand";
import classes from "./Nav.module.css";

const Nav = () => {
    return (
        <nav className={classes.nav}>
            <Brand />
            <Account />
        </nav>
    );
};

export default Nav;
