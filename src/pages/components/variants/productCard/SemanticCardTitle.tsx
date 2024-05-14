import Example from 'shared/components/Example';
import { ProductCard } from '@boston-scientific/anatomy-react';

const SemanticCardTitle = (): JSX.Element => {
  return (
    <>
      <Example>
        <ProductCard
          texts={{
            title: 'Product card title',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
          }}
          headingLevel="h4"
          linkTo="docs-demo-link"
        />
      </Example>
      <iframe
        title="Product card with semantic title Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-product-card--semantic-card-title&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default SemanticCardTitle;
