import { useRef, useState } from "react"
import { useToast } from "./useToast"
import { ToastOptions } from "./ToastProvider"

export function ToastLibrary() {
  const { addToast, removeToast } = useToast()
  const [lastId, setLastId] = useState("")
  const messageRef = useRef<HTMLInputElement>(null)
  const autoDismissRef = useRef<HTMLInputElement>(false)
  const timoutRef = useRef<HTMLInputElement>(null)
  const positionRef = useRef<HTMLSelectElement>(null)

  function createToast() {
    if (messageRef.current == null || messageRef.current.value === "") return

    const userDefinedOptions: ToastOptions = {};
    if (autoDismissRef.current != null) {
      userDefinedOptions.autoDismiss = autoDismissRef.current.checked
    }

    if (timoutRef.current != null && timoutRef.current.value != "") {
      userDefinedOptions.autoDismissTimout = Number(timoutRef.current.value)
    }

    if (positionRef.current != null) {
      userDefinedOptions.position = positionRef.current.value
    }

    setLastId(
      addToast(messageRef.current.value, userDefinedOptions)
    )
  }

  return (
    <div className="form">
      <div>
        <label htmlFor="toastMessage">Toast Message</label>
        <input type="text" name="toastMessage" ref={messageRef}></input>
      </div>
      <div>
        <label htmlFor="autodismiss">Auto dismiss</label>
        <input type="checkbox" name="autodismiss" ref={autoDismissRef} />
      </div>
      <div>
        <label htmlFor="timout">Auto dismiss timout duration</label>
        <input type="number" name="timout" ref={timoutRef}></input>
      </div>
      <div>
        <label htmlFor="toastPosition">Toast Position</label>
        <select name="toastPosition" id="toastPosition" ref={positionRef}>
          <option value="top-left">Top Left</option>
          <option value="top-center">Top Center</option>
          <option value="top-right">Top Right</option>
          <option value="bottom-left">Bottom Left</option>
          <option value="bottom-center">Bottom Center</option>
          <option value="bottom-right">Bottom Right</option>
        </select>
      </div>
      <button onClick={createToast}>Add Toast</button>
      <button onClick={() => removeToast(lastId)}>Remove Last Toast</button>
    </div>
  )
}
