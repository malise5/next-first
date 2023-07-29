import React from "react";
import style from "./page.module.css";

const layout = ({ children }) => {
    return (
        <div>
            <h1 className={style.mainTitle}>My Work</h1>
            {children}
        </div>
    );
};

export default layout;
