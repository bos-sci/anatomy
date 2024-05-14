import Example from 'shared/components/Example';
import { ContentCard } from '@boston-scientific/anatomy-react';
import { Image } from '@boston-scientific/anatomy-react';
import image16to9 from 'assets/images/16to9.jpg';

const WithImage = (): JSX.Element => {
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
          image={<Image src={image16to9} isDecorative />}
        />
      </Example>
      <iframe
        title="Content card with image Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-content-card--with-image&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default WithImage;
