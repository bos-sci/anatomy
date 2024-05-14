import { Button } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const Icon = (): JSX.Element => {
  return (
    <>
      <Example isFlex>
        <Button type="button" icon="plus" aria-label="icon button" />
      </Example>
      <iframe
        title="Icon button Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-button--icon&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default Icon;
