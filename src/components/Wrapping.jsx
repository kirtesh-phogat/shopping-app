const Wrapping = () => {
  return (
    <div className="text-center my-12">
      <h1 className="text-center">Wrapping Demo</h1>
      <Parent>
        <CustomLi content="Apple" emoji={"🥳"} />
        <CustomLi content="Mango" emoji={"😊"} />
        <CustomLi content="Banana" emoji={"😑"} />
        <CustomLi content="Chiku" emoji={"🚀"} />
      </Parent>
    </div>
  );
};

export default Wrapping;

const Parent = ({ children }) => {
  return (
    <>
      <h1 className="text-3xl">Hii i am Parent Component Starting</h1>
      <ul className="pl-[50%]">{children}</ul>
      <h1 className="text-3xl">Hii i am Parent Component Ending</h1>
    </>
  );
};

const CustomLi = ({ content, emoji }) => {
  return <li style={{ listStyleType: `"${emoji}"` }}>{content}</li>;
};
