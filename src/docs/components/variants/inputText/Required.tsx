import { FormEvent, useState } from 'react';
import Form from '../../../../library/components/Form';
import InputText from '../../../../library/components/InputText';
import Example from '../../../shared/components/Example';

const Required = (): JSX.Element => {

  // TODO: Handle on submit valdiation within a form component
  const [didSubmit, setDidSubmit] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDidSubmit(true);
  }

  return (
    <Example>
      <Form onSubmit={handleSubmit}>
        <InputText label="Required text input" forceValidation={didSubmit} required />
      </Form>
    </Example>
  );
}

export default Required;