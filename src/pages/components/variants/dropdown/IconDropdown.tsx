import { Button } from '@boston-scientific/anatomy-react';
import { DropdownMenu } from '@boston-scientific/anatomy-react';
import { Icon } from '@boston-scientific/anatomy-react';
import Example from 'shared/components/Example';

const IconDropdown = (): JSX.Element => {
  return (
    <>
      <Example>
        <DropdownMenu triggerText="Dropdown trigger" icon="ellipsis">
          <Button>
            <Icon name="plus" size="2x" className="bsds-icon-left" />
            Action 1
          </Button>
          <Button>
            <Icon name="plus" size="2x" className="bsds-icon-left" />
            Action 2
          </Button>
          <Button>
            <Icon name="plus" size="2x" className="bsds-icon-left" />
            Action 3
          </Button>
        </DropdownMenu>
      </Example>
      <iframe
        title="Dropdown menu with icons Storybook story"
        src="https://main--64e769384ef6b440f819fcec.chromatic.com/?path=/story/components-dropdown-menu--with-icons&full=1&shortcuts=false&singleStory=true"
        width="100%"
        height="400"
        className="bsds-mt-3x"
      ></iframe>
    </>
  );
};

export default IconDropdown;
