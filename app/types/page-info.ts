import { KnownTech, Project } from './projects';
import type { RichTextContent } from '@graphcms/rich-text-types';
import { WorckExperience } from './worck-experience';

export type Social = {
  url: string;
  iconSvg: string;
};

export type HomePageInfo = {
  introduction: {
    raw: RichTextContent;
  };
  technologies: KnownTech[];
  profilePicture: {
    url: string;
  };
  curriculum: {
    url: string;
  };
  socials: Social[];
  knowTechsFront: KnownTech[];
  knowTechsBack: KnownTech[];
  highlightProjects: Project[];
};

export type ProjectPageData = {
  project: Project;
};

export type ProjectPageStaticData = {
  projects: {
    slug: string;
  }[];
};

export type ProjectsPageData = {
  projects: Project[];
};

export type HomePageData = {
  page: HomePageInfo;
  worckExperiences: WorckExperience[];
};
