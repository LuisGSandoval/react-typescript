import { initialState } from "./InitialState";
import { ActionType } from "./ActionTypes";

export const reducer = (state: typeof initialState, action: ActionType) => {
  switch (action.type) {
    case "custom":
      return {
        ...state,
        contador: state.contador + action.payload,
      };

    default:
      return state;
  }
};
