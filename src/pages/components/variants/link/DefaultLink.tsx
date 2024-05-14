import { Link } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const DefaultLink = (): JSX.Element => {
  return (
    <>
      <Example>
        <Link href="docs-demo-link">Link</Link>
      </Example>
      <iframe
        title="Image Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-link--playground&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default DefaultLink;
