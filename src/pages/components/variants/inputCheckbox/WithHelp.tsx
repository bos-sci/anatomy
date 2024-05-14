import { useState } from 'react';
import { InputCheckbox } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';
import { Fieldset } from '@boston-scientific/anatomy-react';

const WithHelp = (): JSX.Element => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <Example>
        <InputCheckbox
          label="Checkbox"
          helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three."
          checked={isChecked}
          onChange={() => setIsChecked(!isChecked)}
        />
      </Example>
      <Example>
        <Fieldset
          legend="Legend"
          helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three."
        >
          <InputCheckbox label="Checkbox 1" />
          <InputCheckbox label="Checkbox 2" />
          <InputCheckbox label="Checkbox 3" />
        </Fieldset>
      </Example>
      <iframe
        title="Checkbox Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-checkbox--with-help&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
      <iframe
        title="Checkbox group Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-checkbox--group-with-help&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default WithHelp;
