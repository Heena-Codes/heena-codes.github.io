import React from 'react'
import { StyledH1Header, StyledHeader, StyledSpacingDiv } from '../components/styled-components/toolbar'
import { Toolbar } from '../components/Toolbar'
import { CopyrightFooter } from '../components/CopyrightFooter'

export const Blog = () => {
    return <>
    <StyledHeader>
      <Toolbar />
    </StyledHeader>
    <StyledSpacingDiv>
        <StyledH1Header>
            About My Blogs
        </StyledH1Header>
    </StyledSpacingDiv>  
    <StyledSpacingDiv>
        <CopyrightFooter />
    </StyledSpacingDiv>

    </>
}