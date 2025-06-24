import { render, screen } from "@testing-library/react";
import TableRow from "./TableRow";
import type { Asset } from "../../types";

const mockAssetPositive: Asset = {
  assetClass: "Credit",
  price: 100,
  ticker: "POS",
};

const mockAssetNegative: Asset = {
  assetClass: "Equities",
  price: -100,
  ticker: "NEG",
};

const mockAssetZero: Asset = {
  assetClass: "Commodities",
  price: 0,
  ticker: "ZERO",
};

describe("TableRow", () => {
  it("renders with correct asset class and ticker", () => {
    render(<TableRow asset={mockAssetPositive} />);
    expect(screen.getByTestId("assetClass-POS")).toHaveTextContent("Credit");
    expect(screen.getByTestId("ticker-POS")).toHaveTextContent("POS");
  });

  it("applies blue color class for positive price", () => {
    render(<TableRow asset={mockAssetPositive} />);
    expect(screen.getByTestId("price-POS")).toHaveClass("text-blue-600");
  });

  it("applies red color class for negative price", () => {
    render(<TableRow asset={mockAssetNegative} />);
    expect(screen.getByTestId("price-NEG")).toHaveClass("text-red-600");
  });

  it("applies no color class for zero price", () => {
    render(<TableRow asset={mockAssetZero} />);
    expect(screen.getByTestId("price-ZERO")).not.toHaveClass("text-blue-600");
    expect(screen.getByTestId("price-ZERO")).not.toHaveClass("text-red-600");
  });
});
