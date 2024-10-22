import CounterDisplay from "./CounterDisplay"
import CounterButtons from "./CounterButtons"
import { CounterProvider } from "./CounterContext"

export default function ContextOrganizationExample() {

  return (
    <CounterProvider>
      <CounterDisplay/>
      <CounterButtons/>
    </CounterProvider>
  )
}

