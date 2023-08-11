import React from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Set_Load":
      return {
        ...state,
        isloading: true,
      };
    case "disp_stories":
      return {
        ...state,
        isloading: false,
        hits: action.payload.hits,
        nbPages: action.payload.nbPages,
      };
    case "Remove_post":
      return {
        ...state,
        hits: state.hits.filter(
          (curItem) => curItem.objectID !== action.payload
        ),
      };
    case "search_que":
      return {
        ...state,
        query: action.payload,
      };
    case "prev_pag":
      let prev = state.page - 1;
      if (prev <= 0) {
        prev = 0;
      }
      return {
        ...state,
        page: prev,
      };
    case "Next_pag":
      return {
        ...state,
        page: state.page + 1,
      };
  }

  return state;
};
export default reducer;
