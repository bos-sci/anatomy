import { SkipLink } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';
import useTitle from 'shared/hooks/useTitle';

const DefaultSkipLink = (): JSX.Element => {
  useTitle({ titlePrefix: `Example Skip Link - Components` });
  return (
    <>
      <Example isFlush>
        <SkipLink destinationId="mainContent" destination="main content" />
        <header className="docs-wire-header">
          <p>Header area</p>
          <a href="docs-demo-link">Example header link</a>
        </header>
        <main id="mainContent" className="docs-wire-main">
          <p>Main content area</p>
          <a href="docs-demo-link">Example link</a>
        </main>
      </Example>
      <iframe
        title="Skip link Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/docs/components-skip-link--docs&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default DefaultSkipLink;
