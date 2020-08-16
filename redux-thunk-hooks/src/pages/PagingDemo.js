import React from "react";
import { PagingDemo } from "../hooks/";

export default () => {
  const topPage = 1;
  const lastPage = 4;
  const [currentPage, Top, Next, Back, Last, Reset] = PagingDemo(
    topPage,
    lastPage
  );

  return (
    <React.Fragment>
      <h1># Paging Demo</h1>
      <React.Fragment>
        <div>Current Page: {currentPage}</div>
        <button onClick={Top}>Top</button>
        <button onClick={Next}>Next</button>
        <button onClick={Back}>Back</button>
        <button onClick={Last}>Last</button>
        <button onClick={Reset}>Reset</button>
      </React.Fragment>
      <hr />
    </React.Fragment>
  );
}
