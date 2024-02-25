import React, { useState, useRef, useEffect } from "react";
const Modal = ({ isOpen, onClose, children }) => {
  const [isBackdropVisible, setIsBackdropVisible] = useState(false);
  const modalRef = useRef(null);

  // Handle backdrop and modal visibility on mount/unmount
  useEffect(() => {
    const body = document.body;
    if (isOpen) {
      body.classList.add("overflow-hidden");
      setIsBackdropVisible(true);
    } else {
      body.classList.remove("overflow-hidden");
      setIsBackdropVisible(false);
    }
  }, [isOpen]);

  // Handle close on modal click (excluding backdrop)
  const handleClose = (event) => {
    if (modalRef.current && event.target !== modalRef.current) {
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center overflow-y-auto justify-center ${
        isBackdropVisible ? "backdrop-open" : ""
      }`}
      onClick={handleClose}>
      <div
        className={`bg-white rounded-lg p-4 overflow-y-auto shadow-md mx-10 ${
          children ? "overflow-auto" : ""
        }`}
        ref={modalRef}>
        {children}
        <button
          className="mt-4 bg-gray-500 text-white px-4 py-2 rounded font-bold focus:outline-none"
          onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
