import React from 'react'
import { StyledH1Header, StyledHeader, StyledSpacingDiv } from '../components/styled-components/toolbar'
import { Toolbar } from '../components/Toolbar'
import { CopyrightFooter } from '../components/CopyrightFooter'
import MediumBlog from '../components/MediumBlog'

export const Blog = () => {
    return <>
    <StyledHeader>
      <Toolbar/>
    </StyledHeader>
    <StyledSpacingDiv>
        <StyledH1Header>
            About My Blogs
        </StyledH1Header>
        <div>
            <MediumBlog />
        </div>
    </StyledSpacingDiv>  
    <StyledSpacingDiv>
        <CopyrightFooter />
    </StyledSpacingDiv>

    </>
}