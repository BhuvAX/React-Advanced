import { format } from "date-fns";
import DatePicker from "./DatePicker";
import { useEffect, useState } from "react";

function App() {
  const [selectedDate, setSelectedDate] = useState();
  return (
    <>
      <DatePicker value={selectedDate} onChange={setSelectedDate} />
    </>
  );
}

export default App;
