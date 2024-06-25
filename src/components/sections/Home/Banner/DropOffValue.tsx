import { useAppSelector } from "@/redux/hooks";
import { memo } from "react";
import SearchAutoComplete from "./AutoComplete";

const DropOffValue = () => {
  const dropOff = useAppSelector((state) => state.searchBox.dropOff);
  return <div>{dropOff && <SearchAutoComplete name="drop-location" label="Drop-off Location" />}</div>;
};

export default memo(DropOffValue);
