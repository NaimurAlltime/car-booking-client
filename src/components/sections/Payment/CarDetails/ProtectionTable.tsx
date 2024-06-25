"use client";
import { useState } from "react";
import { FaTimes, FaCheckCircle } from "react-icons/fa";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";

const ProtectionTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(Array(3).fill(false));

  const toggleModal = (index: any) => {
    const updatedModalState = [...isModalOpen];
    updatedModalState[index] = !updatedModalState[index];
    setIsModalOpen(updatedModalState);
  };

  return (
    <>
      <div className="overflow-x-auto py-12 md:px-4 px-1">
        <table className="table border-[1px] border-black/20 rounded-lg ">
          {/* head */}
          <thead>
            <tr>
              <th className="font-Poppins font-bold text-xl text-black md:p-3 p-0">
                What is covered
              </th>
              <th className="font-Poppins font-bold text-xl text-black md:p-3 p-0">
                No additional protection
              </th>
              <th className="font-Poppins ms-5 font-bold text-xl text-[#068323]  md:p-5 p-0">
                Full Protection
              </th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td className="md:p-5 p-0">
                <div
                  className="flex items-center gap-4"
                  onClick={() => toggleModal(0)}
                >
                  {isModalOpen[0] ? (
                    <MdKeyboardArrowUp size={30} color="#3b82f6" />
                  ) : (
                    <MdKeyboardArrowDown size={30} color="#3b82f6" />
                  )}
                  <h1 className="font-Poppins text-[17px] text-blue-500 cursor-pointer">
                    The car&apos;s excess
                  </h1>
                </div>

                {/* para */}
                {isModalOpen[0] && (
                  <p className="font-poppins text-[17px] w-2/3 leading-5 pl-12">
                    Your car comes with standard damage cover (CDW) with an
                    excess of ₹133,595.73 and Theft Protection (TP) with an
                    excess of ₹133,595.73. If the bodywork is damaged or the car
                    is stolen, the car hire company could charge you up to the
                    excess amount – but Rentalcover.com will refund you.
                  </p>
                )}
              </td>
              <td className="md:p-5 p-0">
                <FaTimes />
              </td>
              <td className="md:p-5 p-0">
                <FaCheckCircle size={30} color="#068323" />
              </td>
            </tr>
            {/* row 2 */}
            <tr className="mt-3">
              <td className="md:p-5 p-0">
                <div
                  className="flex items-center gap-4"
                  onClick={() => toggleModal(1)}
                >
                  {isModalOpen[1] ? (
                    <MdKeyboardArrowUp size={30} color="#3b82f6" />
                  ) : (
                    <MdKeyboardArrowDown size={30} color="#3b82f6" />
                  )}
                  <h1 className="font-Poppins text-[17px] text-blue-500 cursor-pointer">
                    Windows, mirrors, wheels & tyres
                  </h1>
                </div>

                {/* para */}
                {isModalOpen[1] && (
                  <p className="font-poppins text-[17px] w-2/3 leading-5 pl-12">
                    Protection products often have exclusions, but Full
                    Protection covers every exterior and mechanical part of your
                    car, from wheels and windows to engine, roof &
                    undercarriage.
                  </p>
                )}
              </td>
              <td className="md:p-5 p-0">
                <FaTimes />
              </td>
              <td className="md:p-5 p-0">
                <FaCheckCircle size={30} color="#068323" />
              </td>
            </tr>
            {/* row 3 */}
            <tr>
              <td className="md:p-5 p-0">
                <div
                  className="flex items-center gap-4"
                  onClick={() => toggleModal(2)}
                >
                  {isModalOpen[2] ? (
                    <MdKeyboardArrowUp size={30} color="#3b82f6" />
                  ) : (
                    <MdKeyboardArrowDown size={30} color="#3b82f6" />
                  )}
                  <h1 className="font-Poppins text-[17px] text-blue-500 cursor-pointer">
                    Administration and breakdown charges
                  </h1>
                </div>

                {/* para */}
                {isModalOpen[2] && (
                  <p className="font-poppins text-[17px] w-2/3 leading-5 pl-12">
                    If you break down, lose your key(s) or lock yourself out,
                    Rentalcover.com will refund any call-out charges, towing
                    fees and key replacement costs.
                  </p>
                )}
              </td>
              <td className="md:p-5 p-0">
                <FaTimes />
              </td>
              <td className="md:p-5 p-0">
                <FaCheckCircle size={30} color="#068323" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ProtectionTable;
