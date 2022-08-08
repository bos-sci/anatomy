import { render, screen } from "@testing-library/react";
import Link from "../Link";

describe("Link", () => {
  it("Does not render when it's missing both 'to' and 'href' props", () => {});
  it("Renders default link", () => {
    render(<Link href="#">Plain Link!</Link>);
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveTextContent("Plain Link!");
  });

  it("Renders the given variant when prop is supplied", () => {
    const { rerender } = render(
      <Link variant="ghost" href="#">
        Variant Link!
      </Link>
    );
    expect(screen.getByRole("link")).toBeInTheDocument();
    expect(screen.getByRole("link")).toHaveClass("ads-link-ghost");

    rerender(
      <Link variant="subtle" href="#">
        Variant Link!
      </Link>
    );
    expect(screen.getByRole("link")).toHaveClass("ads-link-subtle");
  });
});