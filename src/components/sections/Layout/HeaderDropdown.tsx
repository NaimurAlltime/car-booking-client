import { Button, Dropdown, MenuProps } from "antd";
import Image from "next/image";
import en from "../../../app/en-flag.svg";
import fn from "../../../app/Flag_of_France.svg";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <div className="flex gap-5 ">
        <Image
          src={en}
          alt=""
          width={40}
          height={40}
          className="rounded-sm cursor-pointer"
        />
        <p>English</p>
      </div>
    ),
  },
  {
    key: "2",
    label: (
      <div className="flex gap-5 ">
        <Image
          src={fn}
          alt=""
          width={40}
          height={40}
          className="rounded-sm cursor-pointer"
        />
        <p>France</p>
      </div>
    ),
  },
];

const HeaderDropdown = () => {
  return (
    <div>
      <Dropdown
        menu={{ items }}
        placement="bottomRight"
        arrow
        trigger={["click"]}
        className="gap-5"
        rootClassName="z-40"
      >
        <Button type="text" className="">
          <div className="flex gap-2 justify-center items-center">
            <Image
              src={en}
              alt=""
              width={40}
              height={40}
              className="rounded-sm cursor-pointer"
            />
            <h2 className="text-white">EN</h2>
          </div>
        </Button>
      </Dropdown>
    </div>
  );
};

export default HeaderDropdown;
