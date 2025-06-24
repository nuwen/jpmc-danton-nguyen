import type { Asset, HeaderItem } from "../../types";
import { TableHeader } from "../TableHeader";
import { TableRow } from "../TableRow";

interface ITableProps {
  data: Asset[];
  headers: HeaderItem[];
  sortColumn: (column: string) => void;
}

const Table = ({ data, headers, sortColumn }: ITableProps) => {
  return (
    <div className="border-2 border-stone-400 rounded-sm border-collapse">
      <table className="table-auto w-full">
        <thead className="border-b-2 border-stone-400">
          <tr>
            {headers.map((item) => (
              <TableHeader item={item} onClick={() => sortColumn(item.value)} />
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((asset) => (
            <TableRow asset={asset} key={asset.ticker} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
