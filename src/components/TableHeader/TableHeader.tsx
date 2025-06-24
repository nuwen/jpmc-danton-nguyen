import type { HeaderItem } from "../../types";

interface ITableHeaderProps {
  item: HeaderItem;
}

const TableHeader = ({ item }: ITableHeaderProps) => {
  const { label, value } = item;
  return (
    <th className="p-2" data-testid={`tableheader-${value}`}>
      {label}
    </th>
  );
};

export default TableHeader;
