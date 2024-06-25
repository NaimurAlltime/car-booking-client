import {
  setOpenRangePickerOpen,
  setOpenRangePickerResOpen,
} from "@/redux/features/searchbox/searchboxSlice";
import { useAppDispatch } from "@/redux/hooks";
import { addDays, differenceInDays } from "date-fns";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { DateRange } from "react-date-range";
import { useFormContext } from "react-hook-form";

const DateRangePicker = () => {
  const { setValue } = useFormContext();
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 3),
      key: "selection",
    },
  ]);

  const [{ startDate, endDate }] = state;

  useEffect(() => {
    setValue("pickDate", dayjs(startDate).format("YYYY-MM-DD"));
    setValue("returnDate", dayjs(endDate).format("YYYY-MM-DD"));
  }, [startDate, endDate, setValue]);

  const dispatch = useAppDispatch();

  const close = () => {
    dispatch(setOpenRangePickerOpen(false));
    dispatch(setOpenRangePickerResOpen(false));
  };

  console.log(state[0]);

  // Handler for date range change
  const handleDateChange = (item: any) => {
    const selectedRange = item.selection;
    const dayDifference = differenceInDays(
      selectedRange.endDate,
      selectedRange.startDate
    );

    // Enforce a minimum range of 3 days
    if (dayDifference >= 2) {
      setState([selectedRange]);
    } else {
      // If the selected range is less than 3 days, adjust the end date to meet the requirement
      const adjustedEndDate = addDays(selectedRange.startDate, 2);
      setState([
        {
          startDate: selectedRange.startDate,
          endDate: adjustedEndDate,
          key: "selection",
        },
      ]);
    }
  };

  return (
    <div className="bg-white p-5">
      <div className="flex justify-center">
        <div>
          <div className="flex justify-between px-5 w-full">
            <h1>Calendar</h1>
            <button onClick={close}>X</button>
          </div>
          <div className="max-lg:hidden">
            <DateRange
              onChange={handleDateChange}
              moveRangeOnFirstSelection={false}
              months={2}
              ranges={state}
              direction="horizontal"
              showDateDisplay={false}
              // Disable previous dates
              minDate={new Date()}
            />
          </div>
          <div className="lg:hidden">
            <DateRange
              onChange={handleDateChange}
              moveRangeOnFirstSelection={false}
              months={12}
              ranges={state}
              direction="vertical"
              showDateDisplay={false}
              // Disable previous dates
              minDate={new Date()}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateRangePicker;
