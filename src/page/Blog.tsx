import React from 'react'
import { StyledH1Header, StyledH2Header, StyledHeader, StyledSpacingDiv } from '../components/styled-components/toolbar'
import { Toolbar } from '../components/Toolbar'
import { CopyrightFooter } from '../components/CopyrightFooter'
import MediumBlog from '../components/MediumBlog'
import ExternalPublications from '../components/ExternalPublications'

export const Blog = () => {
    return <>
    <StyledHeader>
      <Toolbar/>
    </StyledHeader>
    <StyledSpacingDiv>
        <StyledH1Header>
            About My Blogs
        </StyledH1Header>
        <StyledSpacingDiv>
        <StyledH2Header>
            Featured Publications
        </StyledH2Header>
        <div>
            <ExternalPublications />
        </div>
    </StyledSpacingDiv>
        <StyledSpacingDiv>
        <StyledH2Header>
            Medium Blogs
        </StyledH2Header>
        <div>
        <MediumBlog />

        </div>
        </StyledSpacingDiv>
    </StyledSpacingDiv>  

    <StyledSpacingDiv>
        <CopyrightFooter />
    </StyledSpacingDiv>

    </>
}