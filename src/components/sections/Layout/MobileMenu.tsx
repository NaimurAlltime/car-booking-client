"use client";

import { FloatButton } from "antd";
import { CgMenuCake } from "react-icons/cg";
import { MdContactMail, MdInfo, MdManageAccounts, MdOutlineSupportAgent } from "react-icons/md";
import { RiReservedFill } from "react-icons/ri";

const MobileMenu = () => {
  return (
    <div className="lg:hidden inline-block">
      <FloatButton.Group trigger="click" type="primary" style={{ right: 24 }} icon={<CgMenuCake />}>
        <FloatButton icon={<MdOutlineSupportAgent />} tooltip={<p>Help</p>} />
        <FloatButton icon={<MdManageAccounts />} tooltip={<p>Manage Booking</p>} />
        <FloatButton icon={<RiReservedFill />} tooltip={<p>Reservation</p>} />
        <FloatButton icon={<MdInfo />} tooltip={<p>About us</p>} />
        <FloatButton icon={<MdContactMail />} tooltip={<p>Contact</p>} />
      </FloatButton.Group>
    </div>
  );
};

export default MobileMenu;
