import "./App.css";
import { Table } from "./components/Table";
import { useMockData } from "./hooks";

function App() {
  const { data, loading, error } = useMockData();

  const headers = ["Asset Class", "Price", "Ticker"];
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
