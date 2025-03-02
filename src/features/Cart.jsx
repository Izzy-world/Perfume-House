import React, { useState } from "react";
import cartPreview from "../assets/My Cart Preview.png";
import imageOne from "../assets/image 1.png";
import imageTwo from "../assets/image 2.png";
import avent from "../assets/aventp.png";
import eleganza from "../assets/eleganza.png";
import aventConfirm from "../assets/aventconfirm.png";
import OrderConfirmationModal from "../OrderConfirmationModal"

const Cart = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="my-3 px-4 md:px-10 lg:px-20 flex  align-items: flex-start min-h-screen">
        <div className="w-full max-w-lg mx-auto">
          <img className="w-45" src={cartPreview} alt="cart-preview" />
          <br />
          <img src={imageOne} alt="first-cart" />
          <br />
          <img src={imageTwo} alt="image-2" />
          <br />
          <div className="flex">
            <img className="w-25" src={avent} alt="avent for him" />
            <div className="mx-5">
              <img src={eleganza} alt="eleganza" />
            </div>
          </div>
          <br />
          <div>
            <img src={aventConfirm} alt="avent confirm" />
          </div>
          <br />

          {/* Confirm Order Button */}
          <button
            className="w-full md:w-76 h-[43px] bg-[#8D34FF] rounded text-[#F5F5F5] cursor-pointer text-sm"
            onClick={() => setIsModalOpen(true)} // Open Modal
          >
            Confirm Order
          </button>
        </div>
      </div>

      {/* Order Confirmation Modal */}
      <OrderConfirmationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Cart;
