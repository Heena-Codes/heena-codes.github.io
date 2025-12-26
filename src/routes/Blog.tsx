import React from 'react'
import { StyledNavLink, NewBadge } from '../components/styled-components/route'

export const BlogProfile = () => {
    return (
        <StyledNavLink to="/blog">
            Blog
            <NewBadge>NEW</NewBadge>
        </StyledNavLink>
    )
}