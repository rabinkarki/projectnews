import React from "react";
import { useGlobalContext } from "./context";

const pagination = () => {
  const { page, nbPages, getprevPage, getnextPage } = useGlobalContext();
  return (
    <>
    <div className="page-btn">
      <button onClick={() => getprevPage()}>prev</button>
      <p>
        {page + 1} of {nbPages}
      </p>
      <button onClick={() => getnextPage()}>Next</button>
      </div>
    </>
  );
};
export default pagination;
