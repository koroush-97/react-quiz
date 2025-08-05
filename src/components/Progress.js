export default function Progress({ index, numQuestion }) {
  return (
    <header className="progress">
      <p>
        Question <strong>{index + 1}</strong> / {numQuestion}{" "}
      </p>
    </header>
  );
}
