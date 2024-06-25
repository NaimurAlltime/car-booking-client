import React from "react";
import { Modal } from "antd";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

export default function Help() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <button onClick={showModal}>
        <p className="mr-1 group-hover:underline">Help</p>
      </button>
      <IoIosArrowDown />
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <form className="max-w-md mx-auto mt-8">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Email:
            </label>
            <input
              type="email"
              placeholder="Enter Your Email:"
              name="email"
              id="email"
              className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border border-gray-400 rounded appearance-none focus:outline-none focus:bg-white focus:border-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Message:
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter Your Message"
              cols={20}
              rows={4}
              className="w-full px-4 py-2 leading-tight text-gray-700 bg-gray-200 border border-gray-400 rounded appearance-none focus:outline-none focus:bg-white focus:border-blue-500"
            ></textarea>
          </div>
        </form>
      </Modal>
    </>
  );
}
