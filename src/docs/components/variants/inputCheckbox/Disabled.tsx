import InputCheckbox from '../../../../library/components/InputCheckbox';
import Example from '../../../shared/components/Example';

const Disabled = (): JSX.Element => {
  return (
    <Example>
      <div className="ads-form-control">
        <InputCheckbox label="Disabled checkbox" disabled/>
      </div>
      <div className="ads-form-control">
        <InputCheckbox label="Disabled checked checkbox" disabled defaultChecked />
      </div>
    </Example>
  );
}

export default Disabled;