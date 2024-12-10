import { useState } from "react";
import Description from "./Description/Description";
import OptionBtn from "./Options/Options";
import UpdateFeedback from "./Feedback/Feedback";

export default function App() {
  const [feedbackType, setFeedBack] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  }
  );

  return (
    <>
      <Description />
      <OptionBtn onClick={type => setFeedBack(prev => ({ ...prev, [type]: prev[type] + 1 }))} />
      <UpdateFeedback feedBack={feedbackType} />
    </>
  )
}

