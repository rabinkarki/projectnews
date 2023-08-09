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
  }

  return state;
};
export default reducer;
