import { Ribbon } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const RibbonConstrained = (): JSX.Element => {
  return (
    <>
      <Example>
        <Ribbon isConstrained>Constrained ribbon</Ribbon>
      </Example>
      <iframe
        title="Ribbon with constrained width Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-ribbon--with-constrained-width&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default RibbonConstrained;
