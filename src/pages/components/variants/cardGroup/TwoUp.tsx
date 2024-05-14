import Example from 'shared/components/Example';
import { CardGroup } from '@boston-scientific/anatomy-react';

const TwoUp = (): JSX.Element => {
  return (
    <>
      <Example>
        <CardGroup cardLayout="twoUp">
          <div className="docs-wire-card">Card 1</div>
          <div className="docs-wire-card">Card 2</div>
        </CardGroup>
      </Example>
      <iframe
        title="Two-up card group Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-card-group--playground&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default TwoUp;
