import React, { ReactElement } from 'react'
import Link from 'next/link';
import IconButton from "@material-ui/core/IconButton";
import Home from "@material-ui/icons/Home";
import { themes } from '@styles/variables';
interface Props {

}
const linksList = [
    { href: "/moments", label: "Public" },
    { href: "/signin", label: "Signin" },
    { href: "/signout", label: "Signout" },
]
function Navigation({ }: Props): ReactElement {
    return (
        <nav>
            <ul>
                <li><Link href={"/"}>
                        <IconButton aria-label="add to favorites">
                            <Home />
                        </IconButton>
                    </Link></li>
                {linksList.map(link => <li><Link href={link.href}>{link.label}</Link></li>)}
            </ul>
        </nav>
    )
}

export default Navigation
