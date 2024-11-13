import React from "react";
import NavBar from "../../widgets/NavBar/ui/NavBar";
import LinkPage from "../../shared/LinkPage/LinkPage";
const MainPage = () =>
{
    return(
        <NavBar content={[
        <LinkPage children="Страница 1" path="" />, 
        <LinkPage children="Страница 2" path="" />
    ]}/>
    )
}

export default MainPage