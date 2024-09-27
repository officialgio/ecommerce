import { FC, InputHTMLAttributes } from "react";
import { FormInputLabel, Input, Group } from "./form-input.styles";

type FormInputProps = {
  label: string;
} & InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<FormInputProps> = ({ label, ...otherProps }) => {
  // If there is a value then add a class of "Shrink"
  const hasValueInsideInput = Boolean(
    otherProps.value &&
      typeof otherProps.value === "string" &&
      otherProps.value.length
  );

  return (
    <Group>
      <Input {...otherProps} />
      {label && (
        <FormInputLabel shrink={hasValueInsideInput}>{label}</FormInputLabel>
      )}
    </Group>
  );
};

export default FormInput;
