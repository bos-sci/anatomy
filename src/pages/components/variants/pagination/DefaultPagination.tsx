import { Pagination } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const DefaultPagination = () => {
  return (
    <>
      <Example>
        <Pagination numberOfPages={10} />
      </Example>
      <iframe
        title="Pagination Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-pagination--playground&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default DefaultPagination;
