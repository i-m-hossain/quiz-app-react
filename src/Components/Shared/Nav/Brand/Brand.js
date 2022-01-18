import React from "react";
import classes from "./Brand.module.css";
import imgBrand from "./../../../../images/logo-bg.png";
import { Link } from "react-router-dom";
const Brand = () => {
    return (
        <ul>
            <li>
                <Link to="/" className={classes.brand}>
                    <img src={imgBrand} alt="Learn with Sumit Logo" />
                    <h3>Learn with Sumit</h3>
                </Link>
            </li>
        </ul>
    );
};

export default Brand;
