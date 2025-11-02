import React from 'react'
import { GithubProfile } from '../routes/Github'
import { PressProfile } from '../routes/Press'
import { BlogProfile } from '../routes/Blog'
import { BiographyProfile } from '../routes/Biography'
import { LinkedInProfile } from '../routes/LinkedIn'

export const Toolbar = () => {
    return <div>
        <GithubProfile />
        <PressProfile />
        <BiographyProfile />
        <LinkedInProfile />
        <BlogProfile />
    </div>
}