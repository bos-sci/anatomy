import Example from 'shared/components/Example';
import { Footer } from '@boston-scientific/anatomy-react';
import { legalLinks, socialLinks } from './footerData';
import logoTagline from 'assets/images/logo-bsc-tagline.svg';

const SimpleFooter = (): JSX.Element => {
  return (
    <>
      <Example isFlush>
        <Footer
          logo={{ src: logoTagline, alt: 'Boston Scientific' }}
          legalLinkItems={legalLinks}
          texts={{
            tagline:
              'Boston Scientific is dedicated to transforming lives through innovative medical solutions that improve the health of patients around the world.'
          }}
          socialMedia={socialLinks}
          customizeCookiesLink="docs-demo-link"
          complianceCode="123456789"
          corporateLink
        />
      </Example>
      <iframe
        title="Simple footer Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-footer--simple&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="800"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default SimpleFooter;
