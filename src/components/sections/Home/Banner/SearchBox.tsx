import Form from "@/components/form/Form";
import FormCheckboxField from "@/components/form/FormCheckbox";
import { useRouter } from "@/lib/router-events";
import searchValidation from "@/schema/search.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, message } from "antd";
import dayjs from "dayjs";
import SearchAutoComplete from "./AutoComplete";
import SearchDatePicker from "./DatePicker";
import SearchTimePicker from "./TimePicker";

const SearchBox = () => {
  const router = useRouter();
  const handleSearch = (data: any) => {
    const pickDate = dayjs(data?.pickDate);
    const returnDate = dayjs(data?.returnDate);
    const diff = returnDate.diff(pickDate, "day");
    console.log(diff);
    if (diff < 3) return message.info("please select for at least 3 days");

    router.push(`/search-result?${new URLSearchParams(data)}`);
  };

  const threeDaysFromNow = new Date();
  threeDaysFromNow.setDate(threeDaysFromNow.getDate() + 3);

  return (
    <div>
      <Form submitHandler={handleSearch} resolver={zodResolver(searchValidation)}>
        <div className="flex flex-wrap gap-2 p-3 rounded-md bg-[#ffb700]">
          <SearchAutoComplete name="location" label="Pick-up Location" />
          <SearchDatePicker name="pickDate" label="Pick-up Date" />
          <SearchTimePicker name="pickTime" label="Time" />
          <SearchDatePicker name="returnDate" label="Return Date" defaultValue={threeDaysFromNow} />
          <SearchTimePicker name="returnTime" label="Time" />
          <div>
            <Button
              htmlType="submit"
              className="max-w-28"
              style={{
                backgroundColor: "#068323",
                color: "white",
                height: "100%",
                width: "7rem",
              }}
            >
              Search
            </Button>
          </div>
        </div>
        <div className="text-xl  font-semibold mt-3 md:flex flex-none gap-5 items-center justify-center">
          <div>
            <FormCheckboxField
              name="dropOff"
              label="Drop car off diffrect location"
              style={{
                color: "white",
              }}
            />
          </div>
          <div>
            <FormCheckboxField
              name="driverAge"
              label="Driver aged 30 - 65?"
              style={{
                color: "white",
              }}
            />
          </div>
        </div>
      </Form>
    </div>
  );
};

export default SearchBox;
