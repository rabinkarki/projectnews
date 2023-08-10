import React from "react";
import { useGlobalContext } from "./context";

const pagination = () => {
  const { page, nbPages, getprevPage, getnextPage } = useGlobalContext();
  return (
    <>
      <button onClick={() => getprevPage()}>prev</button>
      <p>
        {page + 1} to {nbPages}
      </p>
      <button onClick={() => getnextPage()}>Next</button>
    </>
  );
};
export default pagination;
