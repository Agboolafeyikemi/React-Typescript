import { ChildFC } from "./Child";

export const Parent = () => {
  return (
    <ChildFC color="red" onClick={() => console.log("clicked")}>
      sdfghjuikol
    </ChildFC>
  );
};

// const handleClick = () => {};
