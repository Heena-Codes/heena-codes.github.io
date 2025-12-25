import styled from 'styled-components';

export const ContributionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  color: white;
  line-height: 1.6;
`;

export const IntroSection = styled.div`
  margin-bottom: 16px;
  font-size: 1rem;
`;

export const ContributionSection = styled.div`
  margin-bottom: 32px;
`;

export const SectionTitle = styled.h3`
  font-size: 1.5rem;
  color: #FFFFFF;
  margin-bottom: 16px;
  opacity: 0.9;
  letter-spacing: -0.5px;
  border-bottom: 2px solid rgba(255, 255, 255, 0.3);
  padding-bottom: 8px;
`;

export const ContributionCard = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  transition: all 0.3s ease;
  border-left: 4px solid rgba(255, 255, 255, 0.5);
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
    transform: translateX(4px);
  }
`;

export const ContributionTitle = styled.div`
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 8px;
  color: #FFFFFF;
`;

export const ContributionMeta = styled.div`
  font-size: 0.9rem;
  opacity: 0.8;
  margin-bottom: 6px;
  font-style: italic;
`;

export const ContributionDescription = styled.div`
  font-size: 0.95rem;
  opacity: 0.9;
  margin-top: 8px;
`;

export const TimelineItem = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    left: 8px;
    top: 24px;
    bottom: -20px;
    width: 2px;
    background-color: rgba(255, 255, 255, 0.3);
  }
  
  &:last-child::before {
    display: none;
  }
`;

export const TimelineYear = styled.div`
  min-width: 60px;
  font-weight: 600;
  font-size: 1rem;
  color: #FFFFFF;
  opacity: 0.9;
`;

export const TimelineContent = styled.div`
  flex: 1;
`;

export const CompaniesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 12px;
`;

export const CompanyTag = styled.span`
  background-color: rgba(255, 255, 255, 0.2);
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 0.9rem;
`;

export const ImpactStatement = styled.div`
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05));
  border-radius: 8px;
  padding: 20px;
  margin-top: 24px;
  font-size: 1rem;
  line-height: 1.7;
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

