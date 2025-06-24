import type { HeaderItem } from "../../types";

interface ITableHeaderProps {
  item: HeaderItem;
  onClick: () => void;
}

const TableHeader = ({ item, onClick }: ITableHeaderProps) => {
  const { label, value } = item;
  return (
    <th className="p-2 cursor-pointer" data-testid={`tableheader-${value}`} onClick={() => onClick()}>
      {label}
    </th>
  );
};

export default TableHeader;
