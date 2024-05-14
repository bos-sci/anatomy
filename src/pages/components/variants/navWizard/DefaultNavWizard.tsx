import { NavWizard } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';
import navWizardData from './navWizardData-3Step';

const DefaultNavWizard = (): JSX.Element => {
  return (
    <>
      <Example>
        <NavWizard
          texts={{
            firstTitle: 'First step title',
            wizardNavAriaLabel: 'wizard'
          }}
          navItems={navWizardData}
        />
      </Example>
      <iframe
        title="Wizard navigation Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-wizard-navigation--playground&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default DefaultNavWizard;
