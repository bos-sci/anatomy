import { FormEvent, useState } from 'react';
import { Form } from '@boston-scientific/anatomy-react';
import { InputText } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const Required = (): JSX.Element => {
  const [didSubmit, setDidSubmit] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setDidSubmit(true);
  };

  return (
    <Example>
      <Form onSubmit={handleSubmit}>
        <div className="bsds-form-control bsds-margin-top-remove">
          <InputText label="Required text input" forceValidation={didSubmit} required />
        </div>
      </Form>
    </Example>
  );
};

export default Required;