import Card from "./shared/Card"
import { useState , useEffect , ChangeEvent, FormEvent } from "react";
import Button from "./shared/Button";
import Input from "./shared/Input/Input";
import RatingSelect from "./RatingSelect";
import { useDispatch , useSelector } from 'react-redux'
import { addFeedBack, getFeedbacks, restFeedbacks , setRating , updateFeedBack , setAlertError} from "../store/Feedbacks/feedback.action";
import { Toaster } from 'react-hot-toast';
import { selectState } from "../store/Feedbacks/feedback.selector";


const FeedBackForm =() => {


    const dispatch = useDispatch();

    const {alertError , rating , editale , feedback} = useSelector(selectState);

    const [feedbackText, setFeedbackText] = useState('');
    const [btnDisabled, setbtnDisabled] = useState(true);


    useEffect(() => {
        const feedbacks = async () => {
            await getFeedbacks(dispatch);
        }
        feedbacks();
    }, [feedback , dispatch]);

    const checkLength = () => {
        if(feedbackText.trim().length < 10){
            return false;
        }else{
            setbtnDisabled(false);
            return true;
        }
    }

    useEffect(() => {
      if(alertError !== null){
        setTimeout(() => {
            setAlertError(dispatch, null)
          }, 3000);
      }
    }, [alertError , dispatch]);
    
    useEffect(() => {
        if(editale && feedback !== null){
            setFeedbackText(feedback.text);
            setRating(dispatch ,feedback.rating);
        }
    }, [editale, feedback , dispatch]);


    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        if(checkLength()){
            setbtnDisabled(false)
        }
    }, [rating]);
    


    const handleText = (e : ChangeEvent<HTMLInputElement>) => {
         if(feedbackText === ''){
            setbtnDisabled(true);
            setAlertError(dispatch, null);
        }else if(feedbackText !== '' && feedbackText.trim().length <= 10){
            setbtnDisabled(true);
            setAlertError(dispatch , 'The review must be at least 10 character');
        }else{
            setbtnDisabled(false);
            setAlertError(dispatch, null);
        }
        setFeedbackText(e.target.value);
    }

    const handleSubmit = (event : FormEvent<HTMLFormElement>) => { 
        event.preventDefault();
        if(checkLength()){
            const newFeedBack = {
                text : feedbackText,
                rating : rating
            }
            if(editale === true && feedback !== null){
                updateFeedBack(dispatch , feedback.id , newFeedBack)
            }else
            {
                addFeedBack(dispatch, newFeedBack);
            }
            setFeedbackText('');
            setbtnDisabled(true)
            restFeedbacks(dispatch)
        }
     }


    return (
        <Card>
            <Toaster />
            <form onSubmit={handleSubmit}>
                <h2>How Would you rate your service with us</h2>
                <RatingSelect  />
                <div className="input-group">
                    <Input inputType='text' className="input-feedback" placeholder="Write a review" value={feedbackText} onChange={handleText} onFocus={checkLength}/>
                    <Button className="btn" version={`${feedback !== null ? 'secondary' : 'primary'}`} type="submit" isDisabled = {btnDisabled}>{feedback !== null ? 'Update' : 'Send' }</Button>
                </div>
                {
                    (alertError && <div className="message">{alertError}</div>)
                }
            </form>
        </Card>
    )
}

FeedBackForm.propTypes = {};

export default FeedBackForm
