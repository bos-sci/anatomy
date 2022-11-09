import Example from "../../../shared/components/Example";
import Image from "../../../../library/components/Image";

const ImageStyle16x9 = (): JSX.Element => {
  return (
    <Example>
      <Image src="https://images.unsplash.com/photo-1583160247711-2191776b4b91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2071&q=80" ratio="16:9" isDecorative />
    </Example>
  );
}

export default ImageStyle16x9;