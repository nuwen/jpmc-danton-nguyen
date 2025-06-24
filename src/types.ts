export type Asset = {
  ticker: string;
  price: number;
  assetClass: string;
};

export type AssetClass = string;

export type ColorStates = {
  default: string;
};

export type HeaderItem = {
  label: string;
  value: string;
}