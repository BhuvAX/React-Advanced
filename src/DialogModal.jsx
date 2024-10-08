import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

function DialogModal({ isOpen, onClose, children }) {
  const dialogRef = useRef();

  useEffect(() => {
    const dialog = dialogRef.current;

    if (dialog == null) return;

    if (isOpen) {
      dialog.showModal();
    } else {
      dialog.close();
    }
  }, [isOpen]);

  useEffect(() => {
    const dialog = dialogRef.current;

    if (dialog == null) return;

    dialog.addEventListener("close", onClose);

    return () => {
      dialog.removeEventListener("close", onClose);
    };
  }, [onClose]);

  return createPortal(
    <dialog ref={dialogRef}>{children}</dialog>,
    document.querySelector("#modals")
  );
}
export default DialogModal;
