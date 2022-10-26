import Example from "../../../shared/components/Example";
import CardGroup from "../../../../library/components/CardGroup";

const ThreeUp = (): JSX.Element => {
  return (
    <Example>
      <CardGroup cardLayout="3up">
        <div className="docs-wire-card">
          Card 1
        </div>
        <div className="docs-wire-card">
          Card 2
        </div>
        <div className="docs-wire-card">
          Card 3
        </div>
      </CardGroup>
    </Example>
  );
}

export default ThreeUp;