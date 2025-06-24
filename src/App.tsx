import "./App.css";
import { Table } from "./components/Table";
import { useMockData } from "./hooks";
import type { HeaderItem } from "./types";

function App() {
  const { data, loading, error } = useMockData();

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

  if (error) {
    return <div>error!</div>;
  };

  return (
    <>
      {!data && loading && <div> loading </div>}
      {data && !loading && <Table data={data} headers={headers} />}
    </>
  );
}

export default App;
