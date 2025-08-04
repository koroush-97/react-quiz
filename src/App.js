import { useEffect, useReducer } from "react";
import Header from "./Header";
import Main from "./components/Main";
import { type } from "@testing-library/user-event/dist/type";

const initalState = {
  questions: [],
  status: "loading",
};

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived":
      return { ...state, questions: action.payload, status: "ready" };
    default:
      throw new Error(" Action unkonwn ");
  }
}
export default function App() {
  const [state, dispatch] = useReducer(reducer, initalState);

  useEffect(function () {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
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
