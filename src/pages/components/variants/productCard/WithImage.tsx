import Example from 'shared/components/Example';
import { ProductCard } from '@boston-scientific/anatomy-react';
import { Image } from '@boston-scientific/anatomy-react';
import image5050 from 'assets/images/50-50-split.jpg';

const WithImage = (): JSX.Element => {
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
          image={<Image ratio="50:50" src={image5050} alt="Demo placeholder for a product image." />}
        />
      </Example>
      <Example>
        <ProductCard
          texts={{
            title: 'Product card title',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
          }}
          headingLevel="h4"
          linkTo="docs-demo-link"
          image={<Image ratio="1:1" src={image5050} alt="Demo placeholder for a product image." />}
        />
      </Example>
      <iframe
        title="Product card with image Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-product-card--with-image&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default WithImage;
