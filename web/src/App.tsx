import { useCounterController } from "core";

function App() {
  const { getValue } = useCounterController();

  return <div>Count: {getValue()}</div>;
}

export default App;
