import React from 'react'
import styled from 'styled-components'
import { Toolbar } from '../components/Toolbar'
import { MainHomePageContent } from '../components/MainHomePageContent'
import { StyledHeader } from '../components/styled-components/toolbar'
import { CopyrightFooter } from '../components/CopyrightFooter'

const HomeContainer = styled.div`
  min-height: 100vh;
  backgroundColor: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  box-sizing: border-box;
  
  @media (max-width: 768px) {
    align-items: stretch;
    padding: 0;
  }
`;

export const Home = () => {
    return <HomeContainer>
    <StyledHeader>
      <Toolbar />
     <MainHomePageContent />
    </StyledHeader>
    <CopyrightFooter />
    </HomeContainer>
}