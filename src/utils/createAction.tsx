import { FEEDBACK_TYPES } from "../store/Feedbacks/feedback.types"
import { ActionFeedback } from "./types"


export const createAction = (type : FEEDBACK_TYPES , payload: ActionFeedback) => {
    return {
        type,
        payload
    }
}