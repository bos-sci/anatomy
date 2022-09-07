import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from '../Button';
import DropdownMenu from '../DropdownMenu';
import DropdownMenuHeading from '../DropdownMenuHeading';

describe("Dropdown", () => {
  it("Renders a standard dropdown when only triggerText prop is provided", () => {
    render(
      <DropdownMenu triggerText='Trigger menu text'>
        <Button>Dropdown item 1</Button>
        <Button>Dropdown item 2</Button>
        <Button>Dropdown item 3</Button>
      </DropdownMenu>
    );

    expect(screen.getByText('Trigger menu text')).toBeInTheDocument();
  });

  it("Dropdown menu should open on click on trigger.", async () => {
    const user = userEvent.setup();

    render(
      <DropdownMenu triggerText='Trigger menu text'>
        <Button>Dropdown item 1</Button>
        <Button>Dropdown item 2</Button>
        <Button>Dropdown item 3</Button>
      </DropdownMenu>
    );

    await user.click(screen.getByText('Trigger menu text'));
    expect(screen.getByText('Dropdown item 1')).toBeVisible();
    expect(screen.getByText('Dropdown item 2')).toBeVisible();
    expect(screen.getByText('Dropdown item 3')).toBeVisible();
  });

  it("Should have aria-expanded='true' attribute on the trigger when menu is open", async () => {
    const user = userEvent.setup();

    render(
      <DropdownMenu triggerText='Trigger menu text'>
        <Button>Dropdown item 1</Button>
        <Button>Dropdown item 2</Button>
        <Button>Dropdown item 3</Button>
      </DropdownMenu>
    );

    const trigger = screen.getByText('Trigger menu text')

    expect(trigger).toHaveAttribute('aria-expanded', 'false');
    await user.click(trigger);
    expect(trigger).toHaveAttribute('aria-expanded', 'true');
  });

  it("Renders a menu heading in the dropdown menu when DropdownMenuHeading child is provided.", async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu triggerText='Trigger menu text' highlightedAction={<Button>Highlighted Action</Button>}>
        <Button>Dropdown item 1</Button>
        <Button>Dropdown item 2</Button>
        <Button>Dropdown item 3</Button>
      </DropdownMenu>
    );
    await user.click(screen.getByText('Trigger menu text'));

    expect(screen.getByText('Highlighted Action')).toBeInTheDocument();
    expect(screen.getByText('Highlighted Action')).toBeVisible();
  });

  it("Renders a highlighted action in the dropdown menu when highlightedAction prop is provided.", async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu triggerText='Trigger menu text'>
        <Button>Dropdown item 1</Button>
        <DropdownMenuHeading>Section heading 1</DropdownMenuHeading>
        <Button>Dropdown item 2</Button>
        <Button>Dropdown item 3</Button>
      </DropdownMenu>
    );
    await user.click(screen.getByText('Trigger menu text'));

    const heading = screen.getByText('Section heading 1');
    expect(heading).toBeInTheDocument();
    expect(heading).toBeVisible();
  });

  it("Menu items should have aria-describedby attribute relating to closest previous heading.", async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu triggerText='Trigger menu text'>
        <Button>Dropdown item 1</Button>
        <DropdownMenuHeading>Section heading 1</DropdownMenuHeading>
        <Button>Dropdown item 2</Button>
        <Button>Dropdown item 3</Button>
        <DropdownMenuHeading>Section heading 2</DropdownMenuHeading>
        <Button>Dropdown item 4</Button>
      </DropdownMenu>
    );
    await user.click(screen.getByText('Trigger menu text'));

    expect(screen.getByText('Dropdown item 1')).not.toHaveAttribute('aria-describedby');

    const heading1 = screen.getByText('Section heading 1');
    const item2 = screen.getByText('Dropdown item 2');
    const item3 = screen.getByText('Dropdown item 3');
    expect(item2).toHaveAttribute('aria-describedby', heading1.id);
    expect(item3).toHaveAttribute('aria-describedby', heading1.id);

    const heading2 = screen.getByText('Section heading 2');
    const item4 = screen.getByText('Dropdown item 4');
    expect(item4).toHaveAttribute('aria-describedby', heading2.id);
  });

  // Keyboard management tests
  it("Focuses next item on press of down arrow, and loops back to top after last item.", async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu triggerText='Trigger menu text'>
        <Button>Dropdown item 1</Button>
        <Button>Dropdown item 2</Button>
        <Button>Dropdown item 3</Button>
      </DropdownMenu>
    );


    await user.click(screen.getByText('Trigger menu text'));
    const item1 = screen.getByText('Dropdown item 1');
    const item2 = screen.getByText('Dropdown item 2');
    const item3 = screen.getByText('Dropdown item 3');

    await user.keyboard('{ArrowDown}');
    expect(item1).toHaveFocus();
    await user.keyboard('{ArrowDown}');
    expect(item2).toHaveFocus();
    await user.keyboard('{ArrowDown}');
    expect(item3).toHaveFocus();
    await user.keyboard('{ArrowDown}');
    expect(item1).toHaveFocus();
  });

  it("Focuses previous item on press of up arrow, and loops back to bottom after first item.", async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu triggerText='Trigger menu text'>
        <Button>Dropdown item 1</Button>
        <Button>Dropdown item 2</Button>
        <Button>Dropdown item 3</Button>
      </DropdownMenu>
    );


    await user.click(screen.getByText('Trigger menu text'));
    const item1 = screen.getByText('Dropdown item 1');
    const item2 = screen.getByText('Dropdown item 2');
    const item3 = screen.getByText('Dropdown item 3');

    await user.keyboard('{ArrowUp}');
    expect(item3).toHaveFocus();
    await user.keyboard('{ArrowUp}');
    expect(item2).toHaveFocus();
    await user.keyboard('{ArrowUp}');
    expect(item1).toHaveFocus();
    await user.keyboard('{ArrowUp}');
    expect(item3).toHaveFocus();
  });

  it("Focus skips over headings.", async () => {
    const user = userEvent.setup();
    render(
      <DropdownMenu triggerText='Trigger menu text'>
        <Button>Dropdown item 1</Button>
        <DropdownMenuHeading>Section heading 1</DropdownMenuHeading>
        <Button>Dropdown item 2</Button>
      </DropdownMenu>
    );


    await user.click(screen.getByText('Trigger menu text'));
    const item1 = screen.getByText('Dropdown item 1');
    const item2 = screen.getByText('Dropdown item 2');

    await user.keyboard('{ArrowDown}');
    expect(item1).toHaveFocus();
    await user.keyboard('{ArrowDown}');
    expect(item2).toHaveFocus();
    await user.keyboard('{ArrowUp}');
    expect(item1).toHaveFocus();
  });
});