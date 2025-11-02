import React from 'react'
import { Toolbar } from '../components/Toolbar'
import { MainHomePageContent } from '../components/MainHomePageContent'
import { DefaultTheme } from 'styled-components'
import { StyledHeader } from '../components/styled-components/toolbar'

// const mainStyle = (theme: DefaultTheme) => ({
//     backgroundColor: (theme) = theme.black
// })
export const Home = () => {
    return <>
    <StyledHeader style={{backgroundColor: "black"}}>
      <Toolbar />
     <MainHomePageContent />
    </StyledHeader>

    </>
}