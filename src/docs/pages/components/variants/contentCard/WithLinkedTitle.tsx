import Example from 'docs/shared/components/Example';
import ContentCard from 'library/components/ContentCard';

const WithLinkedTitle = (): JSX.Element => {
  return (
    <Example>
      <ContentCard
        texts={{
          cardTitle: 'Card title',
          cardDescription:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum augue, viverra aliquet nunc. Cras eget felis sodales, vestibulum neque ac, rhoncus ipsum.'
        }}
        headingLevel="h4"
        linkHref="docs-demo-link"
        linkTitle
      />
    </Example>
  );
};

export default WithLinkedTitle;