import {
  SET_LANGUAGE,
  TOGGLE_AUTOPLAY,
  TOGGLE_ORDER_CONTROLS,
  SET_THEME,
  SET_HOMEPAGE_CONTINUE_COUNT,
} from "../actions";

export default function Options(
  state = {
    language: "enUS",
    autoplay: false,
    orderControls: true,
    theme: "dark",
    homepageContinueCount: 4,
  },
  action
) {
  switch (action.type) {
    case SET_LANGUAGE:
      return {
        ...state,
        language: action.payload,
      };
    case TOGGLE_AUTOPLAY:
      return {
        ...state,
        autoplay: !state.autoplay,
      };
    case TOGGLE_ORDER_CONTROLS:
      return {
        ...state,
        orderControls: !state.orderControls,
      };
    case SET_THEME:
      return {
        ...state,
        theme: action.payload,
      };
    case SET_HOMEPAGE_CONTINUE_COUNT:
      return {
        ...state,
        homepageContinueCount: Number(action.payload),
      };
    default:
      return state;
  }
}
