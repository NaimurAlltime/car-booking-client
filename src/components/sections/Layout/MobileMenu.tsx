"use client";

import { FloatButton } from "antd";
import { CgMenuCake } from "react-icons/cg";
import { MdOutlineSupportAgent } from "react-icons/md";
import { MdManageAccounts } from "react-icons/md";

const MobileMenu = () => {
  return (
    <div className="md:hidden inline-block">
      <FloatButton.Group trigger="click" type="primary" style={{ right: 24 }} icon={<CgMenuCake />}>
        <FloatButton icon={<MdOutlineSupportAgent />} tooltip={<p>Help</p>} />
        <FloatButton icon={<MdManageAccounts />} tooltip={<p>Manage Booking</p>} />
      </FloatButton.Group>
    </div>
  );
};

export default MobileMenu;
