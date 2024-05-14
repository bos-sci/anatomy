import { Accordion } from '@boston-scientific/anatomy-react';
import { AccordionPanel } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const DefaultAccordion = (): JSX.Element => {
  return (
    <>
      <Example>
        <Accordion headingLevel="h2">
          <AccordionPanel heading="Accordion 1">Accordion panel 1</AccordionPanel>
          <AccordionPanel heading="Accordion 2">Accordion panel 2</AccordionPanel>
          <AccordionPanel heading="Accordion 3">Accordion panel 3</AccordionPanel>
        </Accordion>
      </Example>
      <iframe
        title="Accordion Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-accordion--playground&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default DefaultAccordion;
