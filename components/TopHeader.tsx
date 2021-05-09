import styled from 'styled-components'
import React, { ReactElement } from 'react'
import Navigation from './Navigation';
import Title from './Title';
interface Props {
    
}

function TopHeader({}: Props): ReactElement {
    return (
        <header>
            <Title />
            <Navigation />
        </header>
    )
}

export default TopHeader
