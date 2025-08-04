import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./components/Main";

function reducer(stae, action) {}
const initalState = {
  questions: [],
};
export default function App() {
  const [state, dispatch] = useReducer(reducer, initalState);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log("Error"));
  }, []);

  return (
    <div className="app">
      <Header />
      <Main>
        <p>1/15</p>
        <p>Questions</p>
      </Main>
    </div>
  );
}
