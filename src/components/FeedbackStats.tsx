import { useSelector} from 'react-redux'
import { FeedbackProps } from '../utils/types';
import { selectFeedbacks } from '../store/Feedbacks/feedback.selector'

const FeedbackStats = () => {

    const feedBacks : FeedbackProps[]  = useSelector(selectFeedbacks)

    let average : number = feedBacks.reduce((acc,curr) => {
        return acc + curr.rating
    },0) / feedBacks.length;

    average = +average.toFixed(1).replace(/[,.]0$/,'');
    
    return (
        <div className="feedback-stats">
            <h4>{feedBacks.length} Reviews</h4>
            <h4>Average Rating: {isNaN(average) ?  0 : average}</h4>
        </div>
    )

}

export default FeedbackStats



