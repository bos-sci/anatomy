import { InputText } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const WithHelpText = (): JSX.Element => {
  return (
    <>
      <Example>
        <InputText
          label="Text input"
          helpText="This is an example of help text. It can wrap to two lines, but try not to go longer than three."
        />
      </Example>
      <iframe
        title="Text input with help Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-text-input--with-help&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default WithHelpText;
