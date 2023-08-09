import React from "react";
import { useGlobalContext } from "./context";

const Header = () => {
  const { query, Searchquery } = useGlobalContext();
  return (
    <>
      <h1>Tech News On The go</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input
            type="text"
            placeholder="Search here"
            value={query}
            onChange={(e) => Searchquery(e.target.value)}
          />
        </div>
      </form>
    </>
  );
};
export default Header;
