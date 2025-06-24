
export type Asset = {
  ticker: string;
  price: number;
  assetClass: 'Commodities' | 'Equities' | 'Credit';
};

export type AssetClass = string;

export type ColorStates = {
  default: string;
};

export type HeaderItem = {
  label: string;
  value: string;
}