import { useState, useEffect } from "react";
import Description from "./Description/Description";
import OptionBtn from "./Options/Options";
import UpdateFeedback from "./Feedback/Feedback";
import NoFeedback from "./Feedback/Notification";

export default function App() {

  const KEY = 'feedback';
  const defaultFeedback = {
    good: 0,
    neutral: 0,
    bad: 0,
  }
  const [feedbackType, setFeedBack] = useState(() => {
    const savedFeedback = JSON.parse(localStorage.getItem(KEY));
    return savedFeedback ?? defaultFeedback;
  })


  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(feedbackType))
  }, [feedbackType])

  const { good, neutral, bad } = feedbackType;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback =
    totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;

  const resetFeedBack = () => {
    setFeedBack(defaultFeedback);
  };

  return (
    <div>
      <Description />
      <OptionBtn
        onClick={(type) =>
          setFeedBack((prev) => ({ ...prev, [type]: prev[type] + 1 }))
        }
        onReset={resetFeedBack}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <UpdateFeedback
          feedBack={feedbackType}
          positiveFeedback={positiveFeedback}
          totalFeedback={totalFeedback}

        />
      ) : (
        <NoFeedback />
      )}
    </div>
  );

}
