import React from 'react'
import { StyledH1Header, StyledH2Header, StyledImageSpan, StyledWrapper } from './styled-components/toolbar';
import { Image } from './core/Image';
import { StyledImageLink } from './styled-components/route';
import { Contributions } from './Contributions';
import styled from 'styled-components';

const ResponsiveContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  gap: 20px;
  margin-bottom: 20px;
  flex-direction: row;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const ImageWrapper = styled.div`
  width: 300px;
  height: 300px;
  borderRadius: 50%;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
  
  @media (max-width: 480px) {
    width: 150px;
    height: 150px;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
  
  @media (max-width: 768px) {
    text-align: center;
    width: 100%;
  }
`;

const SocialIconsContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 16px;
  align-items: center;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    justify-content: center;
  }
  
  @media (max-width: 480px) {
    gap: 12px;
  }
`;

const SocialIconLink = styled.a<{ $brandColor?: string }>`
  color: ${props => props.$brandColor || '#666'};
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    opacity: 0.8;
    transform: translateY(-2px);
  }
  
  svg {
    width: 24px;
    height: 24px;
  }
  
  @media (max-width: 480px) {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const OpportunityMessage = styled.div`
  position: relative;
  margin-top: 20px;
  margin-left: -20px;
  padding: 16px 20px;
  background: #ffffff;
  border: 1px solid #d0d0d0;
  border-radius: 8px;
  font-size: 0.95rem;
  line-height: 1.6;
  color: #1a1a1a;
  font-family: 'Georgia', 'Times New Roman', serif;
  
  &::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 30px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12px 20px 12px 0;
    border-color: transparent #d0d0d0 transparent transparent;
  }
  
  &::after {
    content: '';
    position: absolute;
    left: -19px;
    top: 30px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 12px 19px 12px 0;
    border-color: transparent #ffffff transparent transparent;
  }
  
  @media (max-width: 768px) {
    margin-top: 24px;
    margin-left: 0;
    padding: 14px 18px;
    font-size: 0.9rem;
    text-align: center;
    
    &::before,
    &::after {
      left: 50%;
      top: -20px;
      transform: translateX(-50%) rotate(-90deg);
    }
    
    &::before {
      top: -21px;
      border-color: transparent #d0d0d0 transparent transparent;
    }
    
    &::after {
      top: -20px;
      border-color: transparent #ffffff transparent transparent;
    }
  }
  
  @media (max-width: 480px) {
    margin-top: 20px;
    padding: 12px 16px;
    font-size: 0.85rem;
  }
`;

const HighlightText = styled.span`
  color: #1a1a1a;
  font-weight: 500;
  font-family: 'Georgia', 'Times New Roman', serif;
`;

const IntroText = styled.p`
  font-size: 0.85rem;
  color: #1a1a1a;
  line-height: 1.5;
  font-family: 'Georgia', 'Times New Roman', serif;
  margin-top: 16px;
  text-align: justify;
  opacity: 0.85;
  font-style: italic;
  
  @media (max-width: 768px) {
    text-align: left;
    font-size: 0.8rem;
    margin-top: 14px;
    line-height: 1.45;
  }
  
  @media (max-width: 480px) {
    font-size: 0.75rem;
    line-height: 1.4;
  }
`;

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
        text: 'Engineering Manager, Expedia Group',
        type: 'H2'
    }]

    const intro = "Heena Gupta is an Engineering Manager at Expedia, leading Flights price tracking and predictions across web, iOS, and Android, alongside operational excellence for quality across multiple organisations. She is also a service owner for flight progressive web applications. Heena completed her Bachelor of Technology in Computer Engineering from Delhi Technological University (2011–2015). She enjoys coding, learning new technologies, and mentoring junior engineers.";

    return <div>
        <ResponsiveContainer>
            <ImageContainer>
                <ImageWrapper>
                    <Image 
                        src="./heena.JPG"
                        alt="Heena Gupta"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            borderRadius: '50%'
                        }}
                    />
                </ImageWrapper>
            </ImageContainer>
            <ContentContainer>
        {
            aboutMe.map(aboutMeItem => aboutMeItem.type === 'H1' ? <StyledH1Header>{aboutMeItem.text} </StyledH1Header> : <StyledH2Header>{aboutMeItem.text}</StyledH2Header>)
        }
                {/* <OpportunityMessage>
                    💡 <HighlightText>Open to opportunities!</HighlightText> I'm always excited to explore new challenges, collaborate on innovative projects, and connect with fellow technologists. Feel free to reach out!
                </OpportunityMessage> */}
                <SocialIconsContainer>
                    <SocialIconLink href="https://medium.com/@heena_gupta_93" target="_blank" rel="noopener noreferrer" aria-label="Medium" $brandColor="#000000">
                    <svg width="1024" height="1024" viewBox="0 0 1024 1024" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="1024" height="1024" rx="179.649" fill="black"/>
<path d="M1024 704.736V797.736C1018.16 798.3 1012.16 798.588 1006 798.588C896.061 798.588 834.166 707.016 831.497 592.432C831.418 588.002 831.448 583.6 831.546 579.228C831.606 576.501 831.714 573.783 831.852 571.075C831.921 569.628 831.989 568.269 832.098 566.753C832.206 565.236 832.315 563.72 832.443 562.204C836.401 511.613 852.687 466.594 879.568 433.284C896.267 412.606 916.334 396.852 939.09 386.316C959.078 376.253 987.17 370.699 1010.07 370.699H1011.06C1015.4 370.699 1019.71 370.844 1024 371.13V396.717C1019.45 395.47 1014.58 394.801 1009.4 394.715C963.086 395.67 935.486 451.145 932.049 528.007H1024V549.669H929.972L929.942 549.689C925.703 624.579 966.692 687.87 1024 704.736Z" fill="white"/>
<path d="M836.115 244.625L836.923 244.448V238.195H672.014L518.891 598.084L365.768 238.195H188.059V244.448L188.857 244.625C218.957 251.419 234.239 261.551 234.239 298.091V725.872C234.239 762.412 218.898 772.544 188.798 779.338L188 779.516V785.788H308.57V779.535L307.773 779.358C277.672 772.564 262.39 762.432 262.39 725.892V322.905L459.093 785.788H470.249L672.683 309.996V736.457C670.104 765.317 654.96 774.228 627.705 780.382L626.897 780.569V786.773H836.923V780.569L836.115 780.382C808.831 774.228 793.322 765.317 790.743 736.457L790.605 298.091H790.743C790.743 261.551 806.024 251.419 836.115 244.625Z" fill="white"/>
</svg>

                    </SocialIconLink>
                    <SocialIconLink href="https://www.linkedin.com/in/heena-gupta-a183ba99/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" $brandColor="#0077B5">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                    </SocialIconLink>
                    <SocialIconLink href="https://github.com/Heena-Codes" target="_blank" rel="noopener noreferrer" aria-label="GitHub" $brandColor="#181717">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                    </SocialIconLink>
                    <SocialIconLink href="https://substack.com/@heena_gupta_93" target="_blank" rel="noopener noreferrer" aria-label="Substack" $brandColor="#FF6719">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24l10.54-5.812L22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                        </svg>
                    </SocialIconLink>
                    <SocialIconLink href="mailto:heenamahour984@gmail.com" aria-label="Gmail" $brandColor="#EA4335">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.546l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z"/>
                        </svg>
                    </SocialIconLink>
                </SocialIconsContainer>
                <IntroText>
                    {intro}
                </IntroText>
            </ContentContainer>
        </ResponsiveContainer>
        <div style={{ width: '100%' }}>
            <Contributions />
        </div>
    </div>
}