"use client";
import { TimePicker } from "antd";
import dayjs from "dayjs";
import { Controller, useFormContext } from "react-hook-form";

function ceilToNextHour(date: any) {
  if (date.getMinutes() !== 0 || date.getSeconds() !== 0) {
    date.setHours(date.getHours() + 1);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
  }
  return date;
}

const SearchTimePicker = ({ name, label }: { name: string; label: string }) => {
  const { control, setValue } = useFormContext();

  const now = new Date();
  const nextHour = ceilToNextHour(new Date(now));
  setValue(name, dayjs(nextHour).format("HH:mm"));

  return (
    <div>
      <div className="bg-white max-w-28 rounded-md block gap-3 justify-center items-center">
        <label className="text-[12px] ms-4 md:ms-2">{label}</label>
        <div>
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <TimePicker
                size="large"
                defaultValue={dayjs(field.value ? field.value : nextHour, "HH:mm")}
                format="HH:mm" // 24-hour format with leading zero
                onChange={(e, value) => {
                  console.log(value);
                  setValue(name, value);
                }}
                style={{ width: "100%", border: "none" }}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchTimePicker;
