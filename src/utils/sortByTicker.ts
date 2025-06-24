import type { Asset } from "../types";

const sortByTicker = (a: Asset, b: Asset) => {
  const tickerA = a.ticker.toUpperCase();
  const tickerB = b.ticker.toUpperCase();
  if (tickerA < tickerB) {
    return -1;
  }
  if (tickerA > tickerB) {
    return 1;
  }

  return 0;
}

export default sortByTicker;