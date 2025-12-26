import styled from 'styled-components';

export const ContributionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  color: #1a1a1a;
  line-height: 1.7;
  font-weight: 400;
  font-family: 'Georgia', 'Times New Roman', serif;
`;

export const IntroSection = styled.div`
  font-size: 1rem;
  color: #1a1a1a;
  line-height: 1.8;
  font-family: 'Georgia', 'Times New Roman', serif;
`;

export const ContributionSection = styled.div`
  break-inside: avoid;
  page-break-inside: avoid;
`;

export const SectionTitle = styled.h3`
  font-size: 1.1rem;
  color: #1a1a1a;
  letter-spacing: 0.5px;
  font-weight: 700;
  font-family: 'Georgia', 'Times New Roman', serif;
  text-transform: uppercase;
  border-bottom: 1px solid #e0e0e0;
  break-inside: avoid;
  page-break-inside: avoid;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const SectionTitleLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: #1a1a1a;
  opacity: 0.5;
  transition: all 0.2s ease;
  text-decoration: none;
  
  svg {
    width: 16px;
    height: 16px;
  }
  
  &:hover {
    opacity: 1;
    transform: translateX(2px);
  }
  
  @media (max-width: 768px) {
    svg {
      width: 14px;
      height: 14px;
    }
  }
`;

export const SectionContent = styled.div`
  column-count: 1;
  column-gap: 32px;
  
  @media (min-width: 768px) {
    column-count: 2;
  }
  
  @media (min-width: 1200px) {
    column-count: 3;
  }
`;

export const ContributionCard = styled.div`
  break-inside: avoid;
  page-break-inside: avoid;
  background-color: transparent;
  border-radius: 0;
  padding: 0;
  transition: all 0.2s ease;
  border-left: 1px solid #d0d0d0;
  padding-left: 16px;
  font-weight: 400;
  font-family: 'Georgia', 'Times New Roman', serif;
  
  &:hover {
    border-left-color: #1a1a1a;
  }
`;

export const ContributionTitle = styled.div`
  font-size: 1rem;
  font-weight: 500;
  color: #1a1a1a;
  letter-spacing: 0;
  font-family: 'Georgia', 'Times New Roman', serif;
`;

export const ContributionMeta = styled.div`
  font-size: 0.85rem;
  font-weight: 400;
  color: #1a1a1a;
  letter-spacing: 0;
  font-family: 'Georgia', 'Times New Roman', serif;
  opacity: 0.6;
`;

export const ContributionDescription = styled.div`
  font-size: 0.95rem;
  color: #1a1a1a;
  font-weight: 400;
  line-height: 1.7;
  font-family: 'Georgia', 'Times New Roman', serif;
`;

export const MediaContainer = styled.div`
  margin-top: 12px;
  border-radius: 4px;
  overflow: hidden;
  border: 1px solid #d0d0d0;
`;

export const MediaImage = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

export const MediaVideo = styled.video`
  width: 100%;
  height: auto;
  display: block;
`;

export const MediaIframe = styled.iframe`
  width: 100%;
  aspect-ratio: 16 / 9;
  border: none;
  display: block;
`;

export const TimelineItem = styled.div`
  break-inside: avoid;
  page-break-inside: avoid;
  display: flex;
  gap: 16px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 8px;
    top: 24px;
    bottom: -20px;
    width: 1px;
    background-color: #e0e0e0;
  }
  
  &:last-child::before {
    display: none;
  }
`;

export const TimelineYear = styled.div`
  min-width: 60px;
  font-weight: 400;
  font-size: 0.85rem;
  color: #1a1a1a;
  background-color: transparent;
  border: none;
  padding: 4px 0;
  text-align: left;
  font-family: 'Georgia', 'Times New Roman', serif;
  opacity: 0.6;
`;

export const TimelineContent = styled.div`
  flex: 1;
`;

export const CompaniesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
`;

export const CompanyTag = styled.span<{ $brandColor?: string }>`
  background-color: transparent;
  border: 1px solid #d0d0d0;
  padding: 6px 14px;
  border-radius: 4px;
  font-size: 0.85rem;
  color: #1a1a1a;
  font-weight: 400;
  letter-spacing: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  font-family: 'Georgia', 'Times New Roman', serif;
  cursor: pointer;
  
  .logo {
    font-size: 1.2rem;
    display: inline-flex;
    align-items: center;
    filter: grayscale(0.5);
    transition: all 0.2s ease;
  }
  
  &:hover {
    border-color: #1a1a1a;
    background-color: transparent;
    
    .logo {
      filter: grayscale(0);
    }
  }
`;

export const ImpactStatement = styled.div`
  background: transparent;
  border-radius: 0;
  padding: 5px 0 5px 5px;
  font-size: 0.85rem;
  line-height: 1.6;
  color: #1a1a1a;
  font-weight: 400;
  position: relative;
  font-family: 'Georgia', 'Times New Roman', serif;
  font-style: italic;
  opacity: 0.9;
  
  &::before {
    content: '"';
    font-size: 1.5rem;
    position: absolute;
    left: -8px;
    top: 8px;
    color: #1a1a1a;
    opacity: 0.3;
  }
  
  &::after {
    content: '"';
    font-size: 1.5rem;
    margin-left: 4px;
    color: #1a1a1a;
    opacity: 0.3;
  }
  
  @media (max-width: 768px) {
  padding: 5px 0 5px 5px;
    font-size: 0.8rem;
  }
`;

// Horizontal Timeline Components
export const HorizontalTimelineContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  padding: 20px 0;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    gap: 16px;
    padding: 16px 0;
  }
`;

export const TimelineEventWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 220px;
  max-width: 280px;
  flex: 1 1 220px;
  
  @media (max-width: 768px) {
    min-width: 180px;
    max-width: 100%;
    flex: 1 1 180px;
  }
`;

export const TimelineYearLabel = styled.div`
  font-size: 0.85rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 12px;
  font-family: 'Georgia', 'Times New Roman', serif;
  padding-bottom: 8px;
  border-bottom: 2px solid #1a1a1a;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 10px;
    padding-bottom: 6px;
  }
`;

export const TimelineEventCard = styled.div<{ $isClickable?: boolean }>`
  background-color: transparent;
  padding: 16px;
  transition: all 0.2s ease;
  height: 100%;
  font-family: 'Georgia', 'Times New Roman', serif;
  cursor: ${props => props.$isClickable ? 'pointer' : 'default'};
  text-decoration: none;
  color: inherit;
  display: block;
  
  &:hover {
    border-color: #1a1a1a;
    ${props => props.$isClickable && `
      transform: translateY(-2px);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    `}
  }
  
  @media (max-width: 768px) {
    padding: 12px;
  }
`;

export const TimelineEventTitle = styled.div`
  font-size: 0.95rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #1a1a1a;
  font-family: 'Georgia', 'Times New Roman', serif;
  line-height: 1.4;
  display: flex;
  align-items: center;
  gap: 8px;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 6px;
  }
`;

export const CompanyLogo = styled.img`
  width: 32px;
  height: 32px;
  object-fit: contain;
  border-radius: 4px;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    width: 28px;
    height: 28px;
  }
`;

export const CompanyLogoFallback = styled.span`
  font-size: 1.5rem;
  line-height: 1;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;

export const TimelineEventMeta = styled.div`
  font-size: 0.75rem;
  margin-bottom: 8px;
  color: #1a1a1a;
  font-family: 'Georgia', 'Times New Roman', serif;
  opacity: 0.6;
  
  @media (max-width: 768px) {
    font-size: 0.7rem;
    margin-bottom: 6px;
  }
`;

export const TimelineEventDescription = styled.div`
  font-size: 0.85rem;
  color: #1a1a1a;
  line-height: 1.6;
  font-family: 'Georgia', 'Times New Roman', serif;
  
  @media (max-width: 768px) {
    font-size: 0.8rem;
    line-height: 1.5;
  }
`;

export const TypeTag = styled.span<{ $type?: 'open-source' | 'speaking' | 'mentoring' | 'work' }>`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.7rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-family: 'Georgia', 'Times New Roman', serif;
  margin-top: 8px;
  
  ${props => {
    switch (props.$type) {
      case 'open-source':
        return `
          background-color: #e3f2fd;
          color: #1565c0;
          border: 1px solid #90caf9;
        `;
      case 'mentoring':
        return `
          background-color: #fce4ec;
          color: #c2185b;
          border: 1px solid #f48fb1;
        `;
      case 'speaking':
        return `
          background-color: #fff3e0;
          color: #ef6c00;
          border: 1px solid #ffb74d;
        `;
      case 'work':
        return `
          background-color: #f3e5f5;
          color: #7b1fa2;
          border: 1px solid #ce93d8;
        `;
      default:
        return `
          background-color: #f5f5f5;
          color: #616161;
          border: 1px solid #e0e0e0;
        `;
    }
  }}
  
  @media (max-width: 768px) {
    font-size: 0.65rem;
    padding: 3px 8px;
  }
`;

export const TimelineYearGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  min-width: 220px;
  max-width: 280px;
  flex: 1 1 220px;
  
  @media (max-width: 768px) {
    min-width: 180px;
    max-width: 100%;
    flex: 1 1 180px;
  }
`;

export const SkillTag = styled.span<{ $color?: string }>`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 4px;
  font-size: 0.65rem;
  font-weight: 500;
  text-transform: lowercase;
  letter-spacing: 0.3px;
  font-family: 'Georgia', 'Times New Roman', serif;
  margin: 4px 4px 0 0;
  background-color: ${props => props.$color || '#f5f5f5'};
  color: #1a1a1a;
  border: 1px solid ${props => props.$color ? `${props.$color}dd` : '#e0e0e0'};
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 0.6rem;
    padding: 3px 8px;
  }
`;

export const SkillTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-top: 8px;
`;

