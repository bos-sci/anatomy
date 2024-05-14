import { Stoplight } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const DefaultStoplight = (): JSX.Element => {
  return (
    <>
      <Example>
        <Stoplight lightColor="red">Red light</Stoplight>
        <Stoplight lightColor="yellow">Yellow light</Stoplight>
        <Stoplight lightColor="green">Green light</Stoplight>
      </Example>
      <iframe
        title="Stoplight Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-stoplight--playground&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default DefaultStoplight;
