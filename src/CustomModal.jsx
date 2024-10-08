import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

function CustomModal({ isOpen, onClose, children }) {
  useEffect(() => {
    function handler(e) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handler);

    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  return createPortal(
    <div className={`modal-overlay ${isOpen && "show"}`}>{children}</div>,
    document.querySelector("#modals")
  );
}
export default CustomModal;
