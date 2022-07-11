import { useCounterController, useLibRedux } from "core";

function App() {
  const store = useLibRedux();
  const { getValue, increment, decrement } = useCounterController(store);

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
