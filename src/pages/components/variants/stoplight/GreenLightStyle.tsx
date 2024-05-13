import { Stoplight } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const GreenLightStyle = (): JSX.Element => {
  return (
    <Example>
      <Stoplight lightColor="green" size="assertive">
        Assertive green light
      </Stoplight>
      <Stoplight lightColor="green">Default green light</Stoplight>
      <Stoplight lightColor="green" size="subtle">
        Subtle green light
      </Stoplight>
    </Example>
  );
};

export default GreenLightStyle;
