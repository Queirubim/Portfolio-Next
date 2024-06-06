import { RichText as CMSRichText } from '@graphcms/rich-text-react-renderer';
import { ComponentProps } from 'react';

type RichTextProps = ComponentProps<typeof CMSRichText>;
export const RichText = ({ ...props }: RichTextProps) => {
  return (
    <CMSRichText
      {...props}
      renderers={{
        bold: ({ children }) => <b className="font-medium">{children}</b>,
        ul: ({ children }) => (
          <ul className="list-disc list-inside pl-4 flex flex-col gap-1">
            {children}
          </ul>
        ),
        a: ({ children, ...props }) => (
          <a
            className="text-bluePhase-100 transition-colors underline"
            {...props}
          >
            {children}
          </a>
        ),
        h1: ({ children, ...props }) => (
          <h1 className="text-3xl transition-colors mb-3" {...props}>
            {children}
          </h1>
        ),
        h2: ({ children, ...props }) => (
          <h2 className="text-2xl transition-colors my-2" {...props}>
            {children}
          </h2>
        ),
      }}
    />
  );
};
