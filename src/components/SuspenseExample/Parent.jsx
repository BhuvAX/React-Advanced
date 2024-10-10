import { useState, Suspense } from "react";
import Child from "./Child";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ErrorBoundary } from "./ErrorBoundary";

const queryClient = new QueryClient();

export default function Parent() {
  const [cutoff, setCutoff] = useState(1);
  return (
    <QueryClientProvider client={queryClient}>
      <input
        type="number"
        value={cutoff}
        onChange={(e) => setCutoff(e.target.value)}
      />
      <ErrorBoundary fallback={<h1>Error</h1>}>
        <Suspense fallback={<h1>Suspended</h1>}>
          <Child cutoff={cutoff} />
        </Suspense>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}
