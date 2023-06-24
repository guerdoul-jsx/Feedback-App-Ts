import { Reducer } from "redux";
import { FEEDBACK_TYPES } from "./feedback.types";
import { FeedbackStateProps } from "../../utils/types";
import { ActionFeedback } from "../../utils/types";

export const FEEDBACK_INTITIAL_STATE: FeedbackStateProps = {
  feedBacks: [],
  isLoading: true,
  alertError: null,
  rating: 10,
  editale: false,
  feedback: null,
};

export const FeedbackReducer: Reducer<FeedbackStateProps, ActionFeedback> = (
  state = FEEDBACK_INTITIAL_STATE,
  action: ActionFeedback
) => {
  switch (action.type) {
    case FEEDBACK_TYPES.GET_FEEDBACKS_START:
      return {
        ...state,
      };
    case FEEDBACK_TYPES.GET_FEEDBACKS_SUCCESS:
      return {
        ...state,
        feedBacks: action.payload,
        isLoading: false,
      };
    case FEEDBACK_TYPES.GET_FEEDBACKS_FAILED:
      return {
        ...state,
        alertError: action.payload,
      };
    case FEEDBACK_TYPES.SET_FEEDBACK:
      return {
        ...state,
        feedBacks: [...state.feedBacks, action.payload],
      };
    case FEEDBACK_TYPES.SET_FEEDBACK_RATING:
      return {
        ...state,
        rating: action.payload,
      };

    case FEEDBACK_TYPES.SET_FEEDBACK_ERROR:
      return {
        ...state,
        alertError: action.payload,
      };

    case FEEDBACK_TYPES.SET_EDIT_FEEDBACK:
      return {
        ...state,
        editale: true,
        feedback: action.payload,
      };
    case FEEDBACK_TYPES.SET_EDITABLE:
      return {
        ...state,
        editale: true,
      };
    case FEEDBACK_TYPES.REST_FEEDBACKS:
      return {
        ...state,
        editale: false,
        feedback: null,
      };
    case FEEDBACK_TYPES.UPDATE_FEEDBACK:
      return {
        ...state,
        feedBacks: state.feedBacks.map((item) =>
          item.id === action.payload.id
            ? { ...item, ...action.payload.data }
            : item
        ),
        editale: false,
        feedback: null,
      };
    case FEEDBACK_TYPES.DELETE_FEEDBACK:
      return {
        ...state,
        feedBacks: state.feedBacks.filter((itm) => itm.id !== action.payload),
        editale: false,
        feedback: null,
      };

    default:
      return state;
  }
};
