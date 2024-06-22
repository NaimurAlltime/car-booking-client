"use client";
import { useDebounced } from "@/hooks/useDebounced";
import { useGetLocationsQuery } from "@/redux/features/location/location.api";
import { getErrorMessageByPropertyName } from "@/utils/Form/schemaValidator";
import { AutoComplete, Input, SelectProps } from "antd";
import { useEffect, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { CiSearch } from "react-icons/ci";

const SearchAutoComplete = ({ name, label }: { name: string; label?: string }) => {
  const query: Record<string, any> = {};
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>("");

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 300,
  });

  if (!!debouncedTerm) {
    query["searchKey"] = debouncedTerm;
  }

  const { data, isLoading, refetch } = useGetLocationsQuery(
    { params: { ...query, fields: "name" } },
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const locations = data?.locations;

  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  const [options, setOptions] = useState<SelectProps<object>["options"]>([]);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    setInputValue(value); // Update the inputValue state
  };

  const onSelect = (value: string, option: any) => {
    setValue(name, option.value); // Set the selected value
    setInputValue(option.label); // Update the inputValue to reflect the selected label
  };

  useEffect(() => {
    const locationOptions = locations?.map((location) => ({
      value: location._id,
      label: location.name,
    }));
    setOptions(locationOptions);
  }, [data, locations]);

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div className={`bg-white flex items-center gap- rounded-md max-w-72 px-2 ${errorMessage && "border-2 border-red-700"}`}>
      <CiSearch className="text-xl font-bold" />
      <div className="block gap-3 justify-center items-center">
        <label className="text-[12px] ms-4 md:ms-2">{label}</label>
        <div>
          <Controller
            name={name}
            control={control}
            render={({ field }) => (
              <AutoComplete
                popupMatchSelectWidth={300}
                style={{ border: "none" }}
                options={options}
                onSelect={onSelect}
                onSearch={handleSearch}
                size="large"
                value={inputValue} // Controlled input value for display
              >
                <Input
                  size="large"
                  placeholder="Select location..."
                  style={{
                    border: "none",
                    outline: "none",
                  }}
                  // Allow the input to be edited after selection
                  onChange={(e) => setInputValue(e.target.value)}
                />
              </AutoComplete>
            )}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchAutoComplete;