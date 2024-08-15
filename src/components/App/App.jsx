import { useState, useEffect } from "react";

import Description from "../Description/Description";
import Options from "../Options/Options";
import Feedback from "../Feedback/Feedback";
import Notification from "../Notification/Notification";

export default function App() {
  const [feedbackType, setFeedbackType] = useState(() => {
    const savedFeedback = window.localStorage.getItem("my-feedback");
    if (savedFeedback !== null) {
      return JSON.parse(savedFeedback);
    }
    return { good: 0, neutral: 0, bad: 0 };
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

  const positiveFeedback =
    totalFeedback === 0
      ? 0
      : Math.round((feedbackType.good / totalFeedback) * 100);

  const resetClicks = () => {
    setFeedbackType({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    window.localStorage.setItem("my-feedback", JSON.stringify(feedbackType));
  }, [feedbackType]);

  return (
    <div>
      <Description />
      <Options
        onUpdate={updateFeedback}
        resetClicks={resetClicks}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedbackType={feedbackType}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </div>
  );
}
