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
  color: #495057;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  
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

    return <div>
        <ResponsiveContainer>
            <ImageContainer>
                <ImageWrapper>
                    <Image 
                        src="./heena.png"
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
                <OpportunityMessage>
                    💡 <HighlightText>Open to opportunities!</HighlightText> I'm always excited to explore new challenges, collaborate on innovative projects, and connect with fellow technologists. Feel free to reach out!
                </OpportunityMessage>
                <SocialIconsContainer>
                    <SocialIconLink href="https://medium.com/@heena_gupta_93" target="_blank" rel="noopener noreferrer" aria-label="Medium" $brandColor="#000000">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M2.846 6.887c.03-.295-.083-.586-.3-.767l-1.89-2.286v-.403h6.206l4.798 10.506 4.23-10.506h5.888v.403l-1.016 1.233c-.168.14-.25.357-.222.575v8.727c-.03.295.083.586.3.767l.99 1.198v.403H14.32v-.403l1.016-1.234c.168-.14.25-.357.222-.575V7.787L11.5 18.12H9.622L5.555 7.787v6.608c-.047.385.06.774.347 1.052l1.32 1.602v.404H3.865v-.403l1.32-1.602c.287-.278.394-.667.347-1.052V6.887z"/>
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
            </ContentContainer>
        </ResponsiveContainer>
        <div style={{ width: '100%' }}>
            <Contributions />
        </div>
    </div>
}