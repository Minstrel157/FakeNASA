import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";
import styles from "./LinkPage.module.scss"
interface LinkProps{
    children: ReactNode
    path: string
}

const LinkPage:FC<LinkProps> = ({children, path}) =>
{
    return(
        <Link to={path} className={styles.LinkPageContainer}>{children}</Link>
    )
}

export default LinkPage