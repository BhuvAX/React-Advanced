import Calendar from "./components/Calendar"
import EventsProvider, { EventsContext } from "./context/Events"

function App() {
  return (
    <EventsProvider>
      <Calendar/>
    </EventsProvider>
  )
}

export default App
