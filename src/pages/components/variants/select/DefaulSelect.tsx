import { Select } from '@boston-scientific/anatomy-react';
import { Option } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const DefaultSelect = (): JSX.Element => {
  return (
    <>
      <Example>
        <Select id="optionDefault" label="Select">
          <Option value="" disabled selected />
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
          <Option value="option3">Option 3</Option>
        </Select>
      </Example>
      <iframe
        title="Select Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-select--playground&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default DefaultSelect;
