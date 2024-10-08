import { useState } from "react";
import Counter from "./Counter";

function AdvancedKeyUsesExample() {
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

export default AdvancedKeyUsesExample;
