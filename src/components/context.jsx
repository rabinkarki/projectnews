import React, { useContext, useReducer, useEffect } from "react";
import App from "../App";
import { createContext } from "react";

import reducer from "./reducer";
const context = createContext();
let api = "https://hn.algolia.com/api/v1/search?";
const iniitialState = {
  isloading: true,
  query: "",
  nbpages: 0,
  page: 0,
  hits: [],
};
const AppProvider = () => {
  const [state, dispatch] = useReducer(reducer, iniitialState);

  const fetchData = async (url) => {
    dispatch({ type: "Set_load" });
    try {
      const res = await fetch(url);
      const data = await res.json();
      dispatch({
        type: "disp_stories",
        payload: {
          hits: data.hits,
          // nbpages:data.nbpages,
        },
      });
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  };
  function Removepost(id) {
    dispatch({ type: "Remove_post", payload: id });
  }
  function Searchquery(elem_quer) {
    dispatch({ type: "search_que", payload: elem_quer });
  }
  useEffect(() => {
    fetchData(`${api}query=${state.query}&page=${state.page} `);
  }, [state.query]);

  return (
    <context.Provider value={{ ...state, Removepost, Searchquery }}>
      <App />
    </context.Provider>
  );
};
function useGlobalContext() {
  return useContext(context);
}

export { context, AppProvider, useGlobalContext };
