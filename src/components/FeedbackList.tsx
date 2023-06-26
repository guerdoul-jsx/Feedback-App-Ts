import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { FeedbackProps } from "../utils/types";
import FeedbackItem from "./FeedbackItem";
import Loading from "./shared/Loading";
import {
  selectIsLoading,
  selectFeedbacks,
} from "../store/Feedbacks/feedback.selector";

const FeedBackList = () => {
  const feedBacks: FeedbackProps[] = useSelector(selectFeedbacks);
  const isLoading: boolean = useSelector(selectIsLoading);

  if (!isLoading && (!feedBacks || feedBacks.length === 0)) {
    return <h1 className="nofeedback">No Feedback Yet</h1>;
  } else {
    return isLoading ? (
      <Loading />
    ) : (
      <div className="feedback-list">
        <AnimatePresence>
          {feedBacks.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0.5 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <FeedbackItem feedback={item} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    );
  }
};

FeedBackList.propTypes = {
  feedback: PropTypes.array,
};

export default FeedBackList;
