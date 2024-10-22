import { useCounterDispatch } from "./useCounterContext"

export default function CounterButtons() {
  const dispatch = useCounterDispatch()
  return (
    <>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
    </>
  )
}
