export default function StartScreen({ numQuestions }) {
  return (
    <div className="start">
      <h2>WelCome to The React Quiz!</h2>
      <h3>{numQuestions} question to test your React mastery</h3>
      <button> Let's Start </button>
    </div>
  );
}
