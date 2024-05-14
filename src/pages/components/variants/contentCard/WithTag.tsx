import Example from 'shared/components/Example';
import { ContentCard } from '@boston-scientific/anatomy-react';
import { Tag } from '@boston-scientific/anatomy-react';

const WithTag = (): JSX.Element => {
  return (
    <>
      <Example>
        <ContentCard
          texts={{
            cardTitle: 'Card title',
            cardDescription:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
          }}
          headingLevel="h4"
          tag={<Tag>Default Tag</Tag>}
        />
      </Example>
      <iframe
        title="Content card with tag Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-content-card--with-tag&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default WithTag;
