import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  const date = new Date("september 30 2023");
  date.setDate(date.getDate() + count);

  return (
    <div>
      <button onClick={() => setCount((c) => c - 1)}> - </button>
      <span style={{ paddingRight: "10px", paddingLeft: "10px" }}>
        count: {count}
      </span>
      <button onClick={() => setCount((c) => c + 1)}> + </button>

      <p>
        <span>
          {count === 0
            ? "today is"
            : count > 0
            ? `${count} days after today`
            : `${Math.abs(count)} days ago was`}
        </span>
        <span> {date.toDateString()} </span>
      </p>
    </div>
  );
}
