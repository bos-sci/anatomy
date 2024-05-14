import { ChangeEvent, useState } from 'react';
import { Select } from '@boston-scientific/anatomy-react';
import { Option } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const WithHelpError = (): JSX.Element => {
  const errorMessage = 'This is an example of an error message.';
  const [errorText, setErrorText] = useState(errorMessage);

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (e.target.value.includes(' ')) {
      setErrorText(errorMessage);
    } else {
      setErrorText('');
    }
  };

  return (
    <>
      <Example>
        <Select
          id="selectWithHelpError"
          label="Select"
          helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three."
          errorText={errorText}
          forceValidation
          onChange={handleChange}
        >
          <Option value="" disabled selected />
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
          <Option value="option3">Option 3</Option>
        </Select>
      </Example>
      <iframe
        title="Select with help and error Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-select--with-help-and-error&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default WithHelpError;
