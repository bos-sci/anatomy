import { Button } from '@boston-scientific/anatomy-react';
import { DropdownMenu } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const HighlightDropdown = (): JSX.Element => {
  return (
    <>
      <Example>
        <DropdownMenu triggerText="Dropdown trigger" highlightedAction={<Button>Highlighted action</Button>}>
          <Button>Action 1</Button>
          <Button>Action 2</Button>
          <Button>Action 3</Button>
        </DropdownMenu>
      </Example>
      <iframe
        title="Dropdown menu with highlighted action Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-dropdown-menu--highlighted-action&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default HighlightDropdown;
