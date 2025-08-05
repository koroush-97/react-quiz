export default function Progress({
  index,
  numQuestion,
  points,
  maxPossiblePoints,
}) {
  return (
    <header className="progress">
      <Progress max={numQuestion} value={index} />

      <p>
        Question <strong>{index + 1}</strong> / {numQuestion}{" "}
      </p>

      <p>
        points : <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}
