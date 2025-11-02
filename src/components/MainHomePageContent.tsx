import React from 'react'
import { Link } from 'react-router-dom';

interface MainPageContent {
    text: string;
    link?: string | null;
}
export const MainHomePageContent = () => {
    const aboutMe: MainPageContent[]  = [{
        text: 'Heena Gupta'
    }, {
        text: 'Engineering Leader'
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
            aboutMe.map(aboutMeItem => <div>{aboutMeItem.text} </div>)
        }
        <div>
            {
            aboutMeDetails.map(aboutMeItem => aboutMeItem.link ? <Link to={aboutMeItem.link}>{aboutMeItem.text}</Link> : <span>{aboutMeItem.text} </span>)

            }
        </div>
    </div>
}