import { DatePicker, DatePickerProps } from "antd";
import dayjs from "dayjs";
import { Controller, useFormContext } from "react-hook-form";

const SearchDatePicker = ({ name, label, defaultValue }: { name: string; label: string; defaultValue?: any }) => {
  const { control, setValue } = useFormContext();

  // Ensure the defaultValue is formatted correctly
  const formattedDefaultValue = defaultValue ? dayjs(defaultValue).format("YYYY-MM-DD") : dayjs().format("YYYY-MM-DD");

  // Set the formatted default value
  setValue(name, formattedDefaultValue);

  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    // Use dateString to ensure the format remains consistent
    setValue(name, dateString);
  };

  return (
    <div>
      <div className="bg-white max-w-36 rounded-md block gap-3 justify-center items-center">
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
                onChange={handleOnChange}
                format="YYYY-MM-DD" // Consistent date format
                style={{ width: "100%", border: "none" }}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchDatePicker;
