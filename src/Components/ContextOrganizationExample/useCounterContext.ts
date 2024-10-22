import { useContext } from "react"
import { DispatchContext, ValueContext } from "./CounterContext"

export function useCounterValue() {
  const value = useContext(ValueContext)
  if (value == null) {
    throw new Error("Should be within Context.Provider")
  }

  return value
}

export function useCounterDispatch() {
  const value = useContext(DispatchContext)
  if (value == null) {
    throw new Error("Should be within Context.Provider")
  }

  return value
}