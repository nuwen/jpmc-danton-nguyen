import type { Asset } from "../types"

const sortByPrice = (a: Asset, b: Asset) => {
  return Number(b.price) - Number(a.price);
}

export default sortByPrice;