import React from 'react'
import { Toolbar } from '../components/Toolbar'
import { MainHomePageContent } from '../components/MainHomePageContent'
import { StyledHeader } from '../components/styled-components/toolbar'
import { CopyrightFooter } from '../components/CopyrightFooter'

export const Home = () => {
    return <>
    <StyledHeader style={{backgroundColor: "black"}}>
      <Toolbar />
     <MainHomePageContent />
    </StyledHeader>
    <CopyrightFooter />

    </>
}