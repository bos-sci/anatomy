import { FormEvent, useRef, useState } from 'react';
import { Button } from '@boston-scientific/anatomy-react';
import { Fieldset } from '@boston-scientific/anatomy-react';
import { Form } from '@boston-scientific/anatomy-react';
import { InputCheckbox } from '@boston-scientific/anatomy-react';
import { InputRadio } from '@boston-scientific/anatomy-react';
import { InputText } from '@boston-scientific/anatomy-react';
import { RadioGroup } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';
import { Select } from '@boston-scientific/anatomy-react';
import { Option } from '@boston-scientific/anatomy-react';
import { Textarea } from '@boston-scientific/anatomy-react';

interface ADSInputElement extends HTMLInputElement {
  validate: () => void;
}

const DefaultForm = () => {
  const noSpacesError = 'Delete the spaces to clear the error message.';
  const [noSpacesInputError, setNoSpacesInputError] = useState(noSpacesError);
  const noSpacesInput = useRef<ADSInputElement>(null);

  const validateTextInput = () => {
    setNoSpacesInputError(noSpacesInput.current?.value.includes(' ') ? noSpacesError : '');
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    validateTextInput();
  };

  const handleInvalid = (e: FormEvent<HTMLFormElement>) => {
    validateTextInput();
  };

  return (
    <>
      <Example>
        <h2>Form example</h2>
        <p>Submit the form to see an example of validation.</p>
        <Form onSubmit={handleSubmit} onInvalid={handleInvalid}>
          <InputText
            ref={noSpacesInput}
            label="Text input"
            className="bsds-mt-2x"
            defaultValue="Invalid value"
            errorText={noSpacesInputError}
            helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three."
            onBlur={validateTextInput}
            onChange={validateTextInput}
          />

          <InputText label="Required text input" className="bsds-mt-3x" required />

          <InputText label="Disabled text input" className="bsds-mt-3x" disabled />

          <Textarea label="Textarea" className="bsds-mt-3x" />

          <Select id="optionDefault" label="Select" className="bsds-mt-3x">
            <Option value="" disabled selected />

            <Option value="option1">Option 1</Option>
            <Option value="option2">Option 2</Option>
            <Option value="option3">Option 3</Option>
          </Select>

          <Fieldset
            legend="Checkbox group"
            className="bsds-mt-4x"
            helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three."
          >
            <InputCheckbox label="Checkbox 1" />
            <InputCheckbox label="Checkbox 2" />
            <InputCheckbox label="Checkbox 3" />
          </Fieldset>

          <RadioGroup legend="Radio group" className="bsds-mt-4x">
            <InputRadio label="Radio 1" name="groupDisabled" value="defaultRadio1" defaultChecked />
            <InputRadio label="Radio 2" name="groupDisabled" value="defaultRadio2" />
            <InputRadio label="Radio 3" name="groupDisabled" value="defaultRadio3" />
          </RadioGroup>

          <InputCheckbox label="Required checkbox" className="bsds-mt-4x" required />

          <Button variant="assertive" className="bsds-mt-4x">
            Submit
          </Button>
        </Form>
      </Example>
      <iframe
        title="Form Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-form--playground&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="800"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default DefaultForm;
