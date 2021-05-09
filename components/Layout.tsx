import React, { ReactElement } from 'react'
import styled, { ThemeProvider } from 'styled-components';
import { themes } from '@styles/variables';
import { GlobalStyle } from '@styles/global';
import Drawer from '@material-ui/core/Drawer';
import TopHeader from './TopHeader';
import Footer from './Footer';
const LayoutStyled = styled.div`
background-color:${props => props.theme.panel.color};
padding-bottom:30px;
`

interface Props {
    children:ReactElement;
}

function Layout({children}: Props): ReactElement {
    return (
    <ThemeProvider theme={themes}>
        <GlobalStyle />
        <TopHeader />
        <Drawer></Drawer>
        <LayoutStyled >
            {children}
        </LayoutStyled>
        <Footer />
    </ThemeProvider>
    )
}

export default Layout
