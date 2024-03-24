import { getErrorMessageByPropertyName } from "@/utils/Form/schemaValidator";
import { Checkbox } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type CheckboxFieldProps = {
  name: string;
  label?: string;
  defaultValue?: boolean;
  loading?: boolean;
  handleChange?: (checked: boolean) => void;
};

const FormCheckboxField = ({ name, label, defaultValue, handleChange }: CheckboxFieldProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  // Function to handle change events from the Checkbox
  const onCheckboxChange = (e: any) => {
    // Call the passed handleChange function with the new checked state
    if (handleChange) {
      handleChange(e.target.checked);
    }
  };

  // Get the error message for this field if any
  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => (
          <Checkbox
            checked={field.value}
            onChange={(e) => {
              field.onChange(e.target.checked);
              onCheckboxChange(e);
            }}
          >
            {label}
          </Checkbox>
        )}
      />
      {errorMessage && <small style={{ color: "red" }}>{errorMessage}</small>}
    </>
  );
};

export default FormCheckboxField;
