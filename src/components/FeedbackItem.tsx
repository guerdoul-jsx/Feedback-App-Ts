import Card from "./shared/Card"
import {FaTimes , FaEdit} from 'react-icons/fa'
import { FeedbackProps } from "../utils/types"
import { useDispatch } from 'react-redux'
import { deleteFeedBack, editedFeedbackAction } from "../store/Feedbacks/feedback.action"
import { toast } from "react-hot-toast"

type FeedbackItemProps = {
  feedback : FeedbackProps
}

const  FeedbackItem = ({ feedback } : FeedbackItemProps ) => {

    const dispatch = useDispatch();

    const handleDelete = (id : number) => {
        if(window.confirm('are you sure to delete this feedback')){
            deleteFeedBack(dispatch, id)
            toast.error('Feedback Deleted');
        }
    }

    const hanldeSetFeedback = (feedback : FeedbackProps) => {
        dispatch(editedFeedbackAction(feedback));
    }
    return (
        <Card>
            <div className="num-display">{feedback.rating}</div>
                <button className="close" onClick={() => handleDelete(feedback.id) }>
                    <FaTimes color = "red" />
                </button>
                <button className="edit" onClick={() => hanldeSetFeedback(feedback) }>
                    <FaEdit color = "#d57f00" />
                </button>
            <div className="text-display">
                {feedback.text}
            </div>
        </Card>
    )
}


export default FeedbackItem

