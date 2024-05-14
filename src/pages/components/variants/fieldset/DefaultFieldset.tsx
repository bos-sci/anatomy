import { ChangeEvent, useState } from 'react';
import { Fieldset } from '@boston-scientific/anatomy-react';
import { InputText } from '@boston-scientific/anatomy-react';
import { Textarea } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const DefaultFieldset = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <Example>
        <Fieldset legend="Legend">
          <InputText
            id="defaultFieldsetTextInput"
            label="Related text input"
            className="bsds-mt-2x"
            value={inputValue}
            onChange={handleChange}
          />

          <Textarea id="defaultFieldsetTextarea" label="Related textarea" className="bsds-mt-3x" />
        </Fieldset>
      </Example>
      <iframe
        title="Fieldset Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-fieldset--playground&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default DefaultFieldset;
