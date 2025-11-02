import React from 'react'
import { Toolbar } from '../components/Toolbar'
import { MainHomePageContent } from '../components/MainHomePageContent'
import { StyledH1Header, StyledHeader, StyledSpacingDiv } from '../components/styled-components/toolbar'
import { CopyrightFooter } from '../components/CopyrightFooter'
import { AboutMe } from '../components/AboutMe'

export const Biography = () => {
    return  <>
    <StyledHeader>
      <Toolbar />
    </StyledHeader>
    <StyledSpacingDiv>
        <StyledH1Header>
            About Heena Gupta
        </StyledH1Header>
        <AboutMe />
    </StyledSpacingDiv>  
    <StyledSpacingDiv>
        <CopyrightFooter />
    </StyledSpacingDiv>

    </>
}