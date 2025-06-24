import type { Asset } from "../types";
import sortByAssetClass from "./sortByAssetClass";

describe("sortByAssetClass", () => {
  const mockData: Asset[] = [
    {
      ticker: "ALPHA",
      price: 3150.67,
      assetClass: "Credit",
    },
    {
      ticker: "BETA",
      price: 3791.37,
      assetClass: "Equities",
    },
    {
      ticker: "CHARLIE",
      price: -3791.37,
      assetClass: "Commodities",
    },
  ];
  const assetA: Asset = mockData[2];
  const assetB: Asset = mockData[1];
  const assetC: Asset = mockData[0];

  it("should prioritize Commodities over Equities", () => {
    expect(sortByAssetClass(assetA, assetB)).toBeLessThan(0);
  });

  it("should prioritize Commodities over Credit", () => {
    expect(sortByAssetClass(assetA, assetC)).toBeLessThan(0);
  });

  it("should prioritize Equities over Credit", () => {
    expect(sortByAssetClass(assetB, assetC)).toBeLessThan(0);
  });

  it("should sort a mixed array correctly", () => {
    const unsorted: Asset[] = [assetC, assetA, assetB];
    const sorted = [...unsorted].sort(sortByAssetClass);
    expect(sorted.map((a) => a.assetClass)).toEqual([
      "Commodities",
      "Equities",
      "Credit",
    ]);
  });
});
