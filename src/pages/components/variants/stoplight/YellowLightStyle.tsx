import { Stoplight } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const YellowLightStyle = (): JSX.Element => {
  return (
    <Example>
      <Stoplight lightColor="yellow" size="assertive">
        Assertive yellow light
      </Stoplight>
      <Stoplight lightColor="yellow">Default yellow light</Stoplight>
      <Stoplight lightColor="yellow" size="subtle">
        Subtle yellow light
      </Stoplight>
    </Example>
  );
};

export default YellowLightStyle;
