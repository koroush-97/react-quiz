export default function Progress({ index, numQuestion, points }) {
  return (
    <header className="progress">
      <p>
        Question <strong>{index + 1}</strong> / {numQuestion}{" "}
      </p>

      <p>
        points : <strong>{points}</strong> / X{" "}
      </p>
    </header>
  );
}
