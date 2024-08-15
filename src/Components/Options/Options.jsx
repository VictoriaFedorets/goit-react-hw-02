import css from "./Options.module.css";

export default function Options({ onUpdate, resetClicks, totalFeedback }) {
  return (
    <div className={css.btnClick}>
      <button type="button" onClick={() => onUpdate("good")}>
        Good
      </button>
      <button type="button" onClick={() => onUpdate("neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => onUpdate("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button type="button" onClick={() => resetClicks()}>
          Reset
        </button>
      )}
    </div>
  );
}
