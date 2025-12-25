import React from 'react';
import {
  ContributionsContainer,
  IntroSection,
  ContributionSection,
  SectionTitle,
  ContributionCard,
  ContributionTitle,
  ContributionMeta,
  ContributionDescription,
  TimelineItem,
  TimelineYear,
  TimelineContent,
  CompaniesList,
  CompanyTag,
  ImpactStatement
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
    {
      title: "FOSSASIA 2015 Presentation",
      year: "2015",
      location: "Singapore",
      description: "Presented KDE Plasma projects at FOSSASIA 2015.",
      type: 'speaking'
    },
    {
      title: "Google Open Source Blog Feature",
      year: "2015",
      description: "Open-source contributions featured on the Google Open Source Blog.",
      type: 'open-source'
    }
  ];

  const workExperience = {
    companies: ["Paytm", "Shipsy", "Indus Valley Partners", "Expedia"],
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

  const mentoringActivities: Contribution[] = [
    {
      title: "Learn IT, Girl",
      year: "2015",
      description: "Mentored aspiring female developers, encouraging contributions to open-source communities such as KDE.",
      type: 'mentoring'
    },
    {
      title: "KDE Knowledge Sharing",
      year: "2013-2014",
      location: "DTU",
      description: "Represented KDE in Google Summer of Code knowledge-sharing sessions at Delhi Technological University.",
      type: 'mentoring'
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
        {openSourceContributions.map((contribution, index) => (
          <TimelineItem key={index}>
            <TimelineYear>{contribution.year}</TimelineYear>
            <TimelineContent>
              <ContributionCard>
                <ContributionTitle>{contribution.title}</ContributionTitle>
                {contribution.location && (
                  <ContributionMeta>{contribution.location}</ContributionMeta>
                )}
                <ContributionDescription>{contribution.description}</ContributionDescription>
              </ContributionCard>
            </TimelineContent>
          </TimelineItem>
        ))}
      </ContributionSection>

      <ContributionSection>
        <SectionTitle>Work Experience</SectionTitle>
        <ContributionCard>
          <ContributionDescription>{workExperience.description}</ContributionDescription>
          <CompaniesList>
            {workExperience.companies.map((company, index) => (
              <CompanyTag key={index}>{company}</CompanyTag>
            ))}
          </CompaniesList>
        </ContributionCard>
      </ContributionSection>

      <ContributionSection>
        <SectionTitle>Speaking Engagements</SectionTitle>
        {speakingEngagements.map((engagement, index) => (
          <ContributionCard key={index}>
            <ContributionTitle>{engagement.title}</ContributionTitle>
            <ContributionMeta>
              {engagement.year} {engagement.location && `• ${engagement.location}`}
            </ContributionMeta>
            <ContributionDescription>{engagement.description}</ContributionDescription>
          </ContributionCard>
        ))}
      </ContributionSection>

      <ContributionSection>
        <SectionTitle>Mentoring & Education</SectionTitle>
        {mentoringActivities.map((activity, index) => (
          <ContributionCard key={index}>
            <ContributionTitle>{activity.title}</ContributionTitle>
            <ContributionMeta>
              {activity.year} {activity.location && `• ${activity.location}`}
            </ContributionMeta>
            <ContributionDescription>{activity.description}</ContributionDescription>
          </ContributionCard>
        ))}
      </ContributionSection>

      <ImpactStatement>
        {impactStatement}
      </ImpactStatement>
    </ContributionsContainer>
  );
};

