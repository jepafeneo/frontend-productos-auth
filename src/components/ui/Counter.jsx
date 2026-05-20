import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const sumaUno = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>Counter: {count}</p>
      <button onClick={sumaUno}>Incrementar</button>
    </div>
  );
}

export default Counter;
