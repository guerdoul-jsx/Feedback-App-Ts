import { useDispatch , useSelector} from 'react-redux'
import { ChangeEvent } from 'react';
import {  setRating } from '../store/Feedbacks/feedback.action';
import { selectRating } from '../store/Feedbacks/feedback.selector';
import { setAlertError } from '../store/Feedbacks/feedback.action';

const RatingSelect = () => {

  const ratingNumber = useSelector(selectRating);

  const dispatch = useDispatch();

  const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
    if(event.target.checked){
      try {
        const ratingValue = +event.target.value;
        setRating(dispatch, ratingValue);
      } catch (error) {
        setAlertError(dispatch, `unhandled error coming from seleceting Rating ${error}`)
      }
    }
  }

  return (
    <ul className="rating">
      <li>
        <input
          type="radio"
          name="rating"
          id="num1"
          value={1}
          onChange={handleChange}
          checked={ratingNumber === 1}
        />
        <label htmlFor="num1">1</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num2"
          value={2}
          onChange={handleChange}
          checked={ratingNumber === 2}
        />
        <label htmlFor="num2">2</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num3"
          value={3}
          onChange={handleChange}
          checked={ratingNumber === 3}
        />
        <label htmlFor="num3">3</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num4"
          value={4}
          onChange={handleChange}
          checked={ratingNumber === 4}
        />
        <label htmlFor="num4">4</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num5"
          value={5}
          onChange={handleChange}
          checked={ratingNumber === 5}
        />
        <label htmlFor="num5">5</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num6"
          value={6}
          onChange={handleChange}
          checked={ratingNumber === 6}
        />
        <label htmlFor="num6">6</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num7"
          value={7}
          onChange={handleChange}
          checked={ratingNumber === 7}
        />
        <label htmlFor="num7">7</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num8"
          value={8}
          onChange={handleChange}
          checked={ratingNumber === 8}
        />
        <label htmlFor="num8">8</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num9"
          value={9}
          onChange={handleChange}
          checked={ratingNumber === 9}
        />
        <label htmlFor="num9">9</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num10"
          value={10}
          onChange={handleChange}
          checked={ratingNumber === 10}
        />
        <label htmlFor="num10">10</label>
      </li>
    </ul>
  );
};

RatingSelect.propTypes = {};

export default RatingSelect;
