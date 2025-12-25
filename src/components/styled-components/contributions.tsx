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
  margin-bottom: 32px;
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
`;

export const ContributionCard = styled.div`
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

export const CompanyTag = styled.span`
  background-color: #f5f5f5;
  border: 1px solid #e0e0e0;
  padding: 4px 10px;
  border-radius: 3px;
  font-size: 0.85rem;
  color: #1a1a1a;
  font-weight: 400;
  letter-spacing: 0;
  display: inline-block;
  transition: all 0.2s ease;
  font-family: 'Monaco', 'Menlo', 'Courier New', monospace;
  
  &:hover {
    border-color: #0077B5;
    background-color: #f0f0f0;
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

