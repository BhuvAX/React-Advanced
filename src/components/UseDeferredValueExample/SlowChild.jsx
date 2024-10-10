import { memo } from "react";

function Component({ query }) {
  const start = performance.now();
  while (start > performance.now() - 100) {
    // Artificial slow down
  }
  return (
    <>
      <h1>Query Results</h1>
      {query}
    </>
  );
}

export const SlowChild = memo(Component);
