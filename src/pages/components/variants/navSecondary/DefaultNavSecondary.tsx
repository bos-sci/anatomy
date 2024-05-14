import Example from 'shared/components/Example';
import { NavSecondary, NavItemSecondary } from '@boston-scientific/anatomy-react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const DefaultNavSecondary = (): JSX.Element => {
  const location = useLocation();

  const navItems: NavItemSecondary[] = [
    {
      text: 'Page',
      to: '/page'
    },
    {
      text: 'Active page',
      to: '#'
    },
    {
      text: 'Page group',
      children: [
        {
          text: 'Child page 1',
          to: '/child-page'
        },
        {
          text: 'Child page 2',
          to: '/child-page'
        },
        {
          text: 'Nested page group',
          children: [
            {
              text: 'Nested child page 1',
              to: '/nested-child-page'
            },
            {
              text: 'Nested child page 2',
              to: '/nested-child-page'
            },
            {
              text: 'Nested child page 3',
              to: '/nested-child-page'
            }
          ]
        }
      ]
    }
  ];

  const navSecondaryTexts = {
    menuToggleText: 'Section menu'
  };

  useEffect(() => {
    setTimeout(() => {
      document
        .querySelectorAll('.docs-preview .nav-link')
        .forEach((link, i) => i !== 1 && link.classList.remove('is-active'));
    }, 0);
  }, []);

  return (
    <>
      <Example>
        <NavSecondary texts={navSecondaryTexts} navItems={navItems} location={location} />
      </Example>
      <iframe
        title="Secondary navigation Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-secondary-navigation--playground&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default DefaultNavSecondary;
