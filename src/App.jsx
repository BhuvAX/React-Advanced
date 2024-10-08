import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { CustomInput } from "./CustomInput";
import Child from "./Child";
import Counter from "./Counter";

// Portal example
/* function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div style={{ position: "relative", marginTop: "100px" }}>
      <h1>App Content</h1>
      <button onClick={() => setIsOpen(true)}>Show Message</button>
      <AlertMessage isOpen={isOpen} onClose={() => setIsOpen(false)}>
        Secret Message
        <br />
        Click to close
      </AlertMessage>
    </div>
  )
}

function AlertMessage({ children, onClose, isOpen }) {
  if (!isOpen) return null

  return createPortal(
    <div
      onClick={onClose}
      style={{
        cursor: "pointer",
        position: "absolute",
        top: "0.5rem",
        left: "50%",
        translate: "-50%",
        background: "#777",
        color: "white",
        borderRadius: ".5rem",
      }}
    >
      {children}
    </div>,
    document.querySelector("#alert-messages")
  )
} */

//forwardRef() example
/* function App() {
  const inputRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    console.log(inputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <CustomInput ref={inputRef} />
      <button type="submit">Submit</button>
    </form>
  )
} */

// Example of implementing error boundary refer main.jsx and ErrorBoundary.jsx
/* function App() {
  return (
    <>
      <h1>Parent</h1>
      <Child />
    </>
  )
} */

function App() {
  const [changeDogs, setChangeDogs] = useState(false);

  return (
    <div>
      {changeDogs ? (
        <>
          <span># of Dogs: </span> <Counter key="dog" />
        </>
      ) : (
        <>
          <span># of Cats: </span> <Counter key="cat" />
        </>
      )}
      <br />
      <button onClick={() => setChangeDogs((d) => !d)}>Switch</button>
    </div>
  );
}

export default App;
