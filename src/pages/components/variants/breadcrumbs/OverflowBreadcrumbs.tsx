import { Breadcrumbs, Crumb } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const OverflowBreadcrumbs = (): JSX.Element => {
  const crumbs: Crumb[] = [
    {
      name: 'Great grandparent page',
      href: 'docs-demo-link'
    },
    {
      name: 'Grandparent page',
      href: 'docs-demo-link'
    },
    {
      name: 'Parent page',
      href: 'docs-demo-link'
    }
  ];

  return (
    <>
      <Example>
        <Breadcrumbs crumbs={crumbs} currentPage="Current page" />
      </Example>
      <iframe
        title="Breadcrumbs Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-breadcrumbs--overflow&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default OverflowBreadcrumbs;
