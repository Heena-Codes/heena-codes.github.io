import React from 'react'
import { Toolbar } from '../components/Toolbar'
import { MainHomePageContent } from '../components/MainHomePageContent'
import { StyledHeader } from '../components/styled-components/toolbar'
import { CopyrightFooter } from '../components/CopyrightFooter'

export const Home = () => {
    return <div style={{ minHeight: '100vh', backgroundColor: "#c2a574",  display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid green',
      flexDirection: 'column'
      }}>
    <StyledHeader>
      <Toolbar />
     <MainHomePageContent />
    </StyledHeader>
    <CopyrightFooter />

    </div>
}