import { ProjectDetails } from '@/app/components/pages/project/project-details';
import { ProjectSections } from '@/app/components/pages/project/project-section';
import { ProjectPageData, ProjectPageStaticData } from '@/app/types/page-info';
import { fetchHygraphQuery } from '@/app/utils/fetch-hygraph-query';
import { Metadata } from 'next';

type ProjectProps = {
  params: {
    slug: string;
  };
};

const getProjectDetails = async (slug: string): Promise<ProjectPageData> => {
  const query = `query ProjectQuery {
    project(where: {slug: "${slug}"}) {
      technologies {
        name
        shortDescription
        iconSvg
      }
      shortDescription
      description {
        raw
        text
      }
      title
      thumbnail {
        url
      }
      slug
      githubUrl
      onlineProjectUrl
      sections {
        title
        image {
          url
        }
      }
    }
  }`;

  return fetchHygraphQuery(query, ['Project']);
};

export default async function Project({ params: { slug } }: ProjectProps) {
  const { project } = await getProjectDetails(slug);

  return (
    <>
      <ProjectDetails project={project} />
      <ProjectSections sections={project.sections} />
    </>
  );
}

export const dynamicParams = false;

export async function generateStaticParams() {
  const query = `
    query ProjectsSlugsQuery() {
      projects(first:100) {
        slug
      }
    }
  `;

  const { projects } = await fetchHygraphQuery<ProjectPageStaticData>(query);

  return projects;
}

export async function generateMetadata({
  params: { slug },
}: ProjectProps): Promise<Metadata> {
  const data = await getProjectDetails(slug);
  const project = data.project;

  return {
    title: project.title,
    description: project.description.text,
  };
}
