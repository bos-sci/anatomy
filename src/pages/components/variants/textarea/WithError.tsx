import { ChangeEvent, useState } from 'react';
import { Textarea } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const TextareaWithError = (): JSX.Element => {
  const errorMessage = 'This is an example of an error message.';
  const [errorText, setErrorText] = useState(errorMessage);

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value.includes(' ')) {
      setErrorText(errorMessage);
    } else {
      setErrorText('');
    }
  };

  return (
    <>
      <Example>
        <Textarea
          label="Textarea"
          errorText={errorText}
          defaultValue="Invalid value"
          forceValidation
          onChange={handleChange}
        />
      </Example>
      <iframe
        title="Textarea with error Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-textarea--with-error&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default TextareaWithError;
