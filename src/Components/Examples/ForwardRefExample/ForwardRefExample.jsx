import { useRef } from "react";
import { CustomInput } from "./CustomInput";

function ForwardRefExample() {
  const inputRef = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    console.log(inputRef.current.value);
  }

  return (
    <form onSubmit={handleSubmit}>
      <CustomInput ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ForwardRefExample;
