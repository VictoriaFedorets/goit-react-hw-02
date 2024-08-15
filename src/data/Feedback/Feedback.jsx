export default function Feedback({
  feedbackType,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <div>
      <p>Good: {feedbackType.good}</p>
      <p>Neutral: {feedbackType.neutral}</p>
      <p>Bad: {feedbackType.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
}
