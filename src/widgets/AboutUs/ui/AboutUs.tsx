import React, { FC } from "react";
import styles from "./AboutUs.module.scss"
const AboutUs:FC = () =>
{
    return(
        <div className={styles.AboutUsContainer}>
            <div className={styles.AboutUsContainer_Information}>
                <div className={styles.AboutUsContainer_Information_Header}>
                    <h1>Добро пожаловать!</h1>
                </div>
                <div className={styles.AboutUsContainer_Information_Description}>
                    Мы открытый web-сайт, предоставляющий информацию о космосе благодаря открытой API корпорации NASA
                </div>
            </div>
        </div>
    )
}

export default AboutUs