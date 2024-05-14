import { Button } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const ActiveFilterStyle = (): JSX.Element => {
  return (
    <>
      <Example isFlex>
        <Button type="button" activeFilter>
          Active filter button
        </Button>
      </Example>
      <iframe
        title="Active filter button Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-button--active-filter&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default ActiveFilterStyle;
