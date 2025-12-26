import React from 'react';
import {
  ContributionsContainer,
  IntroSection,
  ContributionSection,
  SectionContent,
  SectionTitle,
  ContributionCard,
  ContributionTitle,
  ContributionMeta,
  ContributionDescription,
  CompaniesList,
  CompanyTag,
  ImpactStatement,
  HorizontalTimelineContainer,
  TimelineEventWrapper,
  TimelineYearLabel,
  TimelineEventCard,
  TimelineEventTitle,
  TimelineEventMeta,
  TimelineEventDescription
} from './styled-components/contributions';

interface Contribution {
  title: string;
  year?: string;
  location?: string;
  description: string;
  type?: 'open-source' | 'speaking' | 'mentoring' | 'work';
}

interface TimelineContribution extends Contribution {
  year: string;
}

export const Contributions = () => {
  const intro = "Heena Gupta is an Engineering Manager at Expedia, leading Flights price tracking and predictions across web, iOS, and Android, alongside operational excellence for quality across multiple organisations. She is also a service owner for flight progressive web applications. Heena completed her Bachelor of Technology in Computer Engineering from Delhi Technological University (2011–2015). She enjoys coding, learning new technologies, and mentoring junior engineers.";

  const openSourceContributions: TimelineContribution[] = [
    {
      title: "Season of KDE Student Developer",
      year: "2012",
      description: "Learned globally adopted engineering best practices through community collaboration with KDE, the open-source community behind K Desktop Environment related projects.",
      type: 'open-source'
    },
    {
      title: "Google Summer of Code Student Developer",
      year: "2013",
      description: "Contributed to the KDE Plasma team and played a key role in revamping plasmoid applications.",
      type: 'open-source'
    },
    {
      title: "Google Code-In Mentor",
      year: "2013",
      description: "Mentored new contributors to strengthen the open-source community.",
      type: 'mentoring'
    },
    {
      title: "Co-Administrator & Mentor",
      year: "2014",
      description: "Served as co-administrator and mentor for Season of KDE and Google Code-In programs.",
      type: 'mentoring'
    },
    // {
    //   title: "FOSSASIA 2015 Presentation",
    //   year: "2015",
    //   location: "Singapore",
    //   description: "Presented KDE Plasma projects at FOSSASIA 2015.",
    //   type: 'speaking'
    // },
    {
      title: "Google Open Source Blog Feature",
      year: "2015",
      description: "Open-source contributions featured on the Google Open Source Blog.",
      type: 'open-source'
    },
    {
      title: "Learn IT, Girl",
      year: "2015",
      description: "Mentored aspiring female developers, encouraging contributions to open-source communities such as KDE.",
      type: 'mentoring'
    }
  ];

  const workExperience = {
    companies: [
      { name: "Indus Valley Partners", logo: "📊", color: "#6C5CE7" },
      { name: "Shipsy", logo: "🚚", color: "#FF6B35" },
      { name: "Zomato", logo: "🍽️", color: "#E23744" },
      { name: "Expedia", logo: "✈️", color: "#FFD900" }
    ],
    description: "With over ten years of industry experience, Heena has worked across both startups and large organisations. She is passionate about working on diverse problem spaces and continuously expanding her skill set."
  };

  const speakingEngagements: Contribution[] = [
    {
      title: "Search Speed: Making Expedia Flights Faster",
      year: "2024",
      location: "JSNation 2024 (Amsterdam) & React Summit US 2024",
      description: "Presented on optimizing flight search performance and participated in panel discussions on growth paths for frontend developers.",
      type: 'speaking'
    },
    {
      title: "Portfolio Management through Storytelling",
      year: "2017",
      location: "Hong Kong Open Source Conference",
      description: "Presented on narrative visualizations with advanced filtering for portfolio management.",
      type: 'speaking'
    },
    {
      title: "Poster Presentation",
      year: "2017",
      location: "Grace Hopper Conference India",
      description: "Shared related work on portfolio management through storytelling.",
      type: 'speaking'
    }
  ];

  const impactStatement = "Through her engineering leadership, open-source contributions, and consistent mentorship, Heena is creating meaningful impact in technology while actively supporting diversity, inclusion, and the growth of the next generation of engineers.";

  return (
    <ContributionsContainer>
      <IntroSection>
        {intro}
      </IntroSection>

      <ContributionSection>
        <SectionTitle>Open Source & Community Contributions</SectionTitle>
        <HorizontalTimelineContainer>
          {openSourceContributions.map((contribution, index) => (
            <TimelineEventWrapper key={index}>
              <TimelineYearLabel>{contribution.year}</TimelineYearLabel>
              <TimelineEventCard>
                <TimelineEventTitle>{contribution.title}</TimelineEventTitle>
                {contribution.location && (
                  <TimelineEventMeta>{contribution.location}</TimelineEventMeta>
                )}
                <TimelineEventDescription>{contribution.description}</TimelineEventDescription>
              </TimelineEventCard>
            </TimelineEventWrapper>
          ))}
        </HorizontalTimelineContainer>
      </ContributionSection>

      <ContributionSection>
        <SectionTitle>Speaking Engagements</SectionTitle>
        <SectionContent>
          {speakingEngagements.map((engagement, index) => (
            <ContributionCard key={index}>
              <ContributionTitle>{engagement.title}</ContributionTitle>
              <ContributionMeta>
                {engagement.year} {engagement.location && `• ${engagement.location}`}
              </ContributionMeta>
              <ContributionDescription>{engagement.description}</ContributionDescription>
            </ContributionCard>
          ))}
        </SectionContent>
      </ContributionSection>
            <ContributionSection>
        <SectionTitle>Professional Experience</SectionTitle>
        <HorizontalTimelineContainer>
          {workExperience.companies.map((company, index) => (
            <TimelineEventWrapper key={index}>
              <TimelineYearLabel>{company.name}</TimelineYearLabel>
              <TimelineEventCard>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                  <span style={{ fontSize: '2rem' }}>{company.logo}</span>
                </div>
                <TimelineEventDescription>
                  {index === 0 ? workExperience.description : 
                   `Contributed to ${company.name}'s growth and technical excellence through hands-on engineering leadership and innovative solutions.`}
                </TimelineEventDescription>
              </TimelineEventCard>
            </TimelineEventWrapper>
          ))}
        </HorizontalTimelineContainer>
      </ContributionSection>


{/* 

      <ContributionSection>
        <SectionTitle>Mentoring & Education</SectionTitle>
        <SectionContent>

        </SectionContent>
      </ContributionSection> */}

      <ImpactStatement>
        {impactStatement}
      </ImpactStatement>
    </ContributionsContainer>
  );
};

