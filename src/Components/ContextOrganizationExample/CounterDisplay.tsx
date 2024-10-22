import { useCounterValue } from "./useCounterContext"

export default function CounterDisplay() {
  const { count } = useCounterValue()

  return <div>{count}</div>
}
