import { InputText } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const WithPlaceholder = (): JSX.Element => {
  return (
    <>
      <Example>
        <InputText label="Text input" placeholder="Placeholder text" />
      </Example>
      <iframe
        title="Text input with placeholder Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-text-input--with-placeholder&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default WithPlaceholder;
