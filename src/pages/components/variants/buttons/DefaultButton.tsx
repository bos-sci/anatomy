import { Button } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const DefaultButton = (): JSX.Element => {
  return (
    <>
      <Example isFlex>
        <Button type="button">Default button</Button>
      </Example>
      <iframe
        title="Default button Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-button--playground&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default DefaultButton;
