"use client";
import { TimePicker } from "antd";
import dayjs from "dayjs";
import { useSearchParams } from "next/navigation";
import { memo } from "react";
import { Controller, useFormContext } from "react-hook-form";

export function ceilToNextHour(date: any) {
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
  const searchParams = useSearchParams();
  const defaultValues = Object.fromEntries(searchParams);
  const defaultValueP = defaultValues[name];

  const now = new Date();
  const nextHour = ceilToNextHour(new Date(now));
  const defaultValue = defaultValueP
    ? defaultValueP
    : dayjs(nextHour).format("HH:mm");
  setValue(name, defaultValue);

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
                defaultValue={
                  field.value ? dayjs(field.value, "HH:mm") : undefined
                }
                format="HH:mm" // 24-hour format with leading zero
                onChange={(e, value) => {
                  // console.log(value);
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

export default memo(SearchTimePicker);
