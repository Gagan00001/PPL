import React from "react";

const Input = ({
  type,
  id,
  style,
  placeholder,
  name,
  onFocus,
  value,
  required,
  onChange,
  ...otherProps
}) => {
  return (
    <>
      <input
        id={id}
        type={type}
        style={style}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        onFocus={onFocus}
        value={value}
        required
        {...otherProps}
      />
    </>
  );
};

Input.defaultProps = {
  required: true,
  style: {},
  type: "text",
  placeholder: "Enter Value",
  name: "",
  onFocus: () => {},
  onChange: () => {},
  value: null,
};

// Input.propTypes = {
//   message: PropTypes.string,
//   showIcon: PropTypes.bool,
//   closable: PropTypes.bool,
//   type: PropTypes.string,
// };

export default Input;
