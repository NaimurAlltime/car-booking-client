import { setOpenRangePickerOpen, setOpenRangePickerResOpen } from "@/redux/features/searchbox/searchboxSlice";
import { useAppDispatch } from "@/redux/hooks";
import { DatePicker, DatePickerProps } from "antd";
import dayjs from "dayjs";
import { useSearchParams } from "next/navigation";
import { memo } from "react";
import { Controller, useFormContext } from "react-hook-form";

const SearchDatePicker = ({ name, label, defaultValue, disableDate }: { name: string; label: string; defaultValue?: any; disableDate: any }) => {
  const { control, setValue } = useFormContext();
  const searchParams = useSearchParams();

  const defaultValues = Object.fromEntries(searchParams);
  const defaultValueP = defaultValues[name];
  // Ensure the defaultValue is formatted correctly
  const formattedDefaultValue = defaultValueP
    ? defaultValueP
    : defaultValue
    ? dayjs(defaultValue).format("YYYY-MM-DD")
    : dayjs().format("YYYY-MM-DD");

  // Set the formatted default value
  setValue(name, formattedDefaultValue);

  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    // Use dateString to ensure the format remains consistent
    setValue(name, dateString);
  };

  const dispatch = useAppDispatch();

  const handleopne = () => {
    dispatch(setOpenRangePickerOpen(true));
    dispatch(setOpenRangePickerResOpen(true));
  }

  return (
    <div className="relative">
      <div className="bg-white md:max-w-36 w-[155px] rounded-md block gap-3 justify-center items-center z-10">
        <label className="text-[12px] ms-4 md:ms-2">{label}</label>
        <div>
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <DatePicker
                // Use field.value and ensure it is formatted correctly
                value={field.value ? dayjs(field.value, "YYYY-MM-DD") : dayjs(formattedDefaultValue, "YYYY-MM-DD")}
                size="large"
                disabledDate={disableDate}
                onChange={handleOnChange}
                format="YYYY-MM-DD" // Consistent date format
                style={{ width: "100%", border: "none" }}
              />
            )}
          />
        </div>
      </div>
      <div className="absolute w-full h-full top-0 left-0 z-20 cursor-pointer" onClick={handleopne}></div>
    </div>
  );
};

export default memo(SearchDatePicker);
