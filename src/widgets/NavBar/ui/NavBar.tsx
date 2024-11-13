import React, { FC, ReactNode } from "react";
import styles from "./NavBar.module.scss"
import { ImRocket } from "react-icons/im";
interface NavBarProps{
    content: ReactNode[]
}
const NavBar: FC<NavBarProps> = ({content}) =>
{
    return(
        <div className={styles.NavBarContainer}>
            <ImRocket />
            {content}
        </div>
    )
}

export default NavBar