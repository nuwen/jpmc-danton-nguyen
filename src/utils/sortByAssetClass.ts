import type { Asset } from "../types";

const priority = {
  Commodities: 0,
  Equities: 1,
  Credit: 2,
};

const sortByAssetClass = (a: Asset, b: Asset) => {
  return priority[a.assetClass] - priority[b.assetClass];
};

export default sortByAssetClass;
