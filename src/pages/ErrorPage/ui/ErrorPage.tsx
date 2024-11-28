import React from "react";
import styles from "./ErrorPage.module.scss"
import LinkPage from "../../../shared/LinkPage/LinkPage";
const ErrorPage = () =>
{
    return(
        <div className={styles.ErrorPageContainer}>
            <h1>Ошибка в пути на сайт</h1>
            <LinkPage children="Вернуться на главную" path="/"></LinkPage>
        </div>
    )
}

export default ErrorPage