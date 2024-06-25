import { setOpenRangePickerOpen } from "@/redux/features/searchbox/searchboxSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { Popover } from "antd";
import SearchDatePicker from "./DatePicker";
import DateRangePicker from "./DateRangePicker";

const PopoverRangePicker = ({ disabledDateBeforeToday }: { disabledDateBeforeToday: any }) => {
  const { openRangePickerOpen, openRangePickerRes } = useAppSelector((state) => state.searchBox);
  const dispatch = useAppDispatch();

  const handleOpenChange = (newOpen: boolean) => {
    dispatch(setOpenRangePickerOpen(newOpen));
  };
  return (
    <div>
      <div className="max-lg:hidden">
        <Popover
          content={<DateRangePicker />}
          trigger="click"
          open={openRangePickerOpen}
          onOpenChange={handleOpenChange}
          placement="bottomLeft"
          arrow={false}
        >
          <div>
            <SearchDatePicker name="pickDate" label="Pick-up Date" disableDate={disabledDateBeforeToday} />
          </div>
        </Popover>
      </div>
      <div className="lg:hidden">
        <SearchDatePicker name="pickDate" label="Pick-up Date" disableDate={disabledDateBeforeToday} />
      </div>
      {openRangePickerRes && (
        <div className="absolute top-full left-0 w-full h-screen lg:hidden rounded-lg overflow-auto shadow-xl z-20">
          <DateRangePicker />
        </div>
      )}
    </div>
  );
};

export default PopoverRangePicker;
