// import React, { useCallback, useEffect, useState } from "react";

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

// const Parent = () => {
//   const [num, setNum] = useState(0);
//   const [num2, setNum2] = useState(0);

//   const greet = useCallback(() => {
//     console.log("good morning sir!",num);
// //   },[]);
//   },[num]);
//   useEffect(() => {
//     console.log("parent component re-rendered");
//   });
//   return (
//     <>
//       <h1 className="text-3xl text-center">Num :{num} in parent</h1>
//       <div className="text-center mx-auto">
//         <button className="btn btn-primary" onClick={() => setNum(num + 1)}>
//           increment
//         </button>
//       </div>
//       {/* <Children num2={num2}/> */}
//       {/* <Children num={num}/> */}
//       {/* <Children greet={greet} /> */}
//       <Children greet={greet} num={num}/>
//     </>
//   );
// };
// const Children = React.memo(({greet}) => {
//   // memoization in Component
//   useEffect(() => {
//     greet();
//     console.log("child component re-rendered");
//   });
//   return (
//     <>
//       <h1 className="text-3xl text-center">Hii by children</h1>
//     </>
//   );
// });

const ValueMemoization = () => {
  const [num, setNum] = useState(0);
  const heavyCalculation = (num) => {
    console.log("heavy calculation is running...");
    let result = 0;
    for (let i = 0; i < 1e9; i++) {
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
