import { assetColorMapping } from "../../constants";
import type { Asset, AssetClass } from "../../types";

interface ITableRowProps {
  asset: Asset;
}

const TableRow = ({ asset }: ITableRowProps) => {
  const { assetClass, price, ticker } = asset;
  const colors = assetColorMapping[assetClass.toLowerCase() as AssetClass];
  const getPriceColor = (price: number) => {
    if (price > 0) {
      return "text-blue-600";
    }
    if (price < 0) {
      return "text-red-600";
    }

    return "";
  };
  return (
    <tr
      data-testid={`row-${ticker}`}
      className={`first:border-t-0 border-t-2 ${colors.default}`}
    >
      <td
        data-testid={`assetClass-${ticker}`}
        className="border-r-2 p-2 border-stone-400"
      >
        {assetClass}
      </td>
      <td
        data-testid={`price-${ticker}`}
        className={
          "text-right border-r-2 p-2 border-stone-400 " + getPriceColor(price)
        }
      >
        {price}
      </td>
      <td data-testid={`ticker-${ticker}`} className="p-1 border-stone-400">
        {ticker}
      </td>
    </tr>
  );
};

export default TableRow;
