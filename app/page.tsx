import { Metadata } from 'next';
import { HeroSection } from './components/pages/home/hero-section';
import { HighlightedProjects } from './components/pages/home/highlighted-projects';
import { KnownTechs } from './components/pages/home/known-techs';
import { WorkExperience } from './components/pages/home/work-experience';
import { HomePageData } from './types/page-info';
import { fetchHygraphQuery } from './utils/fetch-hygraph-query';

export const metadata: Metadata = {
  description:
    'Sou um desenvolvedor Front-end e aqui descrevo algumas das minhas habilidades e também apresento diversos projetos desenvolvidos por mim!',
};

const getPageData = async (): Promise<HomePageData> => {
  const query = `
  query MyQuery {
    page(where: {slug: "home"}) {
      introduction {
        raw
      }
      technologies {
        name
        shortDescription
        iconSvg
      }
      curriculum {
        url
      }
      profilePicture {
        url
      }
      socials {
        iconSvg
        url
      }
      knowTechsFront {
        iconSvg
        name
        startDate
        shortDescription
      }
      knowTechsBack {
        iconSvg
        name
        startDate
        shortDescription
      }
      highlightProjects {
        slug
        thumbnail {
          url
        }
        title
        shortDescription
        technologies {
          name
          shortDescription
          iconSvg
        }
      }
    }
    worckExperiences {
      workedArea
      workedPicture {
        url
      }
      role
      startDate
      endDate
      description {
        raw
      }
      workedUrl
      technologies {
        name
        shortDescription
        iconSvg
      }
    }
  }`;

  return fetchHygraphQuery(query, ['Page', 'Project']);
};

export default async function Home() {
  const { page: pageData, worckExperiences } = await getPageData();
  return (
    <>
      <HeroSection homeInfo={pageData} />
      <KnownTechs
        back={pageData.knowTechsBack}
        front={pageData.knowTechsFront}
      />
      <HighlightedProjects projects={pageData.highlightProjects} />
      <WorkExperience experiences={worckExperiences} />
    </>
  );
}
