import Button from '../../../../library/components/Button';

const DefaultStyle = (): JSX.Element => {

  return<>
    <Button type="button">Text button</Button>
      <Button type="button" icon="plus">
        Icon left
      </Button>
      <Button type="button" icon="chevronRight" iconAlignment="right">
        Icon right
      </Button>
      <Button type="button" icon="plus" aria-label="icon button"/>
  </>;
}

export default DefaultStyle;