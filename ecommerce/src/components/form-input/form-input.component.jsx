import { FormInputLabel, Input, Group } from "./form-input.styles";

const FormInput = ({ label, ...otherProps }) => {
  // If there is a value then add a class of "Shrink"
  const hasValueInsideInput = otherProps.value.length;

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
