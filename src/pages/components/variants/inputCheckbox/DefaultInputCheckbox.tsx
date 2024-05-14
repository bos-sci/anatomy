import { InputCheckbox } from '@boston-scientific/anatomy-react';
import { Fieldset } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const DefaultInputCheckbox = (): JSX.Element => {
  return (
    <>
      <Example>
        <InputCheckbox label="Checkbox" />
      </Example>
      <Example>
        <Fieldset legend="Legend">
          <InputCheckbox label="Checkbox 1" />
          <InputCheckbox label="Checkbox 2" />
          <InputCheckbox label="Checkbox 3" />
        </Fieldset>
      </Example>
      <iframe
        title="Checkbox Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-checkbox--playground&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
      <iframe
        title="Checkbox group Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-checkbox--group&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default DefaultInputCheckbox;
