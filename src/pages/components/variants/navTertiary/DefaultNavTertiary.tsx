import Example from 'shared/components/Example';
import { NavTertiary, NavItemTertiary } from '@boston-scientific/anatomy-react';

const DefaultNavTertiary = (): JSX.Element => {
  const navTertiaryItems: NavItemTertiary[] = [
    {
      id: 'section1',
      text: 'First section heading'
    },
    {
      id: 'section2',
      text: 'Second section heading'
    },
    {
      id: 'section3',
      text: 'Third section heading'
    }
  ];

  return (
    <>
      <Example>
        <NavTertiary navTertiaryItems={navTertiaryItems} />
      </Example>
      <iframe
        title="Tertiary navigation Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-tertiary-navigation--playground&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default DefaultNavTertiary;
