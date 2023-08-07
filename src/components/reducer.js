import React from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "Set_Load":
    return{
       
        isloading:true,
    }
    case "disp_stories":
      return {
        ...state,
        isloading:false,
        hits: action.playload.hits,
      };
  }
  return state;
};
export default reducer;
