import { useEffect } from "react";

export default function Timer() {
  useEffect(function () {
    setInterval(function () {
      console.log("tick");
    }, 1000);
  }, []);

  return <div className="timer">05:00</div>;
}
