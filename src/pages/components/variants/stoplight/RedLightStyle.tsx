import { Stoplight } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const RedLightStyle = (): JSX.Element => {
  return (
    <Example>
      <Stoplight lightColor="red" size="assertive">
        Assertive red light
      </Stoplight>
      <Stoplight lightColor="red">Default red light</Stoplight>
      <Stoplight lightColor="red" size="subtle">
        Subtle red light
      </Stoplight>
    </Example>
  );
};

export default RedLightStyle;
