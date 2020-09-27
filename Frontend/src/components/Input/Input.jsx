import React from "react";

export default function Input(props) {
  return (
    <div>
      <input
        type={props.type}
        style={props.style}
        placeholder={props.placeholder}
        name={props.name}
        onChange={props.onChange}
        onFocus={props.onFocus}
        required
      />
    </div>
  );
}
