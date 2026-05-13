import { useEffect, useState } from "react";

const LearnUseEffect = () => {
  const [num, setNum] = useState(0);
  const [name, setName] = useState("");
  //   useEffect(() => {
  //     console.log("component re-rendered! ", num, " : ", name);
  //   }); // it will run automatically everytime when there is any change in states or props
  //   useEffect(() => {
  //     console.log("component re-rendered! ", num, " : ", name);
  //   }, []); // it will run automatically one time when the component mounts on the UI
  //   useEffect(() => {
  //     console.log("component mounted");
  //     return () => console.log("component unmounted!");
  //   }, []); // it will run automatically one time when the component mounts on the UI

  //   useEffect(() => {
  //     console.log("component re-rendered! ", num);
  //   }, [num]);
  useEffect(() => {
    console.log("component re-rendered! ", num, " : ", name);
  }, [num, name]);

  return (
    <div className="text-center my-12">
      <h1 className="text-3xl">
        Num : {num} Name : {name}
      </h1>
      <button className="btn btn-primary" onClick={() => setNum(num + 1)}>
        increment
      </button>
      <br />
      Enter ur Name :
      <input
        type="text"
        onChange={(e) => setName(e.target.value)}
        className="border rounded"
      />
    </div>
  );
};

export default LearnUseEffect;
