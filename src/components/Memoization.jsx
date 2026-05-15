import { useMemo, useState } from "react";

const Memoization = () => {
  return (
    <div>
      {/* <Parent /> */}
      <ValueMemoization />
    </div>
  );
};
export default Memoization;

const ValueMemoization = () => {
  const [num, setNum] = useState(0);
  const heavyCalculation = (num) => {
    console.log("heavy calculation is running...");
    let result = 0;
    for (let i = 0; i < 100000; i++) {
      result += num;
    }
    return result;
  };
  const memoizedValue = useMemo(() => heavyCalculation(num), [num]);
  return (
    <>
      <h1 className="text-3xl text-center">Memoized Value: {memoizedValue}</h1>
      <button className="btn btn-primary" onClick={() => setNum(num + 1)}>
        increment
      </button>
    </>
  );
};
