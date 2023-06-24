import { createStore , applyMiddleware , compose} from 'redux';
import thunk from 'redux-thunk';

import { FeedbackReducer } from './Feedbacks/feedback.reducer';

export type rootState = ReturnType<typeof FeedbackReducer>

const composEnhanced = (process.env.NODE_ENV !== 'production' && window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnhancers = composEnhanced(applyMiddleware(thunk));


export const store = createStore( FeedbackReducer , composedEnhancers);