import React, { ReactElement } from 'react'
import Link from 'next/link';
import IconButton from "@material-ui/core/IconButton";
import Home from "@material-ui/icons/Home";
import styled from "styled-components";
interface Props {

}

 const IconButtonStyled = styled(IconButton)`
 & svg{
     color:#fff;
 }
 `

const linksList = [
    { href: "/moments", label: "Public", class:"navigation-item group-1" },
    { href: "/signin", label: "Signin", class:"navigation-item group-2" },
    { href: "/signout", label: "Signout", class:"navigation-item group-2" },
]
function Navigation({ }: Props): ReactElement {
    return (
        <nav>
            <ul>
                <li className={"navigation-item group-1"}><Link href={"/"}>
                        <IconButtonStyled aria-label="add to favorites">
                            <Home />
                        </IconButtonStyled>
                    </Link></li>
                {linksList.map((link,key) => <li key={key} className={link.class}><Link href={link.href}>{link.label}</Link></li>)}
            </ul>
        </nav>
    )
}

export default Navigation
