import Select from '../../../../library/components/Select';
import Option from '../../../../library/components/Option';
import Example from '../../../shared/components/Example';

const WithPlaceholder = (): JSX.Element => {
  return (
    <Example>
      <div className="bsds-form-control">
        <Select id="selectWithPlaceholder" label="Select">
          <Option value="" disabled selected>
            Placeholder text
          </Option>
          <Option value="option1">Option 1</Option>
          <Option value="option2">Option 2</Option>
          <Option value="option3">Option 3</Option>
        </Select>
      </div>
    </Example>
  );
};

export default WithPlaceholder;
