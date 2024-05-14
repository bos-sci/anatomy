import Example from 'shared/components/Example';
import { ContentCard } from '@boston-scientific/anatomy-react';

const DefaultContentCard = (): JSX.Element => {
  return (
    <>
      <Example>
        <ContentCard
          texts={{
            cardTitle: 'Card title',
            cardDescription:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
          }}
          linkTitle={false}
          headingLevel="h2"
        />
      </Example>
      <iframe
        title="Content card Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-content-card--playground&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default DefaultContentCard;
