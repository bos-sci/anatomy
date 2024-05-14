import { Button } from '@boston-scientific/anatomy-react';
import { DropdownMenu } from '@boston-scientific/anatomy-react';
import { DropdownGroupName } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const GroupDropdown = (): JSX.Element => {
  return (
    <>
      <Example>
        <DropdownMenu triggerText="Dropdown trigger">
          <DropdownGroupName>Action group 1</DropdownGroupName>
          <Button>Action 1a</Button>
          <Button>Action 1b</Button>
          <DropdownGroupName>Action group 2</DropdownGroupName>
          <Button>Action 2a</Button>
          <Button>Action 2b</Button>
        </DropdownMenu>
      </Example>
      <iframe
        title="Dropdown menu with section headers Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-dropdown-menu--section-headers&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default GroupDropdown;
