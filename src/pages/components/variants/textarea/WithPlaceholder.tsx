import { ChangeEvent, useState } from 'react';
import { Textarea } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const TextareaWithPlaceholder = (): JSX.Element => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <Example>
        <Textarea label="Textarea" placeholder="Placeholder text" value={inputValue} onChange={handleChange} />
      </Example>
      <iframe
        title="Textarea with placeholder Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-textarea--with-placeholder&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default TextareaWithPlaceholder;
