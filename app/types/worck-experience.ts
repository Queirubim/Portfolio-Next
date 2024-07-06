import type { KnownTech } from './projects';
import type { RichTextContent } from '@graphcms/rich-text-types';

export type WorckExperience = {
  workedArea: string;
  workedUrl: string;
  role: string;
  startDate: string;
  endDate: string;
  workedPicture: {
    url: string;
  };
  technologies: KnownTech[];
  description: {
    raw: RichTextContent;
  };
};
