import {
  NewspaperColumnLayout,
  NewspaperCard,
  NewspaperTitle,
  NewspaperDescription,
  NewspaperDate,
  NewspaperLink,
  NewspaperSource
} from "./styled-components/newspaper";

interface Publication {
  title: string;
  source: string;
  date: string;
  description: string;
  url: string;
}

const ExternalPublications = () => {
  const publications: Publication[] = [
    {
      title: "Expedia Speeds up Flights Search with Micro Frontends and GraphQL Optimizations",
      source: "InfoQ",
      date: "March 20, 2024",
      description: "Expedia made flight search faster by up to 52% (page usable time) by applying a range of optimizations to web and mobile applications. The company improved the observability of its applications and migrated the Flights web application to Micro Frontend Architecture (MFA) to allow flexibility, reusability, and better optimization. GraphQL query optimizations, including horizontal and vertical slicing and asynchronous query execution, achieved significant latency gains.",
      url: "https://www.infoq.com/news/2024/03/expedia-graphql-micro-frontends/"
    },
    {
      title: "Google Code-in 2014 wrap up with KDE",
      source: "Google Open Source Blog",
      date: "May 7, 2015",
      description: "The KDE community participated in Google Code-in 2014, an open source coding contest for 13 to 17 year old students. As mentor and co-administrator, the initiative created 277 tasks with 29 mentors volunteering to help students. At the end of the contest, 240 tasks had been completed, and two students, Mikhail Ivchenko from Russia and Ilya Kowalewski from Ukraine, were selected as Grand Prize Winners to visit Google's headquarters.",
      url: "https://opensource.googleblog.com/2015/05/google-code-in-2014-wrap-up-with-kde.html"
    }
  ];

  return (
    <NewspaperColumnLayout>
      {publications.map((publication, index) => (
        <NewspaperCard key={index}>
          <NewspaperSource>{publication.source}</NewspaperSource>
          <NewspaperDate>{publication.date}</NewspaperDate>
          <NewspaperTitle>{publication.title}</NewspaperTitle>
          <NewspaperDescription>{publication.description}</NewspaperDescription>
          <NewspaperLink 
            href={publication.url} 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Read Full Article
          </NewspaperLink>
        </NewspaperCard>
      ))}
    </NewspaperColumnLayout>
  );
};

export default ExternalPublications;

