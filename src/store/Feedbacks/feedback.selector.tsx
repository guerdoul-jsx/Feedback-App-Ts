import { rootState } from "../store"


// ? feedbacks selector
export const selectFeedbacks = (state : rootState) => state.feedBacks

// ? Loding selector
export const selectIsLoading = (state : rootState) => state.isLoading

// ? Rating selector 
export const selectRating = (state : rootState) => state.rating


// ? State Selector 
export const selectState = (state : rootState) => state

