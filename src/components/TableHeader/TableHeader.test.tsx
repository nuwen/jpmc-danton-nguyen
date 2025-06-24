import { render, screen } from "@testing-library/react";
import TableHeader from "./TableHeader";
import type { HeaderItem } from "../../types";

describe("TableHeader", () => {
  const mockHeaderItem: HeaderItem = {
    label: "Asset Class",
    value: "assetClass",
  };

  const mockOnClick = () => {};

  it("renders the correct label", () => {
    render(<TableHeader item={mockHeaderItem} onClick={mockOnClick} />);
    expect(screen.getByTestId("tableheader-assetClass")).toHaveTextContent(
      "Asset Class"
    );
  });

  it("applies correct test id based on value", () => {
    render(<TableHeader item={mockHeaderItem} onClick={mockOnClick} />);
    const thElement = screen.getByTestId("tableheader-assetClass");
    expect(thElement.tagName).toBe("TH");
    expect(thElement).toBeInTheDocument();
  });
});
