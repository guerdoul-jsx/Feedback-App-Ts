import axios from 'axios'

export const feedBackInstance = axios.create({
    baseURL: process.env.REACT_APP_FEEDBACK_API,

})