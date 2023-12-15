import "./form-input.styles.scss";

const FormInput = ({ label, ...otherProps }) => {
  // If there is a value then add a class of "Shrink"
  const labelClassName = `${
    otherProps.value.length ? "shrink" : ""
  } form-input-label `;

  // Reuse the component
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && <label className={labelClassName}>{label}</label>}
    </div>
  );
};

export default FormInput;
