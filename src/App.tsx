import { useEffect, useState } from "react";
import "./App.css";
import { Table } from "./components/Table";
import { useMockData } from "./hooks";
import type { Asset, HeaderItem } from "./types";
import { sortByAssetClass, sortByPrice, sortByTicker } from "./utils";

function App() {
  const { data, loading, error } = useMockData();
  const [rows, setRows] = useState<Asset[]>([]);
  const [currentSortColumn, setCurrentSortColumn] = useState("assetClass");

  useEffect(() => {
    if (data) {
      setRows(data);
    }
  }, [data]);

  const headers: HeaderItem[] = [
    {
      label: "Asset Class",
      value: "assetClass",
    },
    {
      label: "Price",
      value: "price",
    },
    {
      label: "Ticker",
      value: "ticker",
    },
  ];

  useEffect(() => {
    if (currentSortColumn === "price") {
      setRows((rows) => [...rows].sort(sortByPrice));
      return;
    }

    if (currentSortColumn === "assetClass") {
      setRows((rows) => [...rows].sort(sortByAssetClass));
      return;
    }

    if (currentSortColumn === "ticker") {
      setRows((rows) => [...rows].sort(sortByTicker));
      return;
    }
  }, [currentSortColumn]);

  if (error) {
    return <div>error!</div>;
  }

  const handleSorting = (column: string) => {
    setCurrentSortColumn(column);
  };

  return (
    <>
      {!data && loading && <div> loading </div>}
      {data && !loading && (
        <Table data={rows} headers={headers} sortColumn={handleSorting} />
      )}
    </>
  );
}

export default App;
