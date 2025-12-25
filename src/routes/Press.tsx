import React from 'react'
import { StyledNavLink } from '../components/styled-components/route'

export const PressProfile = () => {
    return <StyledNavLink to="/press">Press</StyledNavLink>
}

export const HomeProfile = () => {
    return <StyledNavLink to='/' end>Home</StyledNavLink>
}