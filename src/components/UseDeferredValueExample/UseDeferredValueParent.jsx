import React, { useDeferredValue, useState } from "react";
import { SlowChild } from "./SlowChild";

export default function UseDeferredValueParent() {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  return (
    <>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <SlowChild query={deferredQuery} />
    </>
  );
}
