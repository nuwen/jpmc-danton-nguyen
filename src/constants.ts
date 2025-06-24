import type { AssetClass, ColorStates } from "./types";

export const assetColorMapping: Record<AssetClass, ColorStates>  = {
  commodities: {
    default: "bg-white",
  },
  equities: {
    default: "bg-blue-200",
  },
  credit: {
    default: "bg-green-200",
  },
};

export const PRICE_POSITIVE_COLOR = "text-blue-600";
export const PRICE_NEGATIVE_COLOR = "text-red-600";
