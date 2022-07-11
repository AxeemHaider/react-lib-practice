import { useCounterController } from "core";

function App() {
  const { getValue, increment, decrement } = useCounterController();

  return (
    <div>
      Count: {getValue()}
      <br />
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default App;
