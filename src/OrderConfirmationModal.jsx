import React from "react";
import orderConfirmedImage from "../src/assets/Order Confirmed  modal.png"

const OrderConfirmationModal = ({ isOpen, onClose }) => {
  return (
    <div className={`modal ${isOpen ? "modal-open" : ""}`}>
      <div className="modal-box relative bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
        >
          ✕
        </button>
        <img src={orderConfirmedImage} alt="Order Confirmed" className="w-full rounded-lg" />
      </div>
    </div>
  );
};

export default OrderConfirmationModal;