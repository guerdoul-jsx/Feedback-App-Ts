import { FEEDBACK_TYPES } from "../store/Feedbacks/feedback.types";

export interface FeedbackProps {
    id: number;
    rating: number;
    text: string;
};
  
export interface FeedbackStateProps {
    feedBacks: FeedbackProps[];
    isLoading: boolean;
    alertError: string | null;
    rating: number;
    editale: boolean;
    feedback: FeedbackProps | null;
};


export interface GetFeedBackStart {
    type : FEEDBACK_TYPES.GET_FEEDBACKS_START
}

export interface GetFeedBackSuccess  {
    type : FEEDBACK_TYPES.GET_FEEDBACKS_SUCCESS,
    payload: FeedbackProps[],
}


export interface GetFeedBackFailed {
    type : FEEDBACK_TYPES.GET_FEEDBACKS_FAILED,
    payload : string | null
}

export interface SetFeedbackRating {
    type : FEEDBACK_TYPES.SET_FEEDBACK_RATING,
    payload: number
}

export interface RestFeedback {
    type : FEEDBACK_TYPES.REST_FEEDBACKS
} 


export interface SetFeedback {
    type: FEEDBACK_TYPES.SET_FEEDBACK,
    payload: FeedbackProps
}


export interface DeleteFeedback {
    type : FEEDBACK_TYPES.DELETE_FEEDBACK,
    payload: number
}


export interface SetEditFeedback {
    type : FEEDBACK_TYPES.SET_EDIT_FEEDBACK,
    payload: FeedbackProps
}

export interface SetEditable  {
    type : FEEDBACK_TYPES.SET_EDITABLE,
}

export interface UpdateFeedback {
    type : FEEDBACK_TYPES.UPDATE_FEEDBACK,
    payload: {
        id : number,
        data: FeedbackProps
    }
}

export interface SetEroor {
    type : FEEDBACK_TYPES.SET_FEEDBACK_ERROR,
    payload: string | null
}

export type ActionFeedback = GetFeedBackStart | GetFeedBackSuccess | GetFeedBackFailed | SetFeedbackRating | RestFeedback | SetFeedback | DeleteFeedback
 | SetEditFeedback | SetEditable | UpdateFeedback | SetEroor

