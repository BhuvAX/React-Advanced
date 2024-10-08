import React from "react";

export default function Child() {
  throw new Error("Component");

  return <h2>Child</h2>;
}
