import React from "react";
import NavBar from "../../widgets/NavBar/ui/NavBar";
import LinkPage from "../../shared/LinkPage/LinkPage";
import AboutUs from "../../widgets/AboutUs/ui/AboutUs";
import styles from "./MainPage.module.scss"
const MainPage = () =>
{
    return(
        <div className={styles.Container}>
            <NavBar content=
            {[
                <LinkPage children="Фото дня" path="/dayPhoto" />, 
                <LinkPage children="Погода на марсе" path="/MarsWeather" />
            ]}/>
            <AboutUs />
        </div>
    )
}

export default MainPage