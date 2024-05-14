import { Button } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const IconRight = (): JSX.Element => {
  return (
    <>
      <Example isFlex>
        <Button type="button" icon="chevronRight" iconAlignment="right">
          Icon right
        </Button>
      </Example>
      <iframe
        title="Icon right button Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-button--icon-right&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default IconRight;
