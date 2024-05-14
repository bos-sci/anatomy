import Example from 'shared/components/Example';
import { Footer } from '@boston-scientific/anatomy-react';
import { navItems, legalLinks, socialLinks } from './footerData';
import logoTagline from 'assets/images/logo-bsc-tagline.svg';

const ComplexFooter = (): JSX.Element => {
  return (
    <Example isFlush>
      <Footer
        logo={{ src: logoTagline, alt: 'Boston Scientific' }}
        navItems={navItems}
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
  );
};

export default ComplexFooter;
