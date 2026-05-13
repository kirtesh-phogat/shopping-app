// import { useRef } from "react";

import { useEffect, useRef, useState } from "react";

// const LearnRef = () => {
//   const h1Obj = useRef();
//   const styleH1 = () => {
//     // const h1Obj=document.querySelector("h1");
//     // h1Obj.style.color="red";
//     // console.log(h1Obj);
//     h1Obj.current.style.color = "red";
//   };
//   return (
//     <div>
//       <h1 ref={h1Obj} className="text-center" onClick={styleH1}>
//         Hello World
//       </h1>
//     </div>
//   );
// };

// export default LearnRef;

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
