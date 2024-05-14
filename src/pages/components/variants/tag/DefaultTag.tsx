import { Tag } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const DefaultTag = (): JSX.Element => {
  return (
    <>
      <Example>
        <Tag>Default tag</Tag>
      </Example>
      <iframe
        title="Tabs Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-tag--playground&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default DefaultTag;
