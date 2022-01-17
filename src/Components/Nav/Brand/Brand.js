import React from "react";
import classes from "./Brand.module.css";
import imgBrand from "./../../../images/logo-bg.png";
const Brand = () => {
    return (
        <ul>
            <li>
                <a href="index.html" className={classes.brand}>
                    <img src={imgBrand} alt="Learn with Sumit Logo" />
                    <h3>Learn with Sumit</h3>
                </a>
            </li>
        </ul>
    );
};

export default Brand;
