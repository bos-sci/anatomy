import { Ribbon } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const RibbonShadow = (): JSX.Element => {
  return (
    <>
      <Example>
        <Ribbon variant="informational" withShadow>
          Ribbon with shadow
        </Ribbon>
      </Example>
      <iframe
        title="Ribbon with shadow Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-ribbon--with-shadow&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default RibbonShadow;
