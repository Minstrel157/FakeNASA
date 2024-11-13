import React, { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface LinkProps{
    children: ReactNode
    path: string
}

const LinkPage:FC<LinkProps> = ({children, path}) =>
{
    return(
        <Link to={path} className="">{children}</Link>
    )
}

export default LinkPage