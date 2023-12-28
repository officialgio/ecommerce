import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles";

// Object to leverage to use different types of button styles
// Which will be used in getButton()
export const BUTTON_TYPE_CLASSES = {
  base: "based",
  google: "google-sign-in",
  inverted: "inverted",
};

// Based on the type that is passed render the corresponding styled component
const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: BaseButton,
    [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
    [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
  }[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
