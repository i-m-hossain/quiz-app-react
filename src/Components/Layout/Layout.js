import React from "react";
import Nav from "../Shared/Nav/Nav";

import classes from "./Layout.module.css";

const Layout = ({ children }) => {
    return (
        <>
            <Nav />
            <main className={classes.main}>
                <div className={classes.container}>{children}</div>
            </main>
        </>
    );
};

export default Layout;
