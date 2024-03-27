import type { RichTextContent } from '@graphcms/rich-text-types';
export type KnownTech = {
  iconSvg: string;
  name: string;
  startDate: string;
  shortDescription: string;
};

export type Technology = {
  name: string;
  shortDescription: string;
  iconSvg: string;
};

export type ProjectSection = {
  title: string;
  image: {
    url: string;
  };
};

export type Project = {
  slug: string;
  title: string;
  shortDescription: string;
  description: {
    raw: RichTextContent;
    text: string;
  };
  githubUrl?: string;
  onlineProjectUrl?: string;
  technologies: Technology[];
  thumbnail: {
    url: string;
  };
  sections: ProjectSection[];
};
