import { createContext, ReactNode, useState } from "react"
import { createPortal } from "react-dom"

type Toast = {
  id: string
  name: string
  options: ToastOptions
}

type ToastContextType = {
  toasts: Toast[]
  addToast: (name: string, userDefinedOptions: ToastOptions) => string
  removeToast: (id: string) => void
}

export const ToastContext = createContext<ToastContextType | null>(null)

type ToastProviderProps = {
  children: ReactNode
}

export type ToastOptions = {
  autoDismiss?: boolean
  autoDismissTimout?: number
  position?: string
}

const defaultOptions: ToastOptions = {
  autoDismiss: false,
  autoDismissTimout: 5000,
  position: "top-left",
}

export function ToastProvider({ children }: ToastProviderProps) {
  const [toasts, setToasts] = useState<Toast[]>([])

  function addToast(name: string, userDefinedOptions: ToastOptions) {
    const toastId = crypto.randomUUID()
    const toastOptions = { ...defaultOptions, ...userDefinedOptions }
    setToasts((messages) => {
      return [...messages, { id: toastId, name: name, options: toastOptions }]
    })

    if (toastOptions.autoDismiss) {
      setTimeout(() => removeToast(toastId), toastOptions.autoDismissTimout)
    }

    return toastId
  }

  function removeToast(id: string) {
    setToasts((messages) => {
      return messages.filter((m) => m.id != id)
    })
  }

  const toastsByPosition = toasts.reduce((grouped, toast) => {
    const { position } = toast.options
    if (grouped[position] == null) {
      grouped[position] = []
    }
    grouped[position].push(toast)

    return grouped
  }, {} as Record<string, Toast[]>)


  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {children}
      {createPortal(
        Object.entries(toastsByPosition).map(([position, toasts]) => (
          <div key={position} className={`toast-container ${position}`}>
            {toasts.map((toast) => (
              <div
                onClick={() => removeToast(toast.id)}
                className="toast"
                key={toast.id}
              >
                {toast.name}
              </div>
            ))}
          </div>
        )),
        document.getElementById("toast-container") as HTMLDivElement
      )}
    </ToastContext.Provider>
  )
}
