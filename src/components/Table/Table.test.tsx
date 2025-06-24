import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Table from "./Table";
import type { Asset, HeaderItem } from "../../types";

const mockData: Asset[] = [
  { assetClass: "Credit", price: 3150.67, ticker: "ALPHA" },
  { assetClass: "Equities", price: 3791.37, ticker: "BETA" },
  { assetClass: "Commodities", price: -3791.37, ticker: "CHARLIE" },
];

const mockSortColumn = () => {};

const headers: HeaderItem[] = [
  {
    label: "Asset Class",
    value: "assetClass",
  },
  {
    label: "Price",
    value: "price",
  },
  {
    label: "Ticker",
    value: "ticker",
  },
];

describe("Table Component", () => {
  it("renders table headers", () => {
    render(<Table sortColumn={mockSortColumn} data={mockData} headers={headers} />);
    headers.forEach((header) => {
      expect(screen.getByText(header.label)).toBeInTheDocument();
    });
  });

  it("renders correct number of rows", () => {
    render(<Table sortColumn={mockSortColumn} data={mockData} headers={headers} />);
    mockData.forEach(({ ticker }) => {
      expect(screen.getByTestId(`row-${ticker}`)).toBeInTheDocument();
    });
  });

  it("renders each asset correctly", () => {
    render(<Table sortColumn={mockSortColumn} data={mockData} headers={headers} />);
    mockData.forEach(({ ticker, assetClass, price }) => {
      expect(screen.getByTestId(`assetClass-${ticker}`)).toHaveTextContent(
        assetClass
      );
      expect(screen.getByTestId(`price-${ticker}`)).toHaveTextContent(
        price.toString()
      );
      expect(screen.getByTestId(`ticker-${ticker}`)).toHaveTextContent(ticker);
    });
  });

  it("renders Commodities with White background", () => {
    render(<Table sortColumn={mockSortColumn} data={mockData} headers={headers} />);
    const tableRow = screen.getByTestId("row-CHARLIE");
    expect(tableRow).toHaveClass("bg-white");
  });

  it("renders Equities with Blue background", () => {
    render(<Table sortColumn={mockSortColumn} data={mockData} headers={headers} />);
    const tableRow = screen.getByTestId("row-BETA");
    expect(tableRow).toHaveClass("bg-blue-200");
  });

  it("renders Credit with Green background", () => {
    render(<Table sortColumn={mockSortColumn} data={mockData} headers={headers} />);
    const tableRow = screen.getByTestId("row-ALPHA");
    expect(tableRow).toHaveClass("bg-green-200");
  });

  it("renders negative prices with red text", () => {
    render(<Table sortColumn={mockSortColumn} data={mockData} headers={headers} />);
    const negativePriceCell = screen.getByTestId("price-CHARLIE");
    expect(negativePriceCell).toHaveClass("text-red-600");
  });

  it("renders positive prices with blue text", () => {
    render(<Table sortColumn={mockSortColumn} data={mockData} headers={headers} />);
    const positivePriceCell = screen.getByTestId("price-ALPHA");
    expect(positivePriceCell).toHaveClass("text-blue-600");
  });
});
