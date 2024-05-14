import { ChangeEvent, useState } from 'react';
import { InputText } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const DefaultInputText = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <Example>
        <InputText id="textInputDefault" label="Text input" value={inputValue} onChange={handleChange} />
      </Example>
      <iframe
        title="Text input Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-text-input--playground&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default DefaultInputText;
