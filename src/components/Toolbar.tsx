import React from 'react'
import { GithubProfile } from '../routes/Github'
import { HomeProfile, PressProfile } from '../routes/Press'
import { BlogProfile } from '../routes/Blog'
import { BiographyProfile } from '../routes/Biography'
import { LinkedInProfile } from '../routes/LinkedIn'
import { StyledLinks } from './styled-components/toolbar'

interface ToolbarProps {
    selectedPage?: 'home' | 'blog' | 'contributions' 
}
export const Toolbar = ({ selectedPage }: ToolbarProps) => {
    return <StyledLinks>
        <HomeProfile />
        <BlogProfile />
        <BiographyProfile />

    </StyledLinks>
}