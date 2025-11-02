import React from 'react'
import { GithubProfile } from '../routes/Github'
import { HomeProfile, PressProfile } from '../routes/Press'
import { BlogProfile } from '../routes/Blog'
import { BiographyProfile } from '../routes/Biography'
import { LinkedInProfile } from '../routes/LinkedIn'
import { StyledLinks } from './styled-components/toolbar'

export const Toolbar = () => {
    return <StyledLinks>
        <HomeProfile />
        <GithubProfile />
        {/* TBD <PressProfile /> */}
        <BiographyProfile />
        <LinkedInProfile />
        <BlogProfile />
    </StyledLinks>
}