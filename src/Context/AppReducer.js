import ActionType from "./globalActionType";

export const AppReducer = (state, action) => {
  switch (action.type) {
    case ActionType.LOGIN:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
      };
    case ActionType.LOGOUT:
      localStorage.clear();
      break;
    case ActionType.GET_ITEMS:
      return {
        ...state,
        items: action.payload,
      };
    case ActionType.GET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case ActionType.SEARCH_ITEM:
      return {
        ...state,
        items: action.payload,
      };
    case ActionType.SEARCH_CATEGORY:
      return {
        ...state,
        categories: action.payload,
      };
    case ActionType.POST_ITEM:
      return {
        ...state,
      };
    case ActionType.POST_CATEGORY:
      return {
        ...state,
      };
    case ActionType.PUT_ITEM:
      return {
        ...state,
      };
    case ActionType.PUT_CATEGORY:
      return {
        ...state,
      };
    default:
      return state;
  }
};
