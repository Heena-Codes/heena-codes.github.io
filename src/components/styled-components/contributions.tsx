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
`;

export const SectionContent = styled.div`
  column-count: 1;
  column-gap: 32px;
  column-rule: 1px solid #e0e0e0;
  
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

export const TimelineEventCard = styled.div`
  background-color: transparent;
  border: 1px solid #d0d0d0;
  border-radius: 0;
  padding: 16px;
  transition: all 0.2s ease;
  height: 100%;
  font-family: 'Georgia', 'Times New Roman', serif;
  
  &:hover {
    border-color: #1a1a1a;
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
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 6px;
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

