import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../../Contexts/AuthContext";
import classes from "./Account.module.css";

const Account = () => {
    const { currentUser, logout } = useAuth();
    return (
        <div className={classes.account}>
            {currentUser && (
                <>
                    <span className="material-icons-outlined" title="Account">
                        account_circle
                    </span>
                    <span>{currentUser.displayName}</span>
                    <span
                        className="material-icons-outlined"
                        title="Logout"
                        onClick={logout}
                    >
                        logout
                    </span>
                </>
            )}
            {!currentUser && (
                <>
                    <Link to="/register">Signup</Link>
                    <Link to="/login">Login</Link>
                </>
            )}
        </div>
    );
};

export default Account;
