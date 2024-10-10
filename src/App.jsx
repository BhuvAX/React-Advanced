import ReactLazyParent from "./components/ReactLazyExample/ReactLazyParent";
import Parent from "./components/SuspenseExample/Parent";
import UseDeferredValueParent from "./components/UseDeferredValueExample/UseDeferredValueParent";
import UseTransitionParent from "./components/UseTransitionExample/UseTransitionParent";

function App() {
  // Suspense example
  /* return <Parent/> */

  // ReactLazy example
  /* return <ReactLazyParent/> */

  // useDeferredValue hook example
  /* return <UseDeferredValueParent/> */

  // useTransition hook example
  return <UseTransitionParent />;
}

export default App;
