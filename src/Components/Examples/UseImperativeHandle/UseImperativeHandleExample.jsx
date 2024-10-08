import { useImperativeHandle, useRef } from "react";
import { Input } from "./Input";

export default function UseImperativeHandleExample() {
  const inputRef = useRef();
  return (
    <>
      <button onClick={() => console.log(inputRef.current.value)}>Focus</button>
      <Input type="text" ref={inputRef} />
    </>
  );
}
