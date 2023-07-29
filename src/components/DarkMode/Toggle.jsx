import React from "react";
import style from "./toggle.module.css";

const Toggle = () => {
    return (
        <div className={style.container}>
            <div className={style.icon}>🌙 </div>
            <div className={style.icon}>🌞 </div>
            <div className={style.ball} />
        </div>
    );
};
export default Toggle;
