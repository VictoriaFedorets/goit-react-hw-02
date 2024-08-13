export default function Options({ onUpdate, resetClicks }) {
  return (
    <div>
      <button type="button" onClick={() => onUpdate("good")}>
        Good
      </button>
      <button type="button" onClick={() => onUpdate("neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => onUpdate("bad")}>
        Bad
      </button>
      <button type="button" onClick={() => resetClicks()}>
        Reset
      </button>
    </div>
  );
}
