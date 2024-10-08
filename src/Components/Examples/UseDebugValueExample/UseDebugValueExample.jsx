import React, { useDebugValue, useState } from "react";
import { useOnlineStatus } from "./useOnlineStatus";
import { useLocalStorage } from "./useLocalStorage";

function UseDebugValueExample() {
  const isOnline = useOnlineStatus();
  const [name, setName] = useLocalStorage("Name", "");
  const [age, setAge] = useState(0);

  return (
    <>
      <h3>{isOnline ? "Online" : "Offline"}</h3>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      <br />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
    </>
  );
}

export default UseDebugValueExample;
