import { RefObject } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { NavPrimary, NavNodePrimary } from '@boston-scientific/anatomy-react';

import logoBSC from 'assets/images/logo-bsc-tagline.svg';
import { complexData, utilityData } from './navPrimaryData';
import Example from 'shared/components/Example';
import { isActiveNode } from 'shared/helpers';

const logo = {
  src: logoBSC,
  alt: 'Boston Scientific logo',
  to: '/'
};

const ComplexNavPrimary = (): JSX.Element => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <>
      <Example isFlush>
        <NavPrimary
          logo={logo}
          navItems={complexData}
          utilityItems={utilityData}
          location={location}
          isActiveNode={(node: NavNodePrimary, ref: RefObject<HTMLAnchorElement>) => isActiveNode(node, ref, location)}
          navigateToSearchResult={(result) => navigate(result.to as string)}
        />
      </Example>
      <iframe
        title="Complex primary nav Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-primary-navigation--complex&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="800"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default ComplexNavPrimary;
