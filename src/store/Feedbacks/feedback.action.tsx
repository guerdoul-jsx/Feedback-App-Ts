import { feedBackInstance } from "../../utils/axiosInstance";
import { Dispatch } from 'redux'
import { FEEDBACK_TYPES } from "./feedback.types";
import toast from 'react-hot-toast';
import { ActionFeedback, FeedbackProps } from "../../utils/types";
import { AnyAction } from "redux";

type feedBacktoAddProps ={
    text: string;
    rating: number;
}

// * Feedbacks Success Action 
const getFeedbackSuccessAction = (feedback : FeedbackProps[]): ActionFeedback => ({
    type: FEEDBACK_TYPES.GET_FEEDBACKS_SUCCESS,
    payload: feedback,
});


// * Feedbacks Faild Action 
const getFeedbackFailedAction = (alertError : string | null): ActionFeedback => ({
    type: FEEDBACK_TYPES.GET_FEEDBACKS_FAILED,
    payload: alertError,
});


// * Feedbacks Rating Action 
const feedbackRatingAction = (rating : number) : ActionFeedback => ({
    type: FEEDBACK_TYPES.SET_FEEDBACK_RATING,
    payload: rating
})


// * Set error Action
const errorAction = (error : string | null ) : ActionFeedback => ({
    type: FEEDBACK_TYPES.SET_FEEDBACK_ERROR,
    payload : error
})


// * Rest Feedbacks Action
export const RestFeedbacksAction = () => (
    {
        type: FEEDBACK_TYPES.REST_FEEDBACKS
    }
)


// * SET EDITED FEEDBACK ACTION
export const editedFeedbackAction = (feedbackToEdit : FeedbackProps) => ({
    type: FEEDBACK_TYPES.SET_EDIT_FEEDBACK,
    payload: feedbackToEdit
})


// * Add feedback Action
const addFeedbackAction = (feedback : feedBacktoAddProps) => ({
    type: FEEDBACK_TYPES.SET_FEEDBACK,
    payload: feedback
})  

// * Update feedback Action
const updateFeedBackAction = (id : number , updtItem : feedBacktoAddProps) => ({
    type: FEEDBACK_TYPES.UPDATE_FEEDBACK,
    payload : {
        id: id,
        data : updtItem
    }
})


// * Delete Feedback Action
const deleteFeedBackAction = (id : number) => ({
    type: FEEDBACK_TYPES.DELETE_FEEDBACK,
    payload: id
}) 


// ! function to fetch feedback
export const getFeedbacks = async (dispatch : Dispatch) : Promise<AnyAction> => {
    try {
        const response = await feedBackInstance.get('/Feedback');
        if(response.status === 200){
            const feedbackData : FeedbackProps[] = response.data;
            dispatch(getFeedbackSuccessAction(feedbackData));
            return {
                type : FEEDBACK_TYPES.GET_FEEDBACKS_SUCCESS
            }
        }else{
            return getFeedbackFailedAction('could not found the respones');
        }
        
    } catch (error) {
        dispatch(getFeedbackFailedAction('Error comming from fetching the feedbacks'));
        return {
            type : FEEDBACK_TYPES.GET_FEEDBACKS_FAILED,
        }
    }
}


// ! setRating Function to dispatch an action feedbackRatingAction
export const setRating = (dispatch : Dispatch , rating : number) => {
    try {
        dispatch(feedbackRatingAction(rating));
    } catch (error) {
        dispatch(errorAction('Error comming from ADDING NUMBER OF RATING FEEDBACKS'));
        toast.error('Error comming from ADDING NUMBER OF RATING FEEDBACKS');
    }
}


// ! Rest Feedbacks Function to dispatch an action RestFeedbacksAction
export const restFeedbacks = (dispatch: Dispatch) => {
    try {
        dispatch(RestFeedbacksAction())
    } catch (error) {
        dispatch(errorAction('Error comming from Rest The feedbacks'));
        toast.error('Error comming from Rest The feedbacks');
    }
}


// ! setAlertEroor Function to dispatch an action setError
export const setAlertError =  (dispatch : Dispatch, error : string | null)  => dispatch(errorAction(error));


// ! addFeedBack Function to dispatch an action addFeedbackAction
export const addFeedBack = async (dispatch : Dispatch , feedback : feedBacktoAddProps)  => {
    try {
        // ? using POST METHOD TO UPDATE FEEDBACK
        const response = await feedBackInstance.post('/Feedback' , {
            ...feedback
        })
        if(response.status === 201){
            dispatch(addFeedbackAction(feedback));
            toast.success('Added successfully')
        }

    } catch (error) {
        dispatch(errorAction('unhandled error coming from adding the feedback'));
        toast.error('unhandled error coming from adding the feedback')

    }
}

// ! UpdateFeedBack Function to dispatch an action updateFeedBackAction
export const updateFeedBack = async (dispatch : Dispatch , id : number, updtItem: feedBacktoAddProps) => {
    
    try {
        const response = await feedBackInstance.put(`/Feedback/${id}` , updtItem);

        console.log(response)

        if(response.status === 200){
            dispatch(updateFeedBackAction(id , updtItem));
            toast.success('Updated successfully')
        }
    } catch (error) {
        dispatch(errorAction('unhandled error coming from updating the feedback'));
        toast.error('unhandled error coming from updating the feedback')
    }
}

// ! Delete FeedBack Function to dispatch an action deleteFeedBackAction
export const deleteFeedBack = async (dispatch : Dispatch , id : number) => {
    try {
        const response =  await feedBackInstance.delete(`/Feedback/${id}`);
        if(response.status === 200){
            dispatch(deleteFeedBackAction(id));

        }
    } catch (error) {
        dispatch(errorAction('unhandled error coming from Deleting the feedback'));
        toast.error('unhandled error coming from Deleting the feedback')
    }
}