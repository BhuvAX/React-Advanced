import { forwardRef, useImperativeHandle, useRef, useState } from "react";

function Inner(props, ref) {
  const [value, setValue] = useState("");

  /* const inputRef = useRef()
  const input2Ref = useRef() */
  useImperativeHandle(
    ref,
    () => {
      /* return { alertHi: () => alert("Hi") } */
      /* return { focus: () => inputRef.current.focus() } */
      /* return { input1: inputRef.current, input2: input2Ref.current } */
      return { value };
    },
    [value]
  );
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {/* <input {...props} ref={inputRef} />
      <input {...props} ref={input2Ref} /> */}
    </>
  );
}

export const Input = forwardRef(Inner);
