// Modal.jsx
import React from 'react';
import ReactDOM from 'react-dom';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div
        className="bg-white rounded-lg shadow-lg p-6 relative w-96"
        role="dialog"
        aria-modal="true"
      >
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
          onClick={onClose}
          aria-label="Close modal"
        >
          ×
        </button>
        {children}
      </div>
    </div>,
    document.getElementById('modal-root') // Ensure you have a div with id="modal-root" in index.html
  );
};

export default Modal;