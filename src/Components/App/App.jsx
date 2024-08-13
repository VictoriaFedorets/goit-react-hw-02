import { useState } from "react";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";

export default function App() {
  const [feedbackType, setFeedbackType] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
    totalFeedback: 0,
  });

  const updateFeedback = type => {
    setFeedbackType(prevFeedback => ({
      //копируем feedback
      ...prevFeedback,
      [type]: prevFeedback[type] + 1,
    }));
  };

  const totalFeedback =
    feedbackType.good + feedbackType.neutral + feedbackType.bad;

  const resetClicks = () => {
    setFeedbackType({ good: 0, neutral: 0, bad: 0, totalFeedback: 0 });
  };

  return (
    <div>
      <Description />
      <Options onUpdate={updateFeedback} resetClicks={resetClicks} />
      <Feedback feedbackType={feedbackType} totalFeedback={totalFeedback} />
    </div>
  );
}
