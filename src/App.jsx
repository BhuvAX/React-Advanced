import { useState } from "react";
import CustomModal from "./CustomModal";
import DialogModal from "./DialogModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  return (
    <>
      <button onClick={() => setIsModalOpen(true)}>Show Custom Modal</button>
      <br />
      <button onClick={() => setIsDialogOpen(true)}>Show Dialog Modal</button>
      <CustomModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="modal">
          <p>
            This is a <strong>CUSTOM</strong> modal
          </p>
          <button onClick={() => setIsModalOpen(false)}>Close</button>
        </div>
      </CustomModal>
      <DialogModal isOpen={isDialogOpen} onClose={() => setIsDialogOpen(false)}>
        <p>
          This is a <strong>DIALOG</strong> modal
        </p>
        <button onClick={() => setIsDialogOpen(false)}>Close</button>
      </DialogModal>
    </>
  );
}

export default App;
