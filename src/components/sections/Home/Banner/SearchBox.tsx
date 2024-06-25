import Form from "@/components/form/Form";
import FormCheckboxField from "@/components/form/FormCheckbox";
import { useRouter } from "@/lib/router-events";
import searchValidation from "@/schema/search.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { message } from "antd";
import dayjs from "dayjs";
import { usePathname, useSearchParams } from "next/navigation";
import SearchAutoComplete from "./AutoComplete";
import SearchDatePicker from "./DatePicker";
import DropOffValue from "./DropOffValue";
import PopoverRangePicker from "./PopoverRangePicker";
import SearchTimePicker from "./TimePicker";

const SearchBox = () => {
  const path = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchParamsObj = Object.fromEntries(searchParams);

  const handleSearch = (data: any) => {
    const pickDate = dayjs(data?.pickDate);
    const returnDate = dayjs(data?.returnDate);
    const diff = returnDate.diff(pickDate, "day");
    if (diff < 3) return message.info("please select for at least 3 days");
    const newParams = { ...searchParamsObj, ...data };
    // console.log(searchParamsObj);
    // console.log(data);
    router.push(`/search-result?${new URLSearchParams(newParams)}`);
  };

  const threeDaysFromNow = new Date();
  threeDaysFromNow.setDate(threeDaysFromNow.getDate() + 3);

  const disabledDateBeforeToday = (current: dayjs.Dayjs | null) => {
    return current && current < dayjs().startOf("day");
  };

  const disabledDateForReturn = (current: dayjs.Dayjs | null) => {
    return current && current < dayjs().startOf("day").add(3, "day");
  };

  return (
    <div>
      <Form
        submitHandler={handleSearch}
        resolver={zodResolver(searchValidation)}
      >
        <div className="flex max-lg:flex-wrap gap-2 p-3 rounded-md bg-[#ffb700] relative">
          <SearchAutoComplete name="location" label="Pick-up Location" />
          <DropOffValue />
          <PopoverRangePicker
            disabledDateBeforeToday={disabledDateBeforeToday}
          />
          <SearchTimePicker name="pickTime" label="Time" />
          <SearchDatePicker
            name="returnDate"
            label="Return Date"
            defaultValue={threeDaysFromNow}
            disableDate={disabledDateForReturn}
          />
          <SearchTimePicker name="returnTime" label="Time" />
          <div>
            <button
              type="submit"
              className="md:w-[110px] w-[279px] md:py-0 py-3 h-full rounded-md"
              style={{
                backgroundColor: "#068323",
                color: "white",
              }}
            >
              Search
            </button>
          </div>
        </div>
        <div className="text-xl  font-semibold mt-3 md:flex flex-none gap-5 items-center justify-center">
          <div>
            <FormCheckboxField
              name="dropOff"
              label="Drop car off diffrect location"
              style={{
                color: path === "/" ? "white" : "black",
              }}
            />
          </div>
          <div>
            <FormCheckboxField
              name="driverAge"
              label="Driver aged 30 - 65?"
              style={{
                color: path === "/" ? "white" : "black",
              }}
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default SearchBox;
