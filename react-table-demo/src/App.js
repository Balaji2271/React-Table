import React from "react";
import "./App.css";
import { BasicTable } from "./components/BasicTable";
import { FilteringTable } from "./components/FiltertingTable";
import { GlobalFilter } from "./components/GlobalFilter";
import { PaginationTable } from "./components/PaginationTable";

function App() {
  return (
    <div className="App">
      <BasicTable />
      {/* <FilteringTable /> */}
      {/* <GlobalFilter /> */}
      {/* <PaginationTable /> */}
    </div>
  );
}

export default App;
