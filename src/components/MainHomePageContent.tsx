import React from 'react'
import { StyledH1Header, StyledH2Header, StyledImageSpan, StyledWrapper } from './styled-components/toolbar';
import { Image } from './core/Image';
import { StyledImageLink } from './styled-components/route';
import { Contributions } from './Contributions';

interface MainPageContent {
    text: string;
    link?: string | null;
    type?: 'H1' |'H2'
}
export const MainHomePageContent = () => {
    const aboutMe: MainPageContent[]  = [{
        text: 'Heena Gupta',
        type: 'H1'
    }, {
        text: 'Engineering Leader',
        type: 'H2'
    }]

    return <div>
        {
            aboutMe.map(aboutMeItem => aboutMeItem.type === 'H1' ? <StyledH1Header>{aboutMeItem.text} </StyledH1Header> : <StyledH2Header>{aboutMeItem.text}</StyledH2Header>)
        }
        <div style={{ display: 'flex', width: '100%', gap: '20px' }}>
        <div style={{ flex: '1' }}>
        <Contributions />
        </div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
        <Image 
        src="./heena.png"
  alt="Heena Gupta" 
/>
        </div>
        </div>


    </div>
}