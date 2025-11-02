import React from 'react'
import { Link } from 'react-router-dom';
import { StyledH1Header, StyledH2Header, StyledHeader, StyledImageSpan, StyledWrapper } from './styled-components/toolbar';
import { Image } from './core/Image';
import { StyledImageLink } from './styled-components/route';

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
    const aboutMeDetails: MainPageContent[] = [{
        text: 'Heena Gupta is a '
    }, {
        text: 'Software Engineer ',
        link: 'https://www.linkedin.com/in/heena-gupta-a183ba99/'
    }, {
       text: 'and leader currently working at ' 
    }, {
        text: 'Expedia Group ',
        link: 'https://www.expedia.com/'
    }, {
        text: 'on Price tracking and predictions within multi product shopping experience. '
    }, {
        text: 'With +10 years of experience and +5 years at Expedia Group, she is passionate about Web, Performance and Quality.'
    }, {
        text: 'She is reachable on '
    }, {
        text: 'LinkedIn, ',
        link: 'https://www.linkedin.com/in/heena-gupta-a183ba99/'
    }, {
        text: 'Medium. ',
        link: 'https://medium.com/@heena_gupta_93'
    }, {
        text: 'She is also a Google Summer of Code student in the past and Google Code-In co-administrator and mentor for KDE organanisation.'
    }
]
    return <div>
        {
            aboutMe.map(aboutMeItem => aboutMeItem.type === 'H1' ? <StyledH1Header>{aboutMeItem.text} </StyledH1Header> : <StyledH2Header>{aboutMeItem.text}</StyledH2Header>)
        }
        <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ width: '60%' }}>
            {
            aboutMeDetails.map(aboutMeItem => aboutMeItem.link ? <StyledImageLink to={aboutMeItem.link}>{aboutMeItem.text}</StyledImageLink> : <StyledImageSpan>{aboutMeItem.text} </StyledImageSpan>)
            }
        </div>
        <StyledWrapper>
        <Image 
  src="https://media.licdn.com/dms/image/v2/D5603AQFOoWk_mi9DrA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1719421504087?e=1763596800&v=beta&t=zWpHjbYmtG3vI3z92S1KGNy2NRQlWIOuh-amMTmSUhA" 
  alt="Heena Gupta" 
/>
        </StyledWrapper>
        </div>


    </div>
}