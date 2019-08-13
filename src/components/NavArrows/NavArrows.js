import React, { useState } from "react";
import { withRouter } from "react-router-dom";

const NavArrows = (props) => {
  let currentPage = ["home", "bio", "calendar", "av", "rep", "contact"]
  let [page, setPage] = useState(0);

  const handleRight = () => {
    if (page < 5) {
      const update = async () => {
        await setPage(page +1);
        console.log("State here: ", page); };
      console.log("updated to: ", page);
      update().then(props.history.push("/" + currentPage[page])).then(console.log("after history: ", page))
    } else if (page === 5) {
      setPage(page = 0);
    }
  }

  const handleLeft = () => {
    if (page >= 1) {
      setPage(page -1);
      props.history.push("/" + currentPage[page]);
    } else if ( page === 0) {
      setPage(page = 5)
    }
  }

  return (
    <div>
      <button onClick={() => handleLeft()}>LeftNav</button>
      <button onClick={() => handleRight()}>RightNav</button>
      <h6>State: {page}</h6>
    </div>
  );
};

export default withRouter(NavArrows);
