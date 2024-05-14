import Example from 'shared/components/Example';
import { ProductCard } from '@boston-scientific/anatomy-react';

const NonSemanticCardTitle = (): JSX.Element => {
  return (
    <>
      <Example>
        <ProductCard
          texts={{
            title: 'Product card title',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
          }}
          linkTo="docs-demo-link"
        />
      </Example>
      <iframe
        title="Product card with non-semantic title Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-product-card--non-semantic-card-title&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default NonSemanticCardTitle;
