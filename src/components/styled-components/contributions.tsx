import styled from 'styled-components';

export const ContributionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  color: #1a1a1a;
  line-height: 1.7;
  font-weight: 400;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', sans-serif;
`;

export const IntroSection = styled.div`
  margin-bottom: 24px;
  font-size: 1rem;
  color: #666;
  line-height: 1.8;
`;

export const ContributionSection = styled.div`
  break-inside: avoid;
  page-break-inside: avoid;
`;

export const SectionTitle = styled.h3`
  font-size: 1.1rem;
  color: #1a1a1a;
  margin-bottom: 20px;
  letter-spacing: 0;
  font-weight: 500;
  font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
  text-transform: lowercase;
  border-bottom: 1px solid #e0e0e0;
  padding-bottom: 8px;
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
  padding: 16px 0;
  margin-bottom: 20px;
  transition: all 0.2s ease;
  border-left: 2px solid #e0e0e0;
  padding-left: 16px;
  font-weight: 400;
  
  &:hover {
    border-left-color: #0077B5;
    padding-left: 20px;
  }
`;

export const ContributionTitle = styled.div`
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 8px;
  color: #1a1a1a;
  letter-spacing: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Noto Sans', sans-serif;
`;

export const ContributionMeta = styled.div`
  font-size: 0.85rem;
  margin-bottom: 8px;
  font-weight: 400;
  color: #666;
  letter-spacing: 0;
  font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
  opacity: 0.8;
`;

export const ContributionDescription = styled.div`
  font-size: 0.95rem;
  margin-top: 8px;
  color: #666;
  font-weight: 400;
  line-height: 1.7;
`;

export const TimelineItem = styled.div`
  break-inside: avoid;
  page-break-inside: avoid;
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
  color: #666;
  background-color: transparent;
  border: none;
  padding: 4px 0;
  text-align: left;
  font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
  opacity: 0.8;
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

export const CompanyTag = styled.span<{ $brandColor?: string }>`
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  padding: 6px 14px;
  border-radius: 6px;
  font-size: 0.85rem;
  color: #1a1a1a;
  font-weight: 500;
  letter-spacing: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: all 0.2s ease;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
  cursor: pointer;
  
  .logo {
    font-size: 1.2rem;
    display: inline-flex;
    align-items: center;
    filter: grayscale(0.3);
    transition: all 0.2s ease;
  }
  
  &:hover {
    border-color: ${props => props.$brandColor || '#0077B5'};
    background-color: ${props => props.$brandColor ? `${props.$brandColor}15` : '#f0f0f0'};
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    
    .logo {
      filter: grayscale(0);
      transform: scale(1.1);
    }
  }
`;

export const ImpactStatement = styled.div`
  background: transparent;
  border-radius: 0;
  padding: 20px 0;
  margin-top: 32px;
  font-size: 1rem;
  line-height: 1.8;
  border-left: 2px solid #0077B5;
  padding-left: 16px;
  color: #1a1a1a;
  font-weight: 400;
  position: relative;
`;

