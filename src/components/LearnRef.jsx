import { useEffect, useRef, useState } from "react";

const LearnRef = () => {
  const num = useRef(0);
  const [num2, setNum2] = useState(0);

  useEffect(() => {
    console.log("component re-rendered!");
  });
  return (
    <div>
      <h1 className="text-3xl text-center">
        Num : {num.current} Num2 : {num2}
      </h1>
      <button className="btn btn-primary" onClick={() => (num.current += 1)}>
        increment num
      </button>
      <button className="btn btn-primary" onClick={() => setNum2(num2 + 1)}>
        increment num2
      </button>
    </div>
  );
};

export default LearnRef;
